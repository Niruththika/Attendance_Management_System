
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class AssignShiftDto {
  @IsString()
  @IsNotEmpty()
  employeeId!: string;

  @IsString()
  @IsNotEmpty()
  shiftId!: string;

  @IsDateString()
  effectiveFrom!: string;

  @IsOptional()
  @IsDateString()
  effectiveTo?: string;
}
