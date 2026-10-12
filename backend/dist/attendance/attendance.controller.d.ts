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
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").AttendanceStatus;
        employeeId: string;
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
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").AttendanceStatus;
        employeeId: string;
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
        attendanceSessionId: string;
        startedAt: Date;
        endedAt: Date | null;
        breakType: import("../generated/prisma/enums.js").BreakType;
    }>;
    endBreak(req: AuthenticatedRequest): Promise<{
        id: string;
        createdAt: Date;
        attendanceSessionId: string;
        startedAt: Date;
        endedAt: Date | null;
        breakType: import("../generated/prisma/enums.js").BreakType;
    }>;
    getHistory(req: AuthenticatedRequest): Promise<({
        breaks: {
            id: string;
            createdAt: Date;
            attendanceSessionId: string;
            startedAt: Date;
            endedAt: Date | null;
            breakType: import("../generated/prisma/enums.js").BreakType;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").AttendanceStatus;
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
export {};
