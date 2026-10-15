
import { IsString, MinLength } from "class-validator";

export class CreateEmployeeLoginDto {
  @IsString()
  @MinLength(8)
  password!: string;
}
