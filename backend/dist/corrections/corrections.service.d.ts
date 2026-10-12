import { PrismaService } from "../prisma/prisma.service.js";
import { AttendanceStatus, CorrectionStatus, Role } from "../generated/prisma/client.js";
export declare class CorrectionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createRequest(userId: string, sessionId: string, reason: string, proposedIn?: string, proposedOut?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: CorrectionStatus;
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
    getMyRequests(userId: string): Promise<({
        session: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: CorrectionStatus;
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
    getPendingRequests(userId: string): Promise<({
        session: {
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
        };
        requestedBy: {
            id: string;
            email: string;
            role: Role;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: CorrectionStatus;
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
    reviewRequest(userId: string, requestId: string, decision: "APPROVED" | "REJECTED", reviewNote?: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: CorrectionStatus;
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
