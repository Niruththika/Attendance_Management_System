import { CorrectionsService } from "./corrections.service.js";
interface AuthenticatedRequest {
    user: {
        userId: string;
        email: string;
        role: string;
        employeeId: string | null;
    };
}
export declare class CorrectionsController {
    private readonly correctionsService;
    constructor(correctionsService: CorrectionsService);
    createRequest(req: AuthenticatedRequest, body: {
        sessionId: string;
        reason: string;
        proposedIn?: string;
        proposedOut?: string;
    }): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").CorrectionStatus;
        createdAt: Date;
        updatedAt: Date;
        originalClockInAt: Date | null;
        originalClockOutAt: Date | null;
        proposedIn: Date | null;
        proposedOut: Date | null;
        reason: string;
        reviewNote: string | null;
        reviewedAt: Date | null;
        sessionId: string;
        requestedById: string;
        reviewedById: string | null;
    }>;
    getMyRequests(req: AuthenticatedRequest): Promise<({
        session: {
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
        };
    } & {
        id: string;
        status: import("../generated/prisma/enums.js").CorrectionStatus;
        createdAt: Date;
        updatedAt: Date;
        originalClockInAt: Date | null;
        originalClockOutAt: Date | null;
        proposedIn: Date | null;
        proposedOut: Date | null;
        reason: string;
        reviewNote: string | null;
        reviewedAt: Date | null;
        sessionId: string;
        requestedById: string;
        reviewedById: string | null;
    })[]>;
    getPendingRequests(req: AuthenticatedRequest): Promise<({
        session: {
            employee: {
                name: string;
                email: string;
                id: string;
                employeeCode: string;
                teamId: string | null;
                managerId: string | null;
            };
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
        };
        requestedBy: {
            email: string;
            role: import("../generated/prisma/enums.js").Role;
            id: string;
        };
    } & {
        id: string;
        status: import("../generated/prisma/enums.js").CorrectionStatus;
        createdAt: Date;
        updatedAt: Date;
        originalClockInAt: Date | null;
        originalClockOutAt: Date | null;
        proposedIn: Date | null;
        proposedOut: Date | null;
        reason: string;
        reviewNote: string | null;
        reviewedAt: Date | null;
        sessionId: string;
        requestedById: string;
        reviewedById: string | null;
    })[]>;
    getAllRequests(req: AuthenticatedRequest): Promise<({
        session: {
            employee: {
                name: string;
                email: string;
                id: string;
                employeeCode: string;
                teamId: string | null;
                managerId: string | null;
            };
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
        };
        requestedBy: {
            email: string;
            role: import("../generated/prisma/enums.js").Role;
            id: string;
        };
        reviewedBy: {
            email: string;
            role: import("../generated/prisma/enums.js").Role;
            id: string;
        } | null;
    } & {
        id: string;
        status: import("../generated/prisma/enums.js").CorrectionStatus;
        createdAt: Date;
        updatedAt: Date;
        originalClockInAt: Date | null;
        originalClockOutAt: Date | null;
        proposedIn: Date | null;
        proposedOut: Date | null;
        reason: string;
        reviewNote: string | null;
        reviewedAt: Date | null;
        sessionId: string;
        requestedById: string;
        reviewedById: string | null;
    })[]>;
    reviewRequest(req: AuthenticatedRequest, id: string, body: {
        decision: "APPROVED" | "REJECTED";
        reviewNote?: string;
    }): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").CorrectionStatus;
        createdAt: Date;
        updatedAt: Date;
        originalClockInAt: Date | null;
        originalClockOutAt: Date | null;
        proposedIn: Date | null;
        proposedOut: Date | null;
        reason: string;
        reviewNote: string | null;
        reviewedAt: Date | null;
        sessionId: string;
        requestedById: string;
        reviewedById: string | null;
    }>;
}
export {};
