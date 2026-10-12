
// import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
// import { AuthService } from "./auth.service.js";
// import { LoginDto } from "./dto/login.dto.js";
// import { RegisterDto } from "./dto/register.dto.js";

// @Controller("auth")
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post("register")
//   register(@Body() dto: RegisterDto) {
//     return this.authService.register(dto);
//   }

//   @Post("login")
//   @HttpCode(HttpStatus.OK)
//   login(@Body() dto: LoginDto) {
//     return this.authService.login(dto);
//   }
// }


import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { LoginDto } from "./dto/login.dto.js";
import { RegisterDto } from "./dto/register.dto.js";
import { JwtAuthGuard } from "./guards/jwt-auth.guard.js";
import { RolesGuard } from "./guards/roles.guard.js";
import { Roles } from "./decorators/roles.decorator.js";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post("login")
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Get("profile")
  @UseGuards(JwtAuthGuard)
  getProfile(@Request() req: { user: {
    userId: string;
    email: string;
    role: string;
    employeeId: string | null;
  } }) {
    return req.user;
  }
  
  @Get("admin-test")
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles("ADMIN")
adminTest() {
  return { message: "Admin access granted" };
}
  
}

