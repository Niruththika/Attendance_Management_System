import { RecordStatus } from "../../generated/prisma/client.js";
export declare class UpdateEmployeeDto {
    employeeCode?: string;
    name?: string;
    email?: string;
    status?: RecordStatus;
    teamId?: string | null;
    managerId?: string | null;
}
