
import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import {
  AttendanceStatus,
  BreakType,
  RecordStatus,
} from "../generated/prisma/client.js";
import { Interval } from "@nestjs/schedule";
@Injectable()
export class AttendanceService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Automatically closes expired paid breaks.
   * Runs every 30 seconds.
   */
  @Interval(30_000)
  async closeExpiredPaidBreaks() {
    const cutoff = new Date(Date.now() - 45 * 60 * 1000);

    const expiredBreaks = await this.prisma.breakRecord.findMany({
      where: {
        breakType: BreakType.PAID,
        endedAt: null,
        startedAt: { lte: cutoff },
      },
      select: {
        id: true,
        startedAt: true,
      },
    });

    for (const item of expiredBreaks) {
      const deadline = new Date(
        item.startedAt.getTime() + 45 * 60 * 1000,
      );

      // Close the break at the exact 45-minute deadline.
      await this.prisma.breakRecord.updateMany({
        where: {
          id: item.id,
          endedAt: null,
        },
        data: {
          endedAt: deadline,
        },
      });
    }
  }

  async clockIn(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        employeeId: true,
        status: true,
        employee: { select: { status: true } },
      },
    });

    if (!user?.employeeId) {
      throw new BadRequestException(
        "Your account is not linked to an employee record",
      );
    }

    if (
      user.status !== RecordStatus.ACTIVE ||
      user.employee?.status !== RecordStatus.ACTIVE
    ) {
      throw new BadRequestException("Your account or employee record is inactive");
    }

    const activeSession = await this.prisma.attendanceSession.findFirst({
      where: {
        employeeId: user.employeeId,
        status: AttendanceStatus.IN_PROGRESS,
        clockOutAt: null,
      },
    });

    if (activeSession) {
      throw new ConflictException("You already have an active session");
    }

    const now = new Date();

    // Use UTC date as a temporary shift date until shift timezone
    // and overnight-shift handling are implemented.
    const shiftDate = new Date(
      Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
    );

    return this.prisma.attendanceSession.create({
      data: {
        employeeId: user.employeeId,
        clockInAt: now,
        shiftDate,
        status: AttendanceStatus.IN_PROGRESS,
      },
    });
  }

  
