
// import {
//   BadRequestException,
//   ConflictException,
//   Injectable,
//   NotFoundException,
// } from "@nestjs/common";
// import { PrismaService } from "../prisma/prisma.service.js";
// import { RecordStatus } from "../generated/prisma/client.js";
// import { CreateShiftDto } from "./dto/create-shift.dto.js";
// import { UpdateShiftDto } from "./dto/update-shift.dto.js";
// import { AssignShiftDto } from "./dto/assign-shift.dto.js";

// @Injectable()
// export class ShiftsService {
//   constructor(private readonly prisma: PrismaService) {}

//   async create(dto: CreateShiftDto) {
//     this.validateTimezone(dto.timezone);

//     return this.prisma.shift.create({
//       data: {
//         ...dto,
//         status: RecordStatus.ACTIVE,
//       },
//     });
//   }

//   async findAll() {
//     return this.prisma.shift.findMany({
//       include: {
//         assignments: {
//           include: {
//             employee: {
//               select: {
//                 id: true,
//                 employeeCode: true,
//                 name: true,
//                 email: true,
//               },
//             },
//           },
//         },
//       },
//       orderBy: { name: "asc" },
//     });
//   }

//   async update(id: string, dto: UpdateShiftDto) {
//     const existing = await this.prisma.shift.findUnique({
//       where: { id },
//     });

//     if (!existing) {
//       throw new NotFoundException("Shift not found");
//     }

//     if (dto.timezone) {
//       this.validateTimezone(dto.timezone);
//     }

//     return this.prisma.shift.update({
//       where: { id },
//       data: dto,
//     });
//   }

//   async assign(dto: AssignShiftDto) {
//     const from = this.parseDate(dto.effectiveFrom, "effectiveFrom");
//     const to = dto.effectiveTo
//       ? this.parseDate(dto.effectiveTo, "effectiveTo")
//       : null;

//     if (to && to < from) {
//       throw new BadRequestException(
//         "effectiveTo must be on or after effectiveFrom",
//       );
//     }

//     const [employee, shift] = await Promise.all([
//       this.prisma.employee.findUnique({
//         where: { id: dto.employeeId },
//         select: { id: true, status: true },
//       }),
//       this.prisma.shift.findUnique({
//         where: { id: dto.shiftId },
//         select: { id: true, status: true },
//       }),
//     ]);

//     if (!employee || employee.status !== RecordStatus.ACTIVE) {
//       throw new NotFoundException("Active employee not found");
//     }

//     if (!shift || shift.status !== RecordStatus.ACTIVE) {
//       throw new NotFoundException("Active shift not found");
//     }

//     // Reject overlapping assignments for the same employee.
//     const overlapping = await this.prisma.shiftAssignment.findFirst({
//       where: {
//         employeeId: dto.employeeId,
//         effectiveFrom: { lte: to ?? new Date("9999-12-31T00:00:00.000Z") },
//         OR: [
//           { effectiveTo: null },
//           { effectiveTo: { gte: from } },
//         ],
//       },
//     });

//     if (overlapping) {
//       throw new ConflictException(
//         "This employee already has a shift assignment during that period. End the previous assignment first.",
//       );
//     }

//     return this.prisma.shiftAssignment.create({
//       data: {
//         employeeId: dto.employeeId,
//         shiftId: dto.shiftId,
//         effectiveFrom: from,
//         effectiveTo: to,
//       },
//       include: {
//         employee: true,
//         shift: true,
//       },
//     });
//   }

// //   async getMyShift(userId: string) {
// //     const user = await this.prisma.user.findUnique({
// //       where: { id: userId },
// //       select: { employeeId: true },
// //     });

// //     if (!user?.employeeId) {
// //       throw new BadRequestException(
// //         "Your account is not linked to an employee record",
// //       );
// //     }

// //     // Interpret today's date in the employee's assigned shift timezone.
// //     // A default timezone is used when the employee has no assignment.
// //     const currentAssignments =
// //       await this.prisma.shiftAssignment.findMany({
// //         where: {
// //           employeeId: user.employeeId,
// //           effectiveFrom: { lte: new Date() },
// //           OR: [
// //             { effectiveTo: null },
// //             { effectiveTo: { gte: new Date() } },
// //           ],
// //           shift: { status: RecordStatus.ACTIVE },
// //         },
// //         include: { shift: true },
// //         orderBy: { effectiveFrom: "desc" },
// //       });

// //     if (currentAssignments.length === 0) {
// //       return null;
// //     }

// //     const now = new Date();

// //     const assignment = currentAssignments.find((item) => {
// //       const localDate = new Intl.DateTimeFormat("en-CA", {
// //         timeZone: item.shift.timezone,
// //         year: "numeric",
// //         month: "2-digit",
// //         day: "2-digit",
// //       }).format(now);

// //       const [year, month, day] = localDate.split("-").map(Number);
// //       const shiftDate = new Date(Date.UTC(year, month - 1, day));
// //       return (
// //         item.effectiveFrom.getTime() <= shiftDate.getTime() &&
// //         (!item.effectiveTo ||
// //           item.effectiveTo.getTime() >= shiftDate.getTime())
// //       );
// //     });

// //     return assignment?.shift ?? null;
// //   }

// async getMyShift(userId: string) {
//   const user = await this.prisma.user.findUnique({
//     where: { id: userId },
//     select: { employeeId: true },
//   });

//   if (!user?.employeeId) {
//     throw new BadRequestException(
//       "Your account is not linked to an employee record",
//     );
//   }

//   const now = new Date();

//   // Get this employee's assignments and their shift timezones.
//   const assignments = await this.prisma.shiftAssignment.findMany({
//     where: {
//       employeeId: user.employeeId,
//       shift: {
//         status: RecordStatus.ACTIVE,
//       },
//     },
//     include: {
//       shift: true,
//     },
//     orderBy: {
//       effectiveFrom: "desc",
//     },
//   });

//   // Find the assignment effective on today's date
//   // in the assigned shift's timezone.
//   const assignment = assignments.find((item) => {
//     const localDate = new Intl.DateTimeFormat("en-CA", {
//       timeZone: item.shift.timezone,
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     }).format(now);

//     const [year, month, day] = localDate.split("-").map(Number);

//     const today = Date.UTC(year, month - 1, day);

//     const effectiveFrom = item.effectiveFrom.getTime();
//     const effectiveTo = item.effectiveTo?.getTime();

//     return (
//       effectiveFrom <= today &&
//       (effectiveTo == null || effectiveTo >= today)
//     );
//   });

//   return assignment?.shift ?? null;
// }


//   private parseDate(value: string, field: string): Date {
//     if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
//       throw new BadRequestException(`${field} must use YYYY-MM-DD format`);
//     }

//     const [year, month, day] = value.split("-").map(Number);
//     const date = new Date(Date.UTC(year, month - 1, day));

//     if (
//       date.getUTCFullYear() !== year ||
//       date.getUTCMonth() !== month - 1 ||
//       date.getUTCDate() !== day
//     ) {
//       throw new BadRequestException(`${field} is not a valid date`);
//     }

//     return date;
//   }

//   private validateTimezone(timezone: string) {
//     try {
//       new Intl.DateTimeFormat("en-US", { timeZone: timezone });
//     } catch {
//       throw new BadRequestException("Invalid IANA timezone");
//     }
//   }

  
// }


import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service.js";
import { RecordStatus } from "../generated/prisma/client.js";
import { CreateShiftDto } from "./dto/create-shift.dto.js";
import { UpdateShiftDto } from "./dto/update-shift.dto.js";
import { AssignShiftDto } from "./dto/assign-shift.dto.js";

@Injectable()
export class ShiftsService {
  constructor(private readonly prisma: PrismaService) {}

  // Create a new shift.
  async create(dto: CreateShiftDto) {
    this.validateTimezone(dto.timezone);

    return this.prisma.shift.create({
      data: {
        ...dto,
        status: RecordStatus.ACTIVE,
      },
    });
  }

