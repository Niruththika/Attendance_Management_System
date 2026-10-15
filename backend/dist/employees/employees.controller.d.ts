import { EmployeesService } from "./employees.service.js";
import { RecordStatus } from "../generated/prisma/client.js";
import { CreateEmployeeDto } from "./dto/create-employee.dto.js";
import { UpdateEmployeeDto } from "./dto/update-employee.dto.js";
import { CreateEmployeeLoginDto } from "./dto/create-employee-login.dto.js";
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
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
    findManagers(): Promise<{
        id: string;
        employeeCode: string;
        name: string;
        email: string;
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
    createLoginAccount(id: string, dto: CreateEmployeeLoginDto): Promise<{
        id: string;
        email: string;
        status: RecordStatus;
        employeeId: string | null;
        role: import("../generated/prisma/enums.js").Role;
    }>;
}
