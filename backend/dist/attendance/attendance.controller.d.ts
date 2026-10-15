import { AttendanceService } from "./attendance.service.js";
import { StartBreakDto } from "./dto/start-break.dto.js";
interface AuthenticatedRequest {
    user: {
        userId: string;
        email: string;
        role: string;
        employeeId: string | null;
    };
}
export declare class AttendanceController {
    private readonly attendanceService;
    constructor(attendanceService: AttendanceService);
    clockIn(req: AuthenticatedRequest): Promise<{
        id: string;
        shiftDate: Date;
        clockInAt: Date;
        clockOutAt: Date | null;
        grossMinutes: number | null;
        breakMinutes: number;
        netMinutes: number | null;
        status: import("../generated/prisma/enums.js").AttendanceStatus;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
        shiftId: string | null;
    }>;
    clockOut(req: AuthenticatedRequest): Promise<{
        id: string;
        shiftDate: Date;
        clockInAt: Date;
        clockOutAt: Date | null;
        grossMinutes: number | null;
        breakMinutes: number;
        netMinutes: number | null;
        status: import("../generated/prisma/enums.js").AttendanceStatus;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
        shiftId: string | null;
    }>;
    startBreak(req: AuthenticatedRequest, dto: StartBreakDto): Promise<{
        id: string;
        createdAt: Date;
        startedAt: Date;
        attendanceSessionId: string;
        endedAt: Date | null;
        breakType: import("../generated/prisma/enums.js").BreakType;
    }>;
    endBreak(req: AuthenticatedRequest): Promise<{
        id: string;
        createdAt: Date;
        startedAt: Date;
        attendanceSessionId: string;
        endedAt: Date | null;
        breakType: import("../generated/prisma/enums.js").BreakType;
    }>;
    getHistory(req: AuthenticatedRequest): Promise<({
        breaks: {
            id: string;
            createdAt: Date;
            startedAt: Date;
            attendanceSessionId: string;
            endedAt: Date | null;
            breakType: import("../generated/prisma/enums.js").BreakType;
        }[];
    } & {
        id: string;
        shiftDate: Date;
        clockInAt: Date;
        clockOutAt: Date | null;
        grossMinutes: number | null;
        breakMinutes: number;
        netMinutes: number | null;
        status: import("../generated/prisma/enums.js").AttendanceStatus;
        createdAt: Date;
        updatedAt: Date;
        employeeId: string;
        shiftId: string | null;
    })[]>;
    getManagerDailyAttendance(req: AuthenticatedRequest, date: string): Promise<{
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
                status: import("../generated/prisma/enums.js").RecordStatus;
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
                status: import("../generated/prisma/enums.js").RecordStatus;
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
                breakType: import("../generated/prisma/enums.js").BreakType;
            }[];
        })[];
    }>;
    getDailyAttendance(req: AuthenticatedRequest, date: string): Promise<{
        date: string;
        timezone: string;
        totalRecords: number;
        currentlyWorking: number;
        completed: number;
        records: {
            sessionId: string;
            employee: {
                id: string;
                status: import("../generated/prisma/enums.js").RecordStatus;
                email: string;
                employeeCode: string;
                name: string;
                team: {
                    name: string;
                } | null;
            };
            clockInAt: Date;
            clockOutAt: Date | null;
            status: import("../generated/prisma/enums.js").AttendanceStatus;
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
                breakType: import("../generated/prisma/enums.js").BreakType;
            }[];
        }[];
    }>;
}
export {};
