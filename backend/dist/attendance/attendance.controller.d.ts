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
        employeeId: string;
        status: import("../generated/prisma/enums.js").AttendanceStatus;
        createdAt: Date;
        updatedAt: Date;
        shiftId: string | null;
        shiftDate: Date;
        clockInAt: Date;
        clockOutAt: Date | null;
        grossMinutes: number | null;
        breakMinutes: number;
        netMinutes: number | null;
    }>;
    clockOut(req: AuthenticatedRequest): Promise<{
        id: string;
        employeeId: string;
        status: import("../generated/prisma/enums.js").AttendanceStatus;
        createdAt: Date;
        updatedAt: Date;
        shiftId: string | null;
        shiftDate: Date;
        clockInAt: Date;
        clockOutAt: Date | null;
        grossMinutes: number | null;
        breakMinutes: number;
        netMinutes: number | null;
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
        employeeId: string;
        status: import("../generated/prisma/enums.js").AttendanceStatus;
        createdAt: Date;
        updatedAt: Date;
        shiftId: string | null;
        shiftDate: Date;
        clockInAt: Date;
        clockOutAt: Date | null;
        grossMinutes: number | null;
        breakMinutes: number;
        netMinutes: number | null;
    })[]>;
    getDailyAttendance(req: AuthenticatedRequest, date: string): Promise<{
        date: string;
        timezone: string;
        totalRecords: number;
        currentlyWorking: number;
        completed: number;
        records: {
            sessionId: string;
            employee: {
                team: {
                    name: string;
                } | null;
                name: string;
                email: string;
                id: string;
                status: import("../generated/prisma/enums.js").RecordStatus;
                employeeCode: string;
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
