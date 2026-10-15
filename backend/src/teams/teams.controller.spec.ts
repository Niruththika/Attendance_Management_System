
// import { Controller, Get, UseGuards } from "@nestjs/common";
// import { TeamsService } from "./teams.service.js";
// import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
// import { RolesGuard } from "../auth/guards/roles.guard.js";
// import { Roles } from "../auth/decorators/roles.decorator.js";

// @Controller("teams")
// @UseGuards(JwtAuthGuard, RolesGuard)
// @Roles("ADMIN")
// export class TeamsController {
//   constructor(private readonly teamsService: TeamsService) {}

//   @Get()
//   findAll() {
//     return this.teamsService.findAll();
//   }
// }


import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
} from "@nestjs/common";
import { TeamsService } from "./teams.service.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { RolesGuard } from "../auth/guards/roles.guard.js";
import { Roles } from "../auth/decorators/roles.decorator.js";

@Controller("teams")
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles("ADMIN")
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  findAll() {
    return this.teamsService.findAll();
  }

  @Post()
  create(@Body("name") name: string) {
    return this.teamsService.create(name);
  }
}
