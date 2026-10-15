import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  Matches,
} from "class-validator";
import { RecordStatus } from "../../generated/prisma/client.js";


export class CreateEmployeeDto {
  @IsString()
  @MinLength(1)
  @MaxLength(50)
  employeeCode!: string;

  @IsString()
  @MinLength(1)
  @MaxLength(100)
  name!: string;

  @IsEmail()
  @MaxLength(254)
  email!: string;

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