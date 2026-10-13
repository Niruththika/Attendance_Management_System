
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

@Injectable()
export class AttendanceService {
  constructor(private readonly prisma: PrismaService) {}

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

  if (!user || !["ADMIN", "MANAGER"].includes(user.role)) {
    throw new ForbiddenException(
      "You are not allowed to view company-wide attendance",
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

  
  async startBreak(userId: string, breakType: BreakType) {
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

    const endedAt = new Date();

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
