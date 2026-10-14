import {
  Controller,
  Get,
  UseGuards,
} from "@nestjs/common";
import { EmployeesService } from "./employees.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { RolesGuard } from "../auth/guards/roles.guard.js";
import { Roles } from "../auth/decorators/roles.decorator.js";

@Controller("employees")
@UseGuards(JwtAuthGuard, RolesGuard)
export class EmployeesController {
  constructor(
    private readonly employeesService: EmployeesService,
  ) {}

  @Get()
  @Roles("ADMIN")
  findAll() {
    return this.employeesService.findAll();
  }
}