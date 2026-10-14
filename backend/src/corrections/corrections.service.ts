
// import {
//   BadRequestException,
//   ForbiddenException,
//   Injectable,
//   NotFoundException,
// } from "@nestjs/common";
// import { PrismaService } from "../prisma/prisma.service.js";
// import {
//   AttendanceStatus,
//   CorrectionStatus,
//   Role,
// } from "../generated/prisma/client.js";

// @Injectable()
// export class CorrectionsService {
//   constructor(private readonly prisma: PrismaService) {}

//   async createRequest(
//     userId: string,
//     sessionId: string,
//     reason: string,
//     proposedIn?: string,
//     proposedOut?: string,
//   ) {
//     const user = await this.prisma.user.findUnique({
//       where: { id: userId },
//       select: { employeeId: true },
//     });

//     if (!user?.employeeId) {
//       throw new BadRequestException(
//         "Your account is not linked to an employee record",
//       );
//     }

//     const session = await this.prisma.attendanceSession.findFirst({
//       where: {
//         id: sessionId,
//         employeeId: user.employeeId,
//       },
//     });

//     if (!session) {
//       throw new NotFoundException(
//         "Attendance session not found for this employee",
//       );
//     }

//     if (!reason?.trim()) {
//       throw new BadRequestException("A correction reason is required");
//     }

//     const inDate = proposedIn ? new Date(proposedIn) : undefined;
//     const outDate = proposedOut ? new Date(proposedOut) : undefined;

//     if (
//       (inDate && Number.isNaN(inDate.getTime())) ||
//       (outDate && Number.isNaN(outDate.getTime()))
//     ) {
//       throw new BadRequestException(
//         "Proposed times must be valid date-time values",
//       );
//     }

//     if (inDate && outDate && outDate <= inDate) {
//       throw new BadRequestException(
//         "Proposed clock-out must be later than proposed clock-in",
//       );
//     }

//     return this.prisma.correctionRequest.create({
//       data: {
//         sessionId,
//         requestedById: userId,
//         reason: reason.trim(),
//         originalClockInAt: session.clockInAt,
//         originalClockOutAt: session.clockOutAt,
//         proposedIn: inDate,
//         proposedOut: outDate,
//         status: CorrectionStatus.PENDING,
//       },
//     });
//   }

//   async getMyRequests(userId: string) {
//     return this.prisma.correctionRequest.findMany({
//       where: { requestedById: userId },
//       orderBy: { createdAt: "desc" },
//       include: {
//         session: true,
//       },
//     });
//   }

  
//   async getPendingRequests(userId: string) {
//     const reviewer = await this.prisma.user.findUnique({
//       where: { id: userId },
//       select: { role: true },
//     });

//    if (
//   !reviewer ||
//   (reviewer.role !== Role.ADMIN &&
//     reviewer.role !== Role.MANAGER)
// ) {
//       throw new ForbiddenException(
//         "Only managers and administrators can review corrections",
//       );
//     }

//     return this.prisma.correctionRequest.findMany({
//       where: { status: CorrectionStatus.PENDING },
//       orderBy: { createdAt: "asc" },
//       include: {
//         session: true,
//         requestedBy: {
//           select: { id: true, email: true, role: true },
//         },
//       },
//     });
//   }

//   //new method to review a correction request

  
// async getAllRequests(userId: string) {
//   const user = await this.prisma.user.findUnique({
//     where: { id: userId },
//     select: { role: true },
//   });

//   if (!user || (user.role !== Role.ADMIN && user.role !== Role.MANAGER)) {
//     throw new ForbiddenException(
//       "Only managers and administrators can view all correction requests",
//     );
//   }

//   return this.prisma.correctionRequest.findMany({
//     orderBy: { createdAt: "desc" },
//     include: {
//       session: true,
//       requestedBy: {
//         select: {
//           id: true,
//           email: true,
//           role: true,
//         },
//       },
//       reviewedBy: {
//         select: {
//           id: true,
//           email: true,
//           role: true,
//         },
//       },
//     },
//   });
// }

//   async reviewRequest(
//     userId: string,
//     requestId: string,
//     decision: "APPROVED" | "REJECTED",
//     reviewNote?: string,
//   ) {
//     const reviewer = await this.prisma.user.findUnique({
//       where: { id: userId },
//       select: { role: true },
//     });

//     if (
//       !reviewer ||
//       (reviewer.role !== Role.ADMIN &&
//         reviewer.role !== Role.MANAGER)
//     ) {
//       throw new ForbiddenException(
//         "Only managers and administrators can review corrections",
//       );
//     }

//     if (!["APPROVED", "REJECTED"].includes(decision)) {
//       throw new BadRequestException(
//         "Decision must be APPROVED or REJECTED",
//       );
//     }

