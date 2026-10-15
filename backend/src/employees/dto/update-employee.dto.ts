import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";
import { RecordStatus } from "../../generated/prisma/client.js";

export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  employeeCode?: string;

  @IsOptional()
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name?: string;

  @IsOptional()
  @IsEmail()
  @MaxLength(254)
  email?: string;

  @IsOptional()
  @IsEnum(RecordStatus)
  status?: RecordStatus;

  @IsOptional()
  @IsString()
  teamId?: string | null;

  @IsOptional()
  @IsString()
  managerId?: string | null;
}