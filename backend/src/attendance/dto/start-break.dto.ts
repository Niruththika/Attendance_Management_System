
import { IsEnum } from "class-validator";
import { BreakType } from "../../generated/prisma/client.js";

export class StartBreakDto {
  @IsEnum(BreakType)
  breakType: BreakType;
}
