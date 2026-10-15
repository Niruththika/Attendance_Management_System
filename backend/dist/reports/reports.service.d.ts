import { PrismaService } from "../prisma/prisma.service.js";
type ReportFilters = {
    month: string;
    teamId?: string;
    employeeId?: string;
};
type CorrectionCounts = {
    pending: number;
    approved: number;
    rejected: number;
};
export declare class ReportsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private assertReportAccess;
    getMonthlyReport(userId: string, filters: ReportFilters): Promise<{
        month: string;
        timezone: string;
        workingDays: number;
        employeeCount: number;
        totals: {
            presentDays: number;
            absentDays: number;
            incompleteDays: number;
            netMinutes: number;
        };
        dailyTrend: {
            date: string;
            present: number;
            absent: number;
            incomplete: number;
        }[];
        teamSummary: {
            team: string;
            presentDays: number;
            absentDays: number;
            netMinutes: number;
        }[];
        employees: {
            employeeId: string;
            employeeCode: string;
            name: string;
            email: string;
            team: string;
            teamId: string | null;
            scheduledDaysElapsed: number;
            presentDays: number;
            absentDays: number;
            incompleteDays: number;
            lateDays: number;
            grossMinutes: number;
            breakMinutes: number;
            netMinutes: number;
            correctionCounts: CorrectionCounts;
            daily: {
                date: string;
                status: "PRESENT" | "ABSENT" | "INCOMPLETE" | "NOT_YET";
                sessions: number;
                grossMinutes: number;
                breakMinutes: number;
                netMinutes: number;
            }[];
        }[];
        note: string;
    }>;
}
export {};
