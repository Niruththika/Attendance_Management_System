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
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").CorrectionStatus;
        sessionId: string;
        requestedById: string;
        reviewedById: string | null;
        originalClockInAt: Date | null;
        originalClockOutAt: Date | null;
        proposedIn: Date | null;
        proposedOut: Date | null;
        reason: string;
        reviewNote: string | null;
        reviewedAt: Date | null;
    }>;
    getMyRequests(req: AuthenticatedRequest): Promise<({
        session: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").CorrectionStatus;
        sessionId: string;
        requestedById: string;
        reviewedById: string | null;
        originalClockInAt: Date | null;
        originalClockOutAt: Date | null;
        proposedIn: Date | null;
        proposedOut: Date | null;
        reason: string;
        reviewNote: string | null;
        reviewedAt: Date | null;
    })[]>;
    getPendingRequests(req: AuthenticatedRequest): Promise<({
        session: {
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
        };
        requestedBy: {
            id: string;
            email: string;
            role: import("../generated/prisma/enums.js").Role;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").CorrectionStatus;
        sessionId: string;
        requestedById: string;
        reviewedById: string | null;
        originalClockInAt: Date | null;
        originalClockOutAt: Date | null;
        proposedIn: Date | null;
        proposedOut: Date | null;
        reason: string;
        reviewNote: string | null;
        reviewedAt: Date | null;
    })[]>;
    reviewRequest(req: AuthenticatedRequest, id: string, body: {
        decision: "APPROVED" | "REJECTED";
        reviewNote?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../generated/prisma/enums.js").CorrectionStatus;
        sessionId: string;
        requestedById: string;
        reviewedById: string | null;
        originalClockInAt: Date | null;
        originalClockOutAt: Date | null;
        proposedIn: Date | null;
        proposedOut: Date | null;
        reason: string;
        reviewNote: string | null;
        reviewedAt: Date | null;
    }>;
}
export {};
