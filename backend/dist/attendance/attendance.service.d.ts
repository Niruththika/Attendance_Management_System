import { PrismaService } from "../prisma/prisma.service.js";
import { AttendanceStatus, BreakType, RecordStatus } from "../generated/prisma/client.js";
export declare class AttendanceService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    closeExpiredPaidBreaks(): Promise<void>;
    clockIn(userId: string): Promise<{
        id: string;
        shiftDate: Date;
        clockInAt: Date;
        clockOutAt: Date | null;
        grossMinutes: number | null;
        breakMinutes: number;
        netMinutes: number | null;
        status: AttendanceStatus;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
        shiftId: string | null;
    }>;
    getDailyAttendance(userId: string, dateString: string): Promise<{
        date: string;
        timezone: string;
        totalRecords: number;
        currentlyWorking: number;
        completed: number;
        records: {
            sessionId: string;
            employee: {
                id: string;
                status: RecordStatus;
                email: string;
                employeeCode: string;
                name: string;
                team: {
                    name: string;
                } | null;
            };
            clockInAt: Date;
            clockOutAt: Date | null;
            status: AttendanceStatus;
            isCurrentlyWorking: boolean;
            grossMinutes: number;
            breakMinutes: number;
            netMinutes: number;
            breaks: {
                id: string;
                createdAt: Date;
                startedAt: Date;
                attendanceSessionId: string;
                endedAt: Date | null;
                breakType: BreakType;
            }[];
        }[];
    }>;
    getManagerDailyAttendance(userId: string, dateString: string): Promise<{
        date: string;
        timezone: string;
        totalEmployees: number;
        totalRecords: number;
        currentlyWorking: number;
        onBreak: number;
        completed: number;
        notClockedIn: number;
        totalNetMinutes: number;
        records: ({
            sessionId: null;
            employee: {
                id: string;
                employeeCode: string;
                name: string;
                email: string;
                status: RecordStatus;
                team: {
                    name: string;
                } | null;
            };
            clockInAt: null;
            clockOutAt: null;
            status: string;
            isCurrentlyWorking: boolean;
            isOnBreak: boolean;
            grossMinutes: number;
            breakMinutes: number;
            netMinutes: number;
            breaks: never[];
        } | {
            sessionId: string;
            employee: {
                id: string;
                employeeCode: string;
                name: string;
                email: string;
                status: RecordStatus;
                team: {
                    name: string;
                } | null;
            };
            clockInAt: Date;
            clockOutAt: Date | null;
            status: string;
            isCurrentlyWorking: boolean;
            isOnBreak: boolean;
            grossMinutes: number;
            breakMinutes: number;
            netMinutes: number;
            breaks: {
                id: string;
                createdAt: Date;
                startedAt: Date;
                attendanceSessionId: string;
                endedAt: Date | null;
                breakType: BreakType;
            }[];
        })[];
    }>;
    clockOut(userId: string): Promise<{
        id: string;
        shiftDate: Date;
        clockInAt: Date;
        clockOutAt: Date | null;
        grossMinutes: number | null;
        breakMinutes: number;
        netMinutes: number | null;
        status: AttendanceStatus;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
        shiftId: string | null;
    }>;
    startBreak(userId: string, breakType?: BreakType): Promise<{
        id: string;
        createdAt: Date;
        startedAt: Date;
        attendanceSessionId: string;
        endedAt: Date | null;
        breakType: BreakType;
    }>;
    endBreak(userId: string): Promise<{
        id: string;
        createdAt: Date;
        startedAt: Date;
        attendanceSessionId: string;
        endedAt: Date | null;
        breakType: BreakType;
    }>;
    getHistory(userId: string): Promise<({
        breaks: {
            id: string;
            createdAt: Date;
            startedAt: Date;
            attendanceSessionId: string;
            endedAt: Date | null;
            breakType: BreakType;
        }[];
    } & {
        id: string;
        shiftDate: Date;
        clockInAt: Date;
        clockOutAt: Date | null;
        grossMinutes: number | null;
        breakMinutes: number;
        netMinutes: number | null;
        status: AttendanceStatus;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
        shiftId: string | null;
    })[]>;
}
