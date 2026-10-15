import { PrismaService } from "../prisma/prisma.service.js";
import { RecordStatus } from "../generated/prisma/client.js";
import { CreateShiftDto } from "./dto/create-shift.dto.js";
import { UpdateShiftDto } from "./dto/update-shift.dto.js";
import { AssignShiftDto } from "./dto/assign-shift.dto.js";
export declare class ShiftsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateShiftDto): Promise<{
        name: string;
        id: string;
        status: RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        startTime: string;
        endTime: string;
        timezone: string;
        workingDays: number[];
        graceMinutes: number;
    }>;
    findAll(): Promise<({
        assignments: ({
            employee: {
                name: string;
                email: string;
                id: string;
                employeeCode: string;
            };
        } & {
            id: string;
            employeeId: string;
            createdAt: Date;
            shiftId: string;
            effectiveFrom: Date;
            effectiveTo: Date | null;
        })[];
    } & {
        name: string;
        id: string;
        status: RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        startTime: string;
        endTime: string;
        timezone: string;
        workingDays: number[];
        graceMinutes: number;
    })[]>;
    update(id: string, dto: UpdateShiftDto): Promise<{
        name: string;
        id: string;
        status: RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        startTime: string;
        endTime: string;
        timezone: string;
        workingDays: number[];
        graceMinutes: number;
    }>;
    assign(dto: AssignShiftDto): Promise<{
        employee: {
            name: string;
            email: string;
            id: string;
            status: RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            employeeCode: string;
            teamId: string | null;
            managerId: string | null;
        };
        shift: {
            name: string;
            id: string;
            status: RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            startTime: string;
            endTime: string;
            timezone: string;
            workingDays: number[];
            graceMinutes: number;
        };
    } & {
        id: string;
        employeeId: string;
        createdAt: Date;
        shiftId: string;
        effectiveFrom: Date;
        effectiveTo: Date | null;
    }>;
    getMyShift(userId: string): Promise<{
        name: string;
        id: string;
        status: RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        startTime: string;
        endTime: string;
        timezone: string;
        workingDays: number[];
        graceMinutes: number;
    } | null>;
    private parseDate;
    private validateTimezone;
}