async getDailyAttendance(userId: string, dateString: string) {
  // Only administrators and managers can view company-wide attendance.
  const user = await this.prisma.user.findUnique({
    where: { id: userId },
    select: { role: true },
  });

  // if (!user || !["ADMIN", "MANAGER"].includes(user.role)) {
  //   throw new ForbiddenException(
  //     "You are not allowed to view company-wide attendance",
  //   );
  // }

  if (!user || user.role !== "ADMIN") {
  throw new ForbiddenException(
    "Only administrators can view company-wide attendance",
  );
}

  // Require a valid date in YYYY-MM-DD format.
  if (
    !dateString ||
    !/^\d{4}-\d{2}-\d{2}$/.test(dateString)
  ) {
    throw new BadRequestException(
      "Please provide a date in YYYY-MM-DD format",
    );
  }

  const [year, month, day] = dateString.split("-").map(Number);

  const selectedDate = new Date(
    Date.UTC(year, month - 1, day),
  );

  // Reject invalid dates such as 2026-02-30.
  if (
    selectedDate.getUTCFullYear() !== year ||
    selectedDate.getUTCMonth() !== month - 1 ||
    selectedDate.getUTCDate() !== day
  ) {
    throw new BadRequestException("Invalid date");
  }

  // Sri Lanka is UTC+05:30.
  // Convert the selected Sri Lankan calendar day into UTC boundaries.
  const startUtc = new Date(
    Date.UTC(year, month - 1, day) - 330 * 60 * 1000,
  );

  const endUtc = new Date(
    startUtc.getTime() + 24 * 60 * 60 * 1000,
  );

  const sessions = await this.prisma.attendanceSession.findMany({
    where: {
      // The report date is based on the employee's clock-in date
      // in Sri Lanka, not the database server's local timezone.
      clockInAt: {
        gte: startUtc,
        lt: endUtc,
      },
    },
    include: {
      employee: {
        select: {
          id: true,
          employeeCode: true,
          name: true,
          email: true,
          status: true,
          team: {
            select: {
              name: true,
            },
          },
        },
      },
      breaks: {
        orderBy: {
          startedAt: "asc",
        },
      },
    },
    orderBy: [
      { clockInAt: "asc" },
      { employee: { name: "asc" } },
    ],
  });

  const now = new Date();

  const records = sessions.map((session) => {
    // For an active session, calculate elapsed time up to now.
    const effectiveClockOut = session.clockOutAt ?? now;

    const grossMinutes = Math.max(
      0,
      Math.floor(
        (effectiveClockOut.getTime() -
          session.clockInAt.getTime()) /
          60000,
      ),
    );

    // Count only unpaid breaks. An open unpaid break is counted
    // from its start time up to now.
    const breakMinutes = session.breaks.reduce(
      (total, breakRecord) => {
        if (breakRecord.breakType !== BreakType.UNPAID) {
          return total;
        }

        const effectiveBreakEnd =
          breakRecord.endedAt ?? now;

        const minutes = Math.max(
          0,
          Math.floor(
            (effectiveBreakEnd.getTime() -
              breakRecord.startedAt.getTime()) /
              60000,
          ),
        );

        return total + minutes;
      },
      0,
    );

    const netMinutes = Math.max(
      0,
      grossMinutes - breakMinutes,
    );

    return {
      sessionId: session.id,
      employee: session.employee,
      clockInAt: session.clockInAt,
      clockOutAt: session.clockOutAt,
      status: session.status,
      isCurrentlyWorking:
        session.clockOutAt === null,
      grossMinutes,
      breakMinutes,
      netMinutes,
      breaks: session.breaks,
    };
  });

  return {
    date: dateString,
    timezone: "Asia/Colombo",
    totalRecords: records.length,
    currentlyWorking: records.filter(
      (record) => record.isCurrentlyWorking,
    ).length,
    completed: records.filter(
      (record) => record.clockOutAt !== null,
    ).length,
    records,
  };
}

// async getManagerDailyAttendance(
//   userId: string,
//   dateString: string,
// ) {
//   const manager = await this.prisma.user.findUnique({
//     where: { id: userId },
//     select: {
//       role: true,
//       employeeId: true,
//     },
//   });

//   if (
//     !manager ||
//     manager.role !== "MANAGER" ||
//     !manager.employeeId
//   ) {
//     throw new ForbiddenException(
//       "A linked Manager account is required",
//     );
//   }

//   if (
//     !dateString ||
//     !/^\d{4}-\d{2}-\d{2}$/.test(dateString)
//   ) {
//     throw new BadRequestException(
//       "Please provide a date in YYYY-MM-DD format",
//     );
//   }

//   const [year, month, day] = dateString.split("-").map(Number);

//   const selectedDate = new Date(
//     Date.UTC(year, month - 1, day),
//   );

//   if (
//     selectedDate.getUTCFullYear() !== year ||
//     selectedDate.getUTCMonth() !== month - 1 ||
//     selectedDate.getUTCDate() !== day
//   ) {
//     throw new BadRequestException("Invalid date");
//   }

//   // Convert the Sri Lankan calendar day to UTC boundaries.
//   const startUtc = new Date(
//     Date.UTC(year, month - 1, day) -
//       330 * 60 * 1000,
//   );

//   const endUtc = new Date(
//     startUtc.getTime() + 24 * 60 * 60 * 1000,
//   );

//   const sessions =
//     await this.prisma.attendanceSession.findMany({
//       where: {
//         employee: {
//           managerId: manager.employeeId,
//         },
//         clockInAt: {
//           gte: startUtc,
//           lt: endUtc,
//         },
//       },
//       include: {
//         employee: {
//           select: {
//             id: true,
//             employeeCode: true,
//             name: true,
//             email: true,
//             status: true,
//             team: {
//               select: { name: true },
//             },
//           },
//         },
//         breaks: {
//           orderBy: { startedAt: "asc" },
//         },
//       },
//       orderBy: { clockInAt: "asc" },
//     });

//   const now = new Date();

//   const records = sessions.map((session) => {
//     const effectiveClockOut = session.clockOutAt ?? now;

//     const grossMinutes = Math.max(
//       0,
//       Math.floor(
//         (effectiveClockOut.getTime() -
//           session.clockInAt.getTime()) / 60000,
//       ),
//     );

//     const breakMinutes = session.breaks.reduce(
//       (total, item) => {
//         if (item.breakType !== BreakType.UNPAID) {
//           return total;
//         }

//         const effectiveEnd = item.endedAt ?? now;

//         return (
//           total +
//           Math.max(
//             0,
//             Math.floor(
//               (effectiveEnd.getTime() -
//                 item.startedAt.getTime()) / 60000,
//             ),
//           )
//         );
//       },
//       0,
//     );

//     return {
//       sessionId: session.id,
//       employee: session.employee,
//       clockInAt: session.clockInAt,
//       clockOutAt: session.clockOutAt,
//       status: session.status,
//       isCurrentlyWorking: session.clockOutAt === null,
//       grossMinutes,
//       breakMinutes,
//       netMinutes: Math.max(0, grossMinutes - breakMinutes),
//       breaks: session.breaks,
//     };
//   });

//   return {
//     date: dateString,
//     timezone: "Asia/Colombo",
//     totalRecords: records.length,
//     currentlyWorking: records.filter(
//       (record) => record.isCurrentlyWorking,
//     ).length,
//     completed: records.filter(
//       (record) => record.clockOutAt !== null,
//     ).length,
//     records,
//   };
// }


