import { CreateShiftDto } from "./create-shift.dto.js";
import { RecordStatus } from "../../generated/prisma/client.js";
declare const UpdateShiftDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateShiftDto>>;
export declare class UpdateShiftDto extends UpdateShiftDto_base {
    status?: RecordStatus;
}
export {};