  // Get all shifts and their employee assignments.
  async findAll() {
    return this.prisma.shift.findMany({
      include: {
        assignments: {
          include: {
            employee: {
              select: {
                id: true,
                employeeCode: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });
  }

  // Update an existing shift.
  async update(id: string, dto: UpdateShiftDto) {
    const existing = await this.prisma.shift.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException("Shift not found");
    }

    if (dto.timezone) {
      this.validateTimezone(dto.timezone);
    }

    return this.prisma.shift.update({
      where: { id },
      data: dto,
    });
  }

  // Assign a shift to an employee for a date range.
  async assign(dto: AssignShiftDto) {
    const from = this.parseDate(dto.effectiveFrom, "effectiveFrom");

    const to = dto.effectiveTo
      ? this.parseDate(dto.effectiveTo, "effectiveTo")
      : null;

    if (to && to.getTime() < from.getTime()) {
      throw new BadRequestException(
        "effectiveTo must be on or after effectiveFrom",
      );
    }

    const [employee, shift] = await Promise.all([
      this.prisma.employee.findUnique({
        where: { id: dto.employeeId },
        select: {
          id: true,
          status: true,
        },
      }),

      this.prisma.shift.findUnique({
        where: { id: dto.shiftId },
        select: {
          id: true,
          status: true,
        },
      }),
    ]);

    if (!employee || employee.status !== RecordStatus.ACTIVE) {
      throw new NotFoundException("Active employee not found");
    }

    if (!shift || shift.status !== RecordStatus.ACTIVE) {
      throw new NotFoundException("Active shift not found");
    }

    // An assignment overlaps when its start is on/before the
    // new assignment's end and its end is on/after the new start.
    const overlapping = await this.prisma.shiftAssignment.findFirst({
      where: {
        employeeId: dto.employeeId,

        effectiveFrom: {
          lte: to ?? new Date("9999-12-31T00:00:00.000Z"),
        },

        OR: [
          { effectiveTo: null },
          { effectiveTo: { gte: from } },
        ],
      },
    });

    if (overlapping) {
      throw new ConflictException(
        "This employee already has a shift assignment during that period. End the previous assignment first.",
      );
    }

    return this.prisma.shiftAssignment.create({
      data: {
        employeeId: dto.employeeId,
        shiftId: dto.shiftId,
        effectiveFrom: from,
        effectiveTo: to,
      },
      include: {
        employee: true,
        shift: true,
      },
    });
  }

  // Get the currently effective shift for the authenticated employee.
  async getMyShift(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        employeeId: true,
      },
    });

    if (!user?.employeeId) {
      throw new BadRequestException(
        "Your account is not linked to an employee record",
      );
    }

    const now = new Date();

    // Fetch this employee's assignments for active shifts.
    const assignments = await this.prisma.shiftAssignment.findMany({
      where: {
        employeeId: user.employeeId,
        shift: {
          status: RecordStatus.ACTIVE,
        },
      },
      include: {
        shift: true,
      },
      orderBy: {
        effectiveFrom: "desc",
      },
    });

    // Compare calendar dates in each shift's own timezone.
    const assignment = assignments.find((item) => {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: item.shift.timezone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).formatToParts(now);

      const getPart = (type: string): number => {
        const value = parts.find((part) => part.type === type)?.value;

        if (!value) {
          throw new BadRequestException(
            "Could not determine the current date for the shift timezone",
          );
        }

        return Number(value);
      };

      const year = getPart("year");
      const month = getPart("month");
      const day = getPart("day");

      // Normalize the calendar date to UTC midnight.
      const today = Date.UTC(year, month - 1, day);

      // Prisma @db.Date values are represented as JavaScript Dates.
      const effectiveFrom = item.effectiveFrom.getTime();
      const effectiveTo = item.effectiveTo?.getTime();

      return (
        effectiveFrom <= today &&
        (effectiveTo == null || effectiveTo >= today)
      );
    });

    // Returns the shift object or null when no current assignment exists.
    return assignment?.shift ?? null;
  }

  // Validate YYYY-MM-DD and convert it to a UTC calendar date.
  private parseDate(value: string, field: string): Date {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      throw new BadRequestException(
        `${field} must use YYYY-MM-DD format`,
      );
    }

    const [year, month, day] = value.split("-").map(Number);

    const date = new Date(Date.UTC(year, month - 1, day));

    if (
      date.getUTCFullYear() !== year ||
      date.getUTCMonth() !== month - 1 ||
      date.getUTCDate() !== day
    ) {
      throw new BadRequestException(
        `${field} is not a valid date`,
      );
    }

    return date;
  }

  // Validate an IANA timezone, such as Asia/Colombo.
  private validateTimezone(timezone: string) {
    try {
      new Intl.DateTimeFormat("en-US", {
        timeZone: timezone,
      });
    } catch {
      throw new BadRequestException("Invalid IANA timezone");
    }
  }
}