async getManagerDailyAttendance(
  userId: string,
  dateString: string,
) {
  const manager = await this.prisma.user.findUnique({
    where: { id: userId },
    select: {
      role: true,
      employeeId: true,
    },
  });

  if (
    !manager ||
    manager.role !== "MANAGER" ||
    !manager.employeeId
  ) {
    throw new ForbiddenException(
      "A linked Manager account is required",
    );
  }

  if (!dateString || !/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    throw new BadRequestException(
      "Please provide a date in YYYY-MM-DD format",
    );
  }

  const [year, month, day] = dateString.split("-").map(Number);

  const selectedDate = new Date(Date.UTC(year, month - 1, day));

  if (
    selectedDate.getUTCFullYear() !== year ||
    selectedDate.getUTCMonth() !== month - 1 ||
    selectedDate.getUTCDate() !== day
  ) {
    throw new BadRequestException("Invalid date");
  }

  // Asia/Colombo is UTC+05:30.
  const startUtc = new Date(
    Date.UTC(year, month - 1, day) - 330 * 60 * 1000,
  );
  const endUtc = new Date(
    startUtc.getTime() + 24 * 60 * 60 * 1000,
  );

  // Fetch only employees assigned to this manager.
  const employees = await this.prisma.employee.findMany({
    where: {
      managerId: manager.employeeId,
    },
    select: {
      id: true,
      employeeCode: true,
      name: true,
      email: true,
      status: true,
      team: {
        select: { name: true },
      },
      attendanceSessions: {
        where: {
          clockInAt: {
            gte: startUtc,
            lt: endUtc,
          },
        },
        include: {
          breaks: {
            orderBy: { startedAt: "asc" },
          },
        },
        orderBy: { clockInAt: "asc" },
      },
    },
    orderBy: { name: "asc" },
  });

  const now = new Date();

  const records = employees.map((employee) => {
    const session = employee.attendanceSessions[0] ?? null;

    if (!session) {
      return {
        sessionId: null,
        employee: {
          id: employee.id,
          employeeCode: employee.employeeCode,
          name: employee.name,
          email: employee.email,
          status: employee.status,
          team: employee.team,
        },
        clockInAt: null,
        clockOutAt: null,
        status: "NOT_CLOCKED_IN",
        isCurrentlyWorking: false,
        isOnBreak: false,
        grossMinutes: 0,
        breakMinutes: 0,
        netMinutes: 0,
        breaks: [],
      };
    }

    const effectiveClockOut = session.clockOutAt ?? now;

    const grossMinutes = Math.max(
      0,
      Math.floor(
        (effectiveClockOut.getTime() -
          session.clockInAt.getTime()) / 60000,
      ),
    );

    const breakMinutes = session.breaks.reduce((total, item) => {
      if (item.breakType !== BreakType.UNPAID) return total;

      const effectiveEnd = item.endedAt ?? now;

      return (
        total +
        Math.max(
          0,
          Math.floor(
            (effectiveEnd.getTime() -
              item.startedAt.getTime()) / 60000,
          ),
        )
      );
    }, 0);

    const isCurrentlyWorking = session.clockOutAt === null;
    const isOnBreak =
      isCurrentlyWorking &&
      session.breaks.some((item) => item.endedAt === null);

    return {
      sessionId: session.id,
      employee: {
        id: employee.id,
        employeeCode: employee.employeeCode,
        name: employee.name,
        email: employee.email,
        status: employee.status,
        team: employee.team,
      },
      clockInAt: session.clockInAt,
      clockOutAt: session.clockOutAt,
      status: isOnBreak
        ? "ON_BREAK"
        : isCurrentlyWorking
          ? "WORKING"
          : "COMPLETED",
      isCurrentlyWorking,
      isOnBreak,
      grossMinutes,
      breakMinutes,
      netMinutes: Math.max(0, grossMinutes - breakMinutes),
      breaks: session.breaks,
    };
  });

  const sessionsWithRecords = records.filter(
    (record) => record.sessionId !== null,
  );

  return {
    date: dateString,
    timezone: "Asia/Colombo",
    totalEmployees: records.length,
    totalRecords: sessionsWithRecords.length,
    currentlyWorking: records.filter(
      (record) => record.isCurrentlyWorking,
    ).length,
    onBreak: records.filter(
      (record) => record.isOnBreak,
    ).length,
    completed: records.filter(
      (record) => record.sessionId !== null && !record.isCurrentlyWorking,
    ).length,
    notClockedIn: records.filter(
      (record) => record.sessionId === null,
    ).length,
    totalNetMinutes: sessionsWithRecords.reduce(
      (total, record) => total + record.netMinutes,
      0,
    ),
    records,
  };
}


  async clockOut(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        employeeId: true,
        status: true,
        employee: { select: { status: true } },
      },
    });

    if (!user?.employeeId) {
      throw new BadRequestException(
        "Your account is not linked to an employee record",
      );
    }

    if (
      user.status !== RecordStatus.ACTIVE ||
      user.employee?.status !== RecordStatus.ACTIVE
    ) {
      throw new BadRequestException("Your account or employee record is inactive");
    }

    const activeSession = await this.prisma.attendanceSession.findFirst({
      where: {
        employeeId: user.employeeId,
        status: AttendanceStatus.IN_PROGRESS,
        clockOutAt: null,
      },
      orderBy: { clockInAt: "desc" },
    });

    if (!activeSession) {
      throw new NotFoundException("No active attendance session was found");
    }

    // Do not allow clock-out while a break is still open.
    const openBreak = await this.prisma.breakRecord.findFirst({
      where: {
        attendanceSessionId: activeSession.id,
        endedAt: null,
      },
    });

    if (openBreak) {
      throw new ConflictException("End your active break before clocking out");
    }

    const clockOutAt = new Date();

    if (clockOutAt <= activeSession.clockInAt) {
      throw new BadRequestException("Invalid clock-out time");
    }

    const grossMinutes = Math.floor(
      (clockOutAt.getTime() - activeSession.clockInAt.getTime()) / 60000,
    );

    const breaks = await this.prisma.breakRecord.findMany({
      where: {
        attendanceSessionId: activeSession.id,
        breakType: BreakType.UNPAID,
        endedAt: { not: null },
      },
      select: { startedAt: true, endedAt: true },
    });

    const breakMinutes = breaks.reduce((total, item) => {
      return (
        total +
        Math.floor(
          (item.endedAt!.getTime() - item.startedAt.getTime()) / 60000,
        )
      );
    }, 0);

    const netMinutes = Math.max(0, grossMinutes - breakMinutes);

    return this.prisma.attendanceSession.update({
      where: { id: activeSession.id },
      data: {
        clockOutAt,
        grossMinutes,
        breakMinutes,
        netMinutes,
        status: AttendanceStatus.COMPLETED,
      },
    });
  }

  
  // async startBreak(userId: string, breakType: BreakType) {
  async startBreak(
  userId: string,
  breakType: BreakType = BreakType.UNPAID,
) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { employeeId: true },
    });

    if (!user?.employeeId) {
      throw new BadRequestException(
        "Your account is not linked to an employee record",
      );
    }

    const session = await this.prisma.attendanceSession.findFirst({
      where: {
        employeeId: user.employeeId,
        status: AttendanceStatus.IN_PROGRESS,
        clockOutAt: null,
      },
    });

    if (!session) {
      throw new NotFoundException("No active attendance session was found");
    }

    const existingBreak = await this.prisma.breakRecord.findFirst({
      where: {
        attendanceSessionId: session.id,
        endedAt: null,
      },
    });

    if (existingBreak) {
      throw new ConflictException("You already have an open break");
    }

    return this.prisma.breakRecord.create({
      data: {
        attendanceSessionId: session.id,
        startedAt: new Date(),
        breakType,
      },
    });
  }

  async endBreak(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { employeeId: true },
    });

    if (!user?.employeeId) {
      throw new BadRequestException(
        "Your account is not linked to an employee record",
      );
    }

    const session = await this.prisma.attendanceSession.findFirst({
      where: {
        employeeId: user.employeeId,
        status: AttendanceStatus.IN_PROGRESS,
        clockOutAt: null,
      },
    });

    if (!session) {
      throw new NotFoundException("No active attendance session was found");
    }

    const openBreak = await this.prisma.breakRecord.findFirst({
      where: {
        attendanceSessionId: session.id,
        endedAt: null,
      },
    });

    if (!openBreak) {
      throw new NotFoundException("No open break was found");
    }

    const now = new Date();