//     const request = await this.prisma.correctionRequest.findUnique({
//       where: { id: requestId },
//       include: { session: true },
//     });

//     if (!request) {
//       throw new NotFoundException("Correction request not found");
//     }

    

//     if (request.status !== CorrectionStatus.PENDING) {
//       throw new BadRequestException(
//         "This correction request has already been reviewed",
//       );
//     }

//     if (decision === "APPROVED") {
//       const clockInAt = request.proposedIn ?? request.session.clockInAt;
//       const clockOutAt = request.proposedOut ?? request.session.clockOutAt;

//       if (clockOutAt && clockOutAt <= clockInAt) {
//         throw new BadRequestException(
//           "Clock-out must be later than clock-in",
//         );
//       }

//       if (request.proposedOut && !clockOutAt) {
//         throw new BadRequestException("Invalid proposed clock-out time");
//       }

//       const now = new Date();

//       const grossMinutes = clockOutAt
//         ? Math.floor(
//             (clockOutAt.getTime() - clockInAt.getTime()) / 60000,
//           )
//         : null;

//       const breakRecords = await this.prisma.breakRecord.findMany({
//         where: { attendanceSessionId: request.sessionId },
//         select: { startedAt: true, endedAt: true, breakType: true },
//       });

//       const breakMinutes = breakRecords.reduce((total, record) => {
//         if (
//           record.breakType === "UNPAID" &&
//           record.endedAt &&
//           clockOutAt
//         ) {
//           const start = Math.max(
//             record.startedAt.getTime(),
//             clockInAt.getTime(),
//           );
//           const end = Math.min(
//             record.endedAt.getTime(),
//             clockOutAt.getTime(),
//           );

//           if (end > start) {
//             return total + Math.floor((end - start) / 60000);
//           }
//         }

//         return total;
//       }, 0);

//       const netMinutes =
//         grossMinutes === null ? null : grossMinutes - breakMinutes;

//       return this.prisma.$transaction(async (tx) => {
//         const updatedRequest = await tx.correctionRequest.update({
//           where: { id: requestId },
//           data: {
//             status: CorrectionStatus.APPROVED,
//             reviewedById: userId,
//             reviewedAt: now,
//             reviewNote,
//           },
//         });

//         await tx.attendanceSession.update({
//           where: { id: request.sessionId },
//           data: {
//             clockInAt,
//             clockOutAt,
//             grossMinutes,
//             breakMinutes,
//             netMinutes,
//             status: clockOutAt
//               ? AttendanceStatus.COMPLETED
//               : AttendanceStatus.IN_PROGRESS,
//           },
//         });

//         await tx.activityLog.create({
//           data: {
//             actorId: userId,
//             action: "CORRECTION_APPROVED",
//             targetType: "CorrectionRequest",
//             targetId: requestId,
//             oldValues: {
//               clockInAt: request.session.clockInAt.toISOString(),
//               clockOutAt: request.session.clockOutAt?.toISOString() ?? null,
//             },
//             newValues: {
//               clockInAt: clockInAt.toISOString(),
//               clockOutAt: clockOutAt?.toISOString() ?? null,
//             },
//           },
//         });

//         return updatedRequest;
//       });
//     }

//     return this.prisma.$transaction(async (tx) => {
//       const updatedRequest = await tx.correctionRequest.update({
//         where: { id: requestId },
//         data: {
//           status: CorrectionStatus.REJECTED,
//           reviewedById: userId,
//           reviewedAt: new Date(),
//           reviewNote,
//         },
//       });

//       await tx.activityLog.create({
//         data: {
//           actorId: userId,
//           action: "CORRECTION_REJECTED",
//           targetType: "CorrectionRequest",
//           targetId: requestId,
//           oldValues: { status: CorrectionStatus.PENDING },
//           newValues: {
//             status: CorrectionStatus.REJECTED,
//             reviewNote: reviewNote ?? null,
//           },
//         },
//       });

//       return updatedRequest;
//     });
//   }

// }



import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import {
  AttendanceStatus,
  CorrectionStatus,
  Role,
} from "../generated/prisma/client.js";

@Injectable()
export class CorrectionsService {
  constructor(private readonly prisma: PrismaService) {}

