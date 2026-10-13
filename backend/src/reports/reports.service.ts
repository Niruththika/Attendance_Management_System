// import {
//   BadRequestException,
//   ForbiddenException,
//   Injectable,
// } from "@nestjs/common";
// import { PrismaService } from "../prisma/prisma.service.js";
// import { BreakType, RecordStatus } from "../generated/prisma/client.js";

// const TIME_ZONE = "Asia/Colombo";
// const DAY_MS = 24 * 60 * 60 * 1000;
// const SRI_LANKA_OFFSET_MS = 330 * 60 * 1000;

// type ReportFilters = {
//   month: string;
//   teamId?: string;
//   employeeId?: string;
// };

// function parseMonth(month: string) {
//   if (!/^\d{4}-\d{2}$/.test(month || "")) {
//     throw new BadRequestException("month must use YYYY-MM format");
//   }
//   const [year, monthNumber] = month.split("-").map(Number);
//   if (monthNumber < 1 || monthNumber > 12) {
//     throw new BadRequestException("Invalid month");
//   }
//   return { year, monthNumber };
// }

// // Sri Lankan calendar day boundaries expressed as UTC timestamps.
// function sriLankaDayStartUtc(year: number, monthIndex: number, day: number) {
//   return new Date(Date.UTC(year, monthIndex, day) - SRI_LANKA_OFFSET_MS);
// }

// function sriLankaDateKey(date: Date) {
//   const shifted = new Date(date.getTime() + SRI_LANKA_OFFSET_MS);
//   return [
//     shifted.getUTCFullYear(),
//     String(shifted.getUTCMonth() + 1).padStart(2, "0"),
//     String(shifted.getUTCDate()).padStart(2, "0"),
//   ].join("-");
// }

// function isWeekday(dateKey: string) {
//   const [year, month, day] = dateKey.split("-").map(Number);
//   const weekday = new Date(Date.UTC(year, month - 1, day)).getUTCDay();
//   return weekday >= 1 && weekday <= 5;
// }

// function listWeekdays(startKey: string, endKey: string) {
//   const result: string[] = [];
//   const [sy, sm, sd] = startKey.split("-").map(Number);
//   const [ey, em, ed] = endKey.split("-").map(Number);
//   const cursor = new Date(Date.UTC(sy, sm - 1, sd));
//   const end = new Date(Date.UTC(ey, em - 1, ed));
//   while (cursor <= end) {
//     const key = `${cursor.getUTCFullYear()}-${String(cursor.getUTCMonth() + 1).padStart(2, "0")}-${String(cursor.getUTCDate()).padStart(2, "0")}`;
//     if (isWeekday(key)) result.push(key);
//     cursor.setUTCDate(cursor.getUTCDate() + 1);
//   }
//   return result;
// }

// @Injectable()
// export class ReportsService {
//   constructor(private readonly prisma: PrismaService) {}

//   private async assertReportAccess(userId: string) {
//     const user = await this.prisma.user.findUnique({
//       where: { id: userId },
//       select: { role: true, employeeId: true, status: true },
//     });
//     if (
//       !user ||
//       user.status !== RecordStatus.ACTIVE ||
//       !["ADMIN", "MANAGER"].includes(user.role)
//     ) {
//       throw new ForbiddenException("Only active administrators and managers can view reports");
//     }
//     return user;
//   }

//   async getMonthlyReport(userId: string, filters: ReportFilters) {
//     const user = await this.assertReportAccess(userId);
//     const { year, monthNumber } = parseMonth(filters.month);

//     const nowKey = sriLankaDateKey(new Date());
//     const monthStartKey = `${year}-${String(monthNumber).padStart(2, "0")}-01`;
//     const nextMonthStart = new Date(Date.UTC(year, monthNumber, 1));
//     const monthEndDay = new Date(nextMonthStart.getTime() - DAY_MS).getUTCDate();
//     const monthEndKey = `${year}-${String(monthNumber).padStart(2, "0")}-${String(monthEndDay).padStart(2, "0")}`;
//     const endKey = filters.month === nowKey.slice(0, 7)
//       ? (nowKey < monthEndKey ? nowKey : monthEndKey)
//       : monthEndKey;
//     const startUtc = sriLankaDayStartUtc(year, monthNumber - 1, 1);
//     const endUtcExclusive = sriLankaDayStartUtc(year, monthNumber, 1);
//     const todayStartUtc = sriLankaDayStartUtc(
//       Number(nowKey.slice(0, 4)),
//       Number(nowKey.slice(5, 7)) - 1,
//       Number(nowKey.slice(8, 10)),
//     );
//     const effectiveEndKey = filters.month === nowKey.slice(0, 7) ? nowKey : monthEndKey;