const paidBreakDeadline = new Date(
  openBreak.startedAt.getTime() + 45 * 60 * 1000,
);

const endedAt =
  openBreak.breakType === BreakType.PAID &&
  now > paidBreakDeadline
    ? paidBreakDeadline
    : now;

    if (endedAt <= openBreak.startedAt) {
      throw new BadRequestException("Invalid break end time");
    }

    const updatedBreak = await this.prisma.breakRecord.update({
      where: { id: openBreak.id },
      data: { endedAt },
    });

    // Recalculate completed unpaid break minutes so far.
    const unpaidBreaks = await this.prisma.breakRecord.findMany({
      where: {
        attendanceSessionId: session.id,
        breakType: BreakType.UNPAID,
        endedAt: { not: null },
      },
      select: { startedAt: true, endedAt: true },
    });

    const breakMinutes = unpaidBreaks.reduce((total, item) => {
      return total + Math.floor(
        (item.endedAt!.getTime() - item.startedAt.getTime()) / 60000,
      );
    }, 0);

    await this.prisma.attendanceSession.update({
      where: { id: session.id },
      data: { breakMinutes },
    });

    return updatedBreak;
  }

    async getHistory(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { employeeId: true },
    });

    if (!user?.employeeId) {
      throw new BadRequestException(
        "Your account is not linked to an employee record",
      );
    }

    return this.prisma.attendanceSession.findMany({
      where: {
        employeeId: user.employeeId,
      },
      orderBy: {
        clockInAt: "desc",
      },
      include: {
        breaks: {
          orderBy: {
            startedAt: "asc",
          },
        },
      },
    });
  }

}