  async createRequest(
    userId: string,
    sessionId: string,
    reason: string,
    proposedIn?: string,
    proposedOut?: string,
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
        id: sessionId,
        employeeId: user.employeeId,
      },
    });

    if (!session) {
      throw new NotFoundException(
        "Attendance session not found for this employee",
      );
    }

    if (!reason?.trim()) {
      throw new BadRequestException("A correction reason is required");
    }

    const inDate = proposedIn ? new Date(proposedIn) : undefined;
    const outDate = proposedOut ? new Date(proposedOut) : undefined;

    if (
      (inDate && Number.isNaN(inDate.getTime())) ||
      (outDate && Number.isNaN(outDate.getTime()))
    ) {
      throw new BadRequestException(
        "Proposed times must be valid date-time values",
      );
    }

    if (inDate && outDate && outDate <= inDate) {
      throw new BadRequestException(
        "Proposed clock-out must be later than proposed clock-in",
      );
    }

    if (!proposedIn && !proposedOut) {
  throw new BadRequestException(
    "Provide at least one proposed clock-in or clock-out time",
  );
}

const effectiveIn = inDate ?? session.clockInAt;
const effectiveOut = outDate ?? session.clockOutAt;

if (effectiveOut && effectiveOut <= effectiveIn) {
  throw new BadRequestException(
    "Proposed clock-out must be later than the effective clock-in",
  );
}

    return this.prisma.correctionRequest.create({
      data: {
        sessionId,
        requestedById: userId,
        reason: reason.trim(),
        originalClockInAt: session.clockInAt,
        originalClockOutAt: session.clockOutAt,
        proposedIn: inDate,
        proposedOut: outDate,
        status: CorrectionStatus.PENDING,
      },
    });
  }

  async getMyRequests(userId: string) {
    return this.prisma.correctionRequest.findMany({
      where: { requestedById: userId },
      orderBy: { createdAt: "desc" },
      include: {
        session: true,
      },
    });
  }

  
//   async getPendingRequests(userId: string) {
//     const reviewer = await this.prisma.user.findUnique({
//       where: { id: userId },
//       select: { role: true },
//     });

//    if (
//   !reviewer ||
//   (reviewer.role !== Role.ADMIN &&
//     reviewer.role !== Role.MANAGER)
// ) {
//       throw new ForbiddenException(
//         "Only managers and administrators can review corrections",
//       );
//     }

//     return this.prisma.correctionRequest.findMany({
//       where: { status: CorrectionStatus.PENDING },
//       orderBy: { createdAt: "asc" },
//       include: {
//         session: true,
//         requestedBy: {
//           select: { id: true, email: true, role: true },
//         },
//       },
//     });
//   }

  //new method to review a correction request

async getPendingRequests(userId: string) {
  const reviewer = await this.getReviewer(userId);

  const employeeFilter =
    reviewer.role === Role.ADMIN
      ? {}
      : reviewer.employeeId
        ? {
            session: {
              employee: {
                managerId: reviewer.employeeId,
              },
            },
          }
        : { id: "__no_matching_request__" };

  return this.prisma.correctionRequest.findMany({
    where: {
      status: CorrectionStatus.PENDING,
      ...employeeFilter,
    },
    orderBy: { createdAt: "asc" },
    include: {
      session: {
        include: {
          employee: {
            select: {
              id: true,
              employeeCode: true,
              name: true,
              email: true,
              managerId: true,
              teamId: true,
            },
          },
          breaks: true,
        },
      },
      requestedBy: {
        select: {
          id: true,
          email: true,
          role: true,
        },
      },
    },
  });
}

// async getAllRequests(userId: string) {
//   const user = await this.prisma.user.findUnique({
//     where: { id: userId },
//     select: { role: true },
//   });

//   if (!user || (user.role !== Role.ADMIN && user.role !== Role.MANAGER)) {
//     throw new ForbiddenException(
//       "Only managers and administrators can view all correction requests",
//     );
//   }

