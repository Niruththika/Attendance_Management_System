import { ShiftsService } from "./shifts.service.js";
import { CreateShiftDto } from "./dto/create-shift.dto.js";
import { UpdateShiftDto } from "./dto/update-shift.dto.js";
import { AssignShiftDto } from "./dto/assign-shift.dto.js";
export declare class ShiftsController {
    private readonly shiftsService;
    constructor(shiftsService: ShiftsService);
    create(dto: CreateShiftDto): Promise<{
        name: string;
        id: string;
        status: import("../generated/prisma/enums.js").RecordStatus;
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
        status: import("../generated/prisma/enums.js").RecordStatus;
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
        status: import("../generated/prisma/enums.js").RecordStatus;
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
            status: import("../generated/prisma/enums.js").RecordStatus;
            createdAt: Date;
            updatedAt: Date;
            employeeCode: string;
            teamId: string | null;
            managerId: string | null;
        };
        shift: {
            name: string;
            id: string;
            status: import("../generated/prisma/enums.js").RecordStatus;
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
    getMyShift(req: any): Promise<{
        name: string;
        id: string;
        status: import("../generated/prisma/enums.js").RecordStatus;
        createdAt: Date;
        updatedAt: Date;
        startTime: string;
        endTime: string;
        timezone: string;
        workingDays: number[];
        graceMinutes: number;
    } | null>;
    test(): {
        message: string;
    };
}
