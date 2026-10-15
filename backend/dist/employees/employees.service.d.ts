import { PrismaService } from "../prisma/prisma.service.js";
import { RecordStatus, Role } from "../generated/prisma/client.js";
import { CreateEmployeeDto } from "./dto/create-employee.dto.js";
import { UpdateEmployeeDto } from "./dto/update-employee.dto.js";
import { CreateEmployeeLoginDto } from "./dto/create-employee-login.dto.js";
export declare class EmployeesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        hasLoginAccount: boolean;
        id: string;
        employeeCode: string;
        name: string;
        email: string;
        status: RecordStatus;
        teamId: string | null;
        managerId: string | null;
    }[]>;
    create(dto: CreateEmployeeDto): Promise<{
        id: string;
        employeeCode: string;
        name: string;
        email: string;
        status: RecordStatus;
        teamId: string | null;
        managerId: string | null;
    }>;
    createLoginAccount(employeeId: string, dto: CreateEmployeeLoginDto): Promise<{
        id: string;
        email: string;
        status: RecordStatus;
        employeeId: string | null;
        role: Role;
    }>;
    update(id: string, dto: UpdateEmployeeDto): Promise<{
        id: string;
        employeeCode: string;
        name: string;
        email: string;
        status: RecordStatus;
        teamId: string | null;
        managerId: string | null;
    }>;
    updateStatus(id: string, status: RecordStatus): Promise<{
        id: string;
        employeeCode: string;
        name: string;
        email: string;
        status: RecordStatus;
        teamId: string | null;
        managerId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findManagers(): Promise<{
        id: string;
        employeeCode: string;
        name: string;
        email: string;
    }[]>;
    private validateAssignments;
    private handleDatabaseError;
}