//     const employeeWhere: any = {
//       status: RecordStatus.ACTIVE,
//       ...(filters.employeeId ? { id: filters.employeeId } : {}),
//       ...(filters.teamId ? { teamId: filters.teamId } : {}),
//     };

//     // Managers are restricted to employees assigned to their reporting line.
//     // If the manager has no linked employee record, return no employee records.
//     if (user.role === "MANAGER") {
//       if (!user.employeeId) employeeWhere.id = "__no_employee__";
//       else {
//         employeeWhere.OR = [
//           { managerId: user.employeeId },
//           { id: user.employeeId },
//         ];
//       }
//     }

//     const employees = await this.prisma.employee.findMany({
//       where: employeeWhere,
//       select: {
//         id: true,
//         employeeCode: true,
//         name: true,
//         email: true,
//         team: { select: { id: true, name: true } },
//         attendanceSessions: {
//           where: {
//             clockInAt: { gte: startUtc, lt: endUtcExclusive },
//           },
//           include: {
//             breaks: {
//               orderBy: { startedAt: "asc" },
//             },
//           },
//           orderBy: { clockInAt: "asc" },
//         },
//       },
//       orderBy: { name: "asc" },
//     });

//     const workdays = listWeekdays(monthStartKey, effectiveEndKey);
//     const now = new Date();
//     const rows = employees.map((employee) => {
//       const sessionsByDate = new Map<string, typeof employee.attendanceSessions>();
//       for (const session of employee.attendanceSessions) {
//         const key = sriLankaDateKey(session.clockInAt);
//         const existing = sessionsByDate.get(key) ?? [];
//         existing.push(session);
//         sessionsByDate.set(key, existing);
//       }

//       let presentDays = 0;
//       let absentDays = 0;
//       let incompleteDays = 0;
//       let grossMinutes = 0;
//       let breakMinutes = 0;
//       let netMinutes = 0;
//       let lateDays = 0;

//       const daily = workdays.map((date) => {
//         const sessions = sessionsByDate.get(date) ?? [];
//         const isFuture = date > nowKey;
//         const worked = sessions.length > 0;
//         const status = isFuture
//           ? "NOT_YET"
//           : worked
//             ? sessions.some((s) => s.status === "INCOMPLETE" || (s.status === "IN_PROGRESS" && !s.clockOutAt))
//               ? "INCOMPLETE"
//               : "PRESENT"
//             : "ABSENT";

//         if (!isFuture) {
//           if (worked) presentDays++;
//           else if (date < nowKey) absentDays++;
//         }

//         if (status === "INCOMPLETE") incompleteDays++;

//         let dayGross = 0;
//         let dayBreak = 0;
//         let dayNet = 0;
//         for (const session of sessions) {
//           const end = session.clockOutAt ?? now;
//           const gross = Math.max(0, Math.floor((end.getTime() - session.clockInAt.getTime()) / 60000));
//           const unpaidBreaks = session.breaks.reduce((sum, b) => {
//             if (b.breakType !== BreakType.UNPAID) return sum;
//             const breakEnd = b.endedAt ?? (session.clockOutAt ? session.clockOutAt : now);
//             return sum + Math.max(0, Math.floor((breakEnd.getTime() - b.startedAt.getTime()) / 60000));
//           }, 0);
//           const net = Math.max(0, gross - unpaidBreaks);
//           dayGross += gross;
//           dayBreak += unpaidBreaks;
//           dayNet += net;
//         }
//         grossMinutes += dayGross;
//         breakMinutes += dayBreak;
//         netMinutes += dayNet;

//         return { date, status, sessions: sessions.length, grossMinutes: dayGross, breakMinutes: dayBreak, netMinutes: dayNet };
//       });

//       return {
//         employeeId: employee.id,
//         employeeCode: employee.employeeCode,
//         name: employee.name,
//         email: employee.email,
//         team: employee.team?.name ?? "Unassigned",
//         teamId: employee.team?.id ?? null,
//         scheduledDaysElapsed: workdays.filter((d) => d < nowKey || d === nowKey).length,
//         presentDays,
//         absentDays,
//         incompleteDays,
//         lateDays,
//         grossMinutes,
//         breakMinutes,
//         netMinutes,
//         daily,
//       };
//     });

//     const totalPresent = rows.reduce((sum, r) => sum + r.presentDays, 0);
//     const totalAbsent = rows.reduce((sum, r) => sum + r.absentDays, 0);
//     const totalIncomplete = rows.reduce((sum, r) => sum + r.incompleteDays, 0);
//     const totalNetMinutes = rows.reduce((sum, r) => sum + r.netMinutes, 0);

//     const dailyTrend = workdays
//       .filter((d) => d <= nowKey)
//       .map((date) => {
//         const present = rows.filter((row) => row.daily.find((d) => d.date === date)?.status === "PRESENT").length;
//         const absent = rows.filter((row) => row.daily.find((d) => d.date === date)?.status === "ABSENT").length;
//         const incomplete = rows.filter((row) => row.daily.find((d) => d.date === date)?.status === "INCOMPLETE").length;
//         return { date, present, absent, incomplete };
//       });

//     return {
//       month: filters.month,
//       timezone: TIME_ZONE,
//       workingDays: workdays.length,
//       employeeCount: rows.length,
//       totals: { presentDays: totalPresent, absentDays: totalAbsent, incompleteDays: totalIncomplete, netMinutes: totalNetMinutes },
//       dailyTrend,
//       teamSummary: Object.values(rows.reduce<Record<string, { team: string; presentDays: number; absentDays: number; netMinutes: number }>>((acc, row) => {
//         const key = row.team;
//         acc[key] ??= { team: key, presentDays: 0, absentDays: 0, netMinutes: 0 };
//         acc[key].presentDays += row.presentDays;
//         acc[key].absentDays += row.absentDays;
//         acc[key].netMinutes += row.netMinutes;
//         return acc;
//       }, {})),
//       employees: rows,
//       note: "Monday-Friday schedule assumption. No leave or public-holiday records are configured. Absences are counted only for past weekdays without a session. Late arrivals are not calculated because no shift start-time assignment is used in this report.",
//     };
//   }
// }


import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { BreakType, RecordStatus } from "../generated/prisma/client.js";

const TIME_ZONE = "Asia/Colombo";
const DAY_MS = 24 * 60 * 60 * 1000;
const SRI_LANKA_OFFSET_MS = 330 * 60 * 1000;

type ReportFilters = {
  month: string;
  teamId?: string;
  employeeId?: string;
};

function parseMonth(month: string) {
  if (!/^\d{4}-\d{2}$/.test(month || "")) {
    throw new BadRequestException("month must use YYYY-MM format");
  }

  const [year, monthNumber] = month.split("-").map(Number);

  if (monthNumber < 1 || monthNumber > 12) {
    throw new BadRequestException("Invalid month");
  }

  return { year, monthNumber };
}

// Convert a Sri Lankan calendar date to its UTC start timestamp.
function sriLankaDayStartUtc(
  year: number,
  monthIndex: number,
  day: number,
) {
  return new Date(
    Date.UTC(year, monthIndex, day) - SRI_LANKA_OFFSET_MS,
  );
}

// Get a calendar date in Asia/Colombo as YYYY-MM-DD.
function sriLankaDateKey(date: Date) {
  const shifted = new Date(
    date.getTime() + SRI_LANKA_OFFSET_MS,
  );

  return [
    shifted.getUTCFullYear(),
    String(shifted.getUTCMonth() + 1).padStart(2, "0"),
    String(shifted.getUTCDate()).padStart(2, "0"),
  ].join("-");
}

function isWeekday(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);

  const weekday = new Date(
    Date.UTC(year, month - 1, day),
  ).getUTCDay();

  // Monday-Friday; Saturday and Sunday are excluded.
  return weekday >= 1 && weekday <= 5;
}

function listWeekdays(startKey: string, endKey: string) {
  const result: string[] = [];

  const [sy, sm, sd] = startKey.split("-").map(Number);
  const [ey, em, ed] = endKey.split("-").map(Number);

  const cursor = new Date(Date.UTC(sy, sm - 1, sd));
  const end = new Date(Date.UTC(ey, em - 1, ed));

  while (cursor <= end) {
    const key = [
      cursor.getUTCFullYear(),
      String(cursor.getUTCMonth() + 1).padStart(2, "0"),
      String(cursor.getUTCDate()).padStart(2, "0"),
    ].join("-");

    if (isWeekday(key)) {
      result.push(key);
    }

    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }

  return result;
}

@Injectable()
export class ReportsService {
  constructor(private readonly prisma: PrismaService) {}

  private async assertReportAccess(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        role: true,
        employeeId: true,
        status: true,
      },
    });

    if (
      !user ||
      user.status !== RecordStatus.ACTIVE ||
      !["ADMIN", "MANAGER"].includes(user.role)
    ) {
      throw new ForbiddenException(
        "Only active administrators and managers can view reports",
      );
    }

    return user;
  }

  async getMonthlyReport(
    userId: string,
    filters: ReportFilters,
  ) {
    const user = await this.assertReportAccess(userId);
    const { year, monthNumber } = parseMonth(filters.month);

    const now = new Date();
    const nowKey = sriLankaDateKey(now);
    const currentMonthKey = nowKey.slice(0, 7);

    const monthStartKey =
      `${year}-${String(monthNumber).padStart(2, "0")}-01`;

    const nextMonthStart = new Date(
      Date.UTC(year, monthNumber, 1),
    );

    const monthEndDay = new Date(
      nextMonthStart.getTime() - DAY_MS,
    ).getUTCDate();

    const monthEndKey =
      `${year}-${String(monthNumber).padStart(2, "0")}-${String(monthEndDay).padStart(2, "0")}`;

    // For the current month, report only dates up to today.
    // For past or future months, retain the full month's date range.
    const effectiveEndKey =
      filters.month === currentMonthKey
        ? nowKey
        : monthEndKey;

    const startUtc = sriLankaDayStartUtc(
      year,
      monthNumber - 1,
      1,
    );

    const endUtcExclusive = sriLankaDayStartUtc(
      year,
      monthNumber,
      1,
    );

    const employeeWhere: any = {
      status: RecordStatus.ACTIVE,
      ...(filters.employeeId
        ? { id: filters.employeeId }
        : {}),
      ...(filters.teamId
        ? { teamId: filters.teamId }
        : {}),
    };

    // Managers can view themselves and their direct reports only.
    if (user.role === "MANAGER") {
      if (!user.employeeId) {
        employeeWhere.id = "__no_employee__";
      } else {
        employeeWhere.OR = [
          { managerId: user.employeeId },
          { id: user.employeeId },
        ];
      }
    }

    const employees = await this.prisma.employee.findMany({
      where: employeeWhere,
      select: {
        id: true,
        employeeCode: true,
        name: true,
        email: true,
        team: {
          select: {
            id: true,
            name: true,
          },
        },
        attendanceSessions: {
          where: {
            clockInAt: {
              gte: startUtc,
              lt: endUtcExclusive,
            },
          },
          include: {
            breaks: {
              orderBy: {
                startedAt: "asc",
              },
            },
          },
          orderBy: {
            clockInAt: "asc",
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    const workdays = listWeekdays(
      monthStartKey,
      effectiveEndKey,
    );

    const rows = employees.map((employee) => {
      const sessionsByDate = new Map<
        string,
        typeof employee.attendanceSessions
      >();

      for (const session of employee.attendanceSessions) {
        const key = sriLankaDateKey(session.clockInAt);
        const existing = sessionsByDate.get(key) ?? [];

        existing.push(session);
        sessionsByDate.set(key, existing);
      }

      let presentDays = 0;
      let absentDays = 0;
      let incompleteDays = 0;
      let grossMinutes = 0;
      let breakMinutes = 0;
      let netMinutes = 0;

      const daily = workdays.map((date) => {
        const sessions = sessionsByDate.get(date) ?? [];
        const hasSession = sessions.length > 0;
        const isFuture = date > nowKey;
        const isToday = date === nowKey;

        const hasIncompleteSession = sessions.some(
          (session) =>
            session.status === "INCOMPLETE" ||
            (
              session.status === "IN_PROGRESS" &&
              !session.clockOutAt
            ),
        );

        // A day is incomplete if it has an unfinished session.
        // A day without a session is not marked absent until
        // the calendar day has passed in Sri Lanka.
        let status: "PRESENT" | "ABSENT" | "INCOMPLETE" | "NOT_YET";

        if (isFuture || (isToday && !hasSession)) {
          status = "NOT_YET";
        } else if (!hasSession) {
          status = "ABSENT";
        } else if (hasIncompleteSession) {
          status = "INCOMPLETE";
        } else {
          status = "PRESENT";
        }

        // Count mutually exclusive attendance outcomes.
        if (status === "PRESENT") {
          presentDays++;
        } else if (status === "ABSENT") {
          absentDays++;
        } else if (status === "INCOMPLETE") {
          incompleteDays++;
        }

        let dayGross = 0;
        let dayBreak = 0;
        let dayNet = 0;

        for (const session of sessions) {
          const sessionEnd = session.clockOutAt ?? now;

          const gross = Math.max(
            0,
            Math.floor(
              (
                sessionEnd.getTime() -
                session.clockInAt.getTime()
              ) / 60000,
            ),
          );

          const unpaidBreaks = session.breaks.reduce(
            (sum, breakRecord) => {
              if (breakRecord.breakType !== BreakType.UNPAID) {
                return sum;
              }

              const breakEnd =
                breakRecord.endedAt ??
                (session.clockOutAt ?? now);

              const duration = Math.max(
                0,
                Math.floor(
                  (
                    breakEnd.getTime() -
                    breakRecord.startedAt.getTime()
                  ) / 60000,
                ),
              );

              return sum + duration;
            },
            0,
          );

          const net = Math.max(0, gross - unpaidBreaks);

          dayGross += gross;
          dayBreak += unpaidBreaks;
          dayNet += net;
        }

        grossMinutes += dayGross;
        breakMinutes += dayBreak;
        netMinutes += dayNet;

        return {
          date,
          status,
          sessions: sessions.length,
          grossMinutes: dayGross,
          breakMinutes: dayBreak,
          netMinutes: dayNet,
        };
      });

      return {
        employeeId: employee.id,
        employeeCode: employee.employeeCode,
        name: employee.name,
        email: employee.email,
        team: employee.team?.name ?? "Unassigned",
        teamId: employee.team?.id ?? null,

        // Only completed calendar weekdays count as elapsed.
        scheduledDaysElapsed: workdays.filter(
          (date) => date < nowKey,
        ).length,

        presentDays,
        absentDays,
        incompleteDays,
        lateDays: 0,
        grossMinutes,
        breakMinutes,
        netMinutes,
        daily,
      };
    });

    const totalPresent = rows.reduce(
      (sum, row) => sum + row.presentDays,
      0,
    );

    const totalAbsent = rows.reduce(
      (sum, row) => sum + row.absentDays,
      0,
    );

    const totalIncomplete = rows.reduce(
      (sum, row) => sum + row.incompleteDays,
      0,
    );

    const totalNetMinutes = rows.reduce(
      (sum, row) => sum + row.netMinutes,
      0,
    );

    // Today's no-session status is NOT_YET, not ABSENT.
    // Future dates are excluded from the daily trend.
    const dailyTrend = workdays
      .filter((date) => date <= nowKey)
      .map((date) => {
        const dailyRows = rows.map((row) =>
          row.daily.find((day) => day.date === date),
        );

        return {
          date,
          present: dailyRows.filter(
            (day) => day?.status === "PRESENT",
          ).length,
          absent: dailyRows.filter(
            (day) => day?.status === "ABSENT",
          ).length,
          incomplete: dailyRows.filter(
            (day) => day?.status === "INCOMPLETE",
          ).length,
        };
      });

    const teamSummary = Object.values(
      rows.reduce<
        Record<
          string,
          {
            team: string;
            presentDays: number;
            absentDays: number;
            netMinutes: number;
          }
        >
      >((acc, row) => {
        const key = row.team;

        acc[key] ??= {
          team: key,
          presentDays: 0,
          absentDays: 0,
          netMinutes: 0,
        };

        acc[key].presentDays += row.presentDays;
        acc[key].absentDays += row.absentDays;
        acc[key].netMinutes += row.netMinutes;

        return acc;
      }, {}),
    );

    return {
      month: filters.month,
      timezone: TIME_ZONE,
      workingDays: workdays.length,
      employeeCount: rows.length,
      totals: {
        presentDays: totalPresent,
        absentDays: totalAbsent,
        incompleteDays: totalIncomplete,
        netMinutes: totalNetMinutes,
      },
      dailyTrend,
      teamSummary,
      employees: rows,
      note:
        "Monday-Friday schedule assumption. No leave or public-holiday records are configured. Absences are counted only for past weekdays without an attendance session. The current day is not marked absent when no session exists. Late arrivals are not calculated because shift start times are not used in this report.",
    };
  }
}
