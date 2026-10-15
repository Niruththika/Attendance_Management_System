import type { Response } from "express";
import { ReportsService } from "./reports.service.js";
interface AuthenticatedRequest {
    user: {
        userId: string;
        role: string;
    };
}
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    exportMonthlyCsv(req: AuthenticatedRequest, month: string, teamId: string | undefined, employeeId: string | undefined, res: Response): Promise<void>;
    getMonthly(req: AuthenticatedRequest, month: string, teamId?: string, employeeId?: string): Promise<{
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
            correctionCounts: {
                pending: number;
                approved: number;
                rejected: number;
            };
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
    exportMonthly(req: AuthenticatedRequest, month: string, teamId: string | undefined, employeeId: string | undefined, res: Response): Promise<void>;
}
export {};
