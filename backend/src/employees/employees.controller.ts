// // import {
// //   Controller,
// //   Get,
// //   UseGuards,
// // } from "@nestjs/common";
// // import { EmployeesService } from "./employees.service.js";
// // import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
// // import { RolesGuard } from "../auth/guards/roles.guard.js";
// // import { Roles } from "../auth/decorators/roles.decorator.js";

// // @Controller("employees")
// // @UseGuards(JwtAuthGuard, RolesGuard)
// // export class EmployeesController {
// //   constructor(
// //     private readonly employeesService: EmployeesService,
// //   ) {}

// //   @Get()
// //   @Roles("ADMIN")
// //   findAll() {
// //     return this.employeesService.findAll();
// //   }
// // }

// import {
//   Body,
//   Controller,
//   Get,
//   Param,
//   Patch,
//   Post,
//   UseGuards,
// } from "@nestjs/common";
// import { EmployeesService } from "./employees.service.js";
// import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
// import { RolesGuard } from "../auth/guards/roles.guard.js";
// import { Roles } from "../auth/decorators/roles.decorator.js";
// import { RecordStatus } from "../generated/prisma/client.js";
// import { CreateEmployeeDto } from "./dto/create-employee.dto.js";
// import { UpdateEmployeeDto } from "./dto/update-employee.dto.js";

// @Controller("employees")
// @UseGuards(JwtAuthGuard, RolesGuard)
// @Roles("ADMIN")
// export class EmployeesController {
//   constructor(
//     private readonly employeesService: EmployeesService,
//   ) {}

//   @Get()
//   findAll() {
//     return this.employeesService.findAll();
//   }

//   @Post()
//   create(@Body() dto: CreateEmployeeDto) {
//     return this.employeesService.create(dto);
//   }

//   @Patch(":id")
//   update(
//     @Param("id") id: string,
//     @Body() dto: UpdateEmployeeDto,
//   ) {
//     return this.employeesService.update(id, dto);
//   }

//   @Patch(":id/status")
//   updateStatus(
//     @Param("id") id: string,
//     @Body("status") status: RecordStatus,
//   ) {
//     return this.employeesService.updateStatus(id, status);
//   }

//   @Get("managers")
//   findManagers() {
//     return this.employeesService.findManagers();
//   }

  
// }



import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";

import { EmployeesService } from "./employees.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { RolesGuard } from "../auth/guards/roles.guard.js";
import { Roles } from "../auth/decorators/roles.decorator.js";
import { RecordStatus } from "../generated/prisma/client.js";

import { CreateEmployeeDto } from "./dto/create-employee.dto.js";
import { UpdateEmployeeDto } from "./dto/update-employee.dto.js";
import { CreateEmployeeLoginDto } from "./dto/create-employee-login.dto.js";

@Controller("employees")
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles("ADMIN")
export class EmployeesController {
  constructor(
    private readonly employeesService: EmployeesService,
  ) {}

  @Get()
  findAll() {
    return this.employeesService.findAll();
  }

  @Get("managers")
  findManagers() {
    return this.employeesService.findManagers();
  }

  @Post()
  create(@Body() dto: CreateEmployeeDto) {
    return this.employeesService.create(dto);
  }

  // NEW: Create a login account for an existing employee.


  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() dto: UpdateEmployeeDto,
  ) {
    return this.employeesService.update(id, dto);
  }

  @Patch(":id/status")
  updateStatus(
    @Param("id") id: string,
    @Body("status") status: RecordStatus,
  ) {
    return this.employeesService.updateStatus(id, status);
  }

  @Post(":id/login-account")
createLoginAccount(
  @Param("id") id: string,
  @Body() dto: CreateEmployeeLoginDto,
) {
  return this.employeesService.createLoginAccount(id, dto);
}
}
