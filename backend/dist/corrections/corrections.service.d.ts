import { PrismaService } from "../prisma/prisma.service.js";
import { AttendanceStatus, CorrectionStatus, Role } from "../generated/prisma/client.js";
export declare class CorrectionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createRequest(userId: string, sessionId: string, reason: string, proposedIn?: string, proposedOut?: string): Promise<{
        id: string;
        status: CorrectionStatus;
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
    getMyRequests(userId: string): Promise<({
        session: {
            id: string;
            employeeId: string;
            status: AttendanceStatus;
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
        status: CorrectionStatus;
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
    getPendingRequests(userId: string): Promise<({
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
            status: AttendanceStatus;
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
            role: Role;
            id: string;
        };
    } & {
        id: string;
        status: CorrectionStatus;
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
    getAllRequests(userId: string): Promise<({
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
            status: AttendanceStatus;
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
            role: Role;
            id: string;
        };
        reviewedBy: {
            email: string;
            role: Role;
            id: string;
        } | null;
    } & {
        id: string;
        status: CorrectionStatus;
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
    reviewRequest(userId: string, requestId: string, decision: "APPROVED" | "REJECTED", reviewNote?: string): Promise<{
        id: string;
        status: CorrectionStatus;
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
    private getReviewer;
}