//   return this.prisma.correctionRequest.findMany({
//     orderBy: { createdAt: "desc" },
//     include: {
//       session: true,
//       requestedBy: {
//         select: {
//           id: true,
//           email: true,
//           role: true,
//         },
//       },
//       reviewedBy: {
//         select: {
//           id: true,
//           email: true,
//           role: true,
//         },
//       },
//     },
//   });
// }
async getAllRequests(userId: string) {
  const reviewer = await this.getReviewer(userId);

  const employeeFilter =
    reviewer.role === Role.ADMIN
      ? {}
      : reviewer.employeeId
        ? {
            session: {
              employee: {
                managerId: reviewer.employeeId,
              },
            },
          }
        : { id: "__no_matching_request__" };

  return this.prisma.correctionRequest.findMany({
    where: employeeFilter,
    orderBy: { createdAt: "desc" },
    include: {
      session: {
        include: {
          employee: {
            select: {
              id: true,
              employeeCode: true,
              name: true,
              email: true,
              managerId: true,
              teamId: true,
            },
          },
        },
      },
      requestedBy: {
        select: {
          id: true,
          email: true,
          role: true,
        },
      },
      reviewedBy: {
        select: {
          id: true,
          email: true,
          role: true,
        },
      },
    },
  });
}
  async reviewRequest(
    userId: string,
    requestId: string,
    decision: "APPROVED" | "REJECTED",
    reviewNote?: string,
  ) {
    const reviewer = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { role: true },
    });

    if (
      !reviewer ||
      (reviewer.role !== Role.ADMIN &&
        reviewer.role !== Role.MANAGER)
    ) {
      throw new ForbiddenException(
        "Only managers and administrators can review corrections",
      );
    }

    if (!["APPROVED", "REJECTED"].includes(decision)) {
      throw new BadRequestException(
        "Decision must be APPROVED or REJECTED",
      );
    }

    const request = await this.prisma.correctionRequest.findUnique({
      where: { id: requestId },
      include: { session: true },
    });

    if (!request) {
      throw new NotFoundException("Correction request not found");
    }

    if (request.requestedById === userId) {
  throw new ForbiddenException(
    "You cannot review your own correction request",
  );
}

    if (request.status !== CorrectionStatus.PENDING) {
      throw new BadRequestException(
        "This correction request has already been reviewed",
      );
    }

    if (decision === "APPROVED") {
      const clockInAt = request.proposedIn ?? request.session.clockInAt;
      const clockOutAt = request.proposedOut ?? request.session.clockOutAt;

      if (clockOutAt && clockOutAt <= clockInAt) {
        throw new BadRequestException(
          "Clock-out must be later than clock-in",
        );
      }

      if (request.proposedOut && !clockOutAt) {
        throw new BadRequestException("Invalid proposed clock-out time");
      }

      const now = new Date();

      const grossMinutes = clockOutAt
        ? Math.floor(
            (clockOutAt.getTime() - clockInAt.getTime()) / 60000,
          )
        : null;

      const breakRecords = await this.prisma.breakRecord.findMany({
        where: { attendanceSessionId: request.sessionId },
        select: { startedAt: true, endedAt: true, breakType: true },
      });

      const breakMinutes = breakRecords.reduce((total, record) => {
        if (
          record.breakType === "UNPAID" &&
          record.endedAt &&
          clockOutAt
        ) {
          const start = Math.max(
            record.startedAt.getTime(),
            clockInAt.getTime(),
          );
          const end = Math.min(
            record.endedAt.getTime(),
            clockOutAt.getTime(),
          );

          if (end > start) {
            return total + Math.floor((end - start) / 60000);
          }
        }

        return total;
      }, 0);

      const netMinutes =
        grossMinutes === null ? null : grossMinutes - breakMinutes;

      return this.prisma.$transaction(async (tx) => {
        const updatedRequest = await tx.correctionRequest.update({
          where: { id: requestId },
          data: {
            status: CorrectionStatus.APPROVED,
            reviewedById: userId,
            reviewedAt: now,
            reviewNote,
          },
        });

        await tx.attendanceSession.update({
          where: { id: request.sessionId },
          data: {
            clockInAt,
            clockOutAt,
            grossMinutes,
            breakMinutes,
            netMinutes,
            status: clockOutAt
              ? AttendanceStatus.COMPLETED
              : AttendanceStatus.IN_PROGRESS,
          },
        });

        await tx.activityLog.create({
          data: {
            actorId: userId,
            action: "CORRECTION_APPROVED",
            targetType: "CorrectionRequest",
            targetId: requestId,
            oldValues: {
              clockInAt: request.session.clockInAt.toISOString(),
              clockOutAt: request.session.clockOutAt?.toISOString() ?? null,
            },
            newValues: {
              clockInAt: clockInAt.toISOString(),
              clockOutAt: clockOutAt?.toISOString() ?? null,
            },
          },
        });

        return updatedRequest;
      });
    }

    return this.prisma.$transaction(async (tx) => {
      const updatedRequest = await tx.correctionRequest.update({
        where: { id: requestId },
        data: {
          status: CorrectionStatus.REJECTED,
          reviewedById: userId,
          reviewedAt: new Date(),
          reviewNote,
        },
      });

      await tx.activityLog.create({
        data: {
          actorId: userId,
          action: "CORRECTION_REJECTED",
          targetType: "CorrectionRequest",
          targetId: requestId,
          oldValues: { status: CorrectionStatus.PENDING },
          newValues: {
            status: CorrectionStatus.REJECTED,
            reviewNote: reviewNote ?? null,
          },
        },
      });

      return updatedRequest;
    });

  }
  private async getReviewer(userId: string) {
  const reviewer = await this.prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      role: true,
      employeeId: true,
    },
  });

  if (
    !reviewer ||
    (reviewer.role !== Role.ADMIN &&
      reviewer.role !== Role.MANAGER)
  ) {
    throw new ForbiddenException(
      "Only managers and administrators can review corrections",
    );
  }

  return reviewer;
}

}
