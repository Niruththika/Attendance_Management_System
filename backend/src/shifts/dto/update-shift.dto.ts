import { PartialType } from "@nestjs/mapped-types";
import { CreateShiftDto } from "./create-shift.dto.js";
import { IsEnum, IsOptional } from "class-validator";
import { RecordStatus } from "../../generated/prisma/client.js";

export class UpdateShiftDto extends PartialType(CreateShiftDto) {
  @IsOptional()
  @IsEnum(RecordStatus)
  status?: RecordStatus;
}