
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsString,
  Matches,
  Max,
  Min,
  ArrayMinSize,
  ArrayMaxSize,
  ArrayUnique,
  IsIn,
} from "class-validator";

export class CreateShiftDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @Matches(/^([01]\d|2[0-3]):[0-5]\d$/, {
    message: "startTime must use HH:mm format",
  })
  startTime!: string;

  @IsString()
  @Matches(/^([01]\d|2[0-3]):[0-5]\d$/, {
    message: "endTime must use HH:mm format",
  })
  endTime!: string;

  @IsString()
  @IsNotEmpty()
  timezone!: string;

  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(7)
  @ArrayUnique()
  @IsInt({ each: true })
  @Min(0, { each: true })
  @Max(6, { each: true })
  workingDays!: number[];

  @IsInt()
  @Min(0)
  @Max(1440)
  graceMinutes: number = 0;
}
