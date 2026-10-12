import { PrismaService } from "../prisma/prisma.service.js";
import { AttendanceStatus, BreakType } from "../generated/prisma/client.js";
export declare class AttendanceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    clockIn(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: AttendanceStatus;
        employeeId: string;
        shiftId: string | null;
        shiftDate: Date;
        clockInAt: Date;
        clockOutAt: Date | null;
        grossMinutes: number | null;
        breakMinutes: number;
        netMinutes: number | null;
    }>;
    clockOut(userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: AttendanceStatus;
        employeeId: string;
        shiftId: string | null;
        shiftDate: Date;
        clockInAt: Date;
        clockOutAt: Date | null;
        grossMinutes: number | null;
        breakMinutes: number;
        netMinutes: number | null;
    }>;
    startBreak(userId: string, breakType: BreakType): Promise<{
        id: string;
        createdAt: Date;
        attendanceSessionId: string;
        startedAt: Date;
        endedAt: Date | null;
        breakType: BreakType;
    }>;
    endBreak(userId: string): Promise<{
        id: string;
        createdAt: Date;
        attendanceSessionId: string;
        startedAt: Date;
        endedAt: Date | null;
        breakType: BreakType;
    }>;
    getHistory(userId: string): Promise<({
        breaks: {
            id: string;
            createdAt: Date;
            attendanceSessionId: string;
            startedAt: Date;
            endedAt: Date | null;
            breakType: BreakType;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: AttendanceStatus;
        employeeId: string;
        shiftId: string | null;
        shiftDate: Date;
        clockInAt: Date;
        clockOutAt: Date | null;
        grossMinutes: number | null;
        breakMinutes: number;
        netMinutes: number | null;
    })[]>;
}
