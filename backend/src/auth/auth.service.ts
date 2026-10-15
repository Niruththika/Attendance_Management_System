
// import {
//   Injectable,
//   UnauthorizedException,
//   ConflictException,
// } from "@nestjs/common";
// import { JwtService } from "@nestjs/jwt";
// import * as bcrypt from "bcrypt";
// import { PrismaService } from "../prisma/prisma.service.js";
// import { RegisterDto } from "./dto/register.dto.js";
// import { LoginDto } from "./dto/login.dto.js";

// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly prisma: PrismaService,
//     private readonly jwtService: JwtService,
//   ) {}

//   async register(dto: RegisterDto) {
//     const existingUser = await this.prisma.user.findUnique({
//       where: { email: dto.email },
//     });

//     if (existingUser) {
//       throw new ConflictException("Email is already registered");
//     }

//     const hashedPassword = await bcrypt.hash(dto.password, 12);

//     const user = await this.prisma.user.create({
//       data: {
//         email: dto.email,
//         passwordHash: hashedPassword,
//         role: dto.role,
//         employeeId: dto.employeeId ?? null,
//       },
//       select: {
//         id: true,
//         email: true,
//         role: true,
//         employeeId: true,
//         createdAt: true,
//       },
//     });

//     return user;
//   }

//   async login(dto: LoginDto) {
//     const user = await this.prisma.user.findUnique({
//       where: { email: dto.email },
//     });

//     if (!user || !(await bcrypt.compare(dto.password, user.passwordHash))) {
//       throw new UnauthorizedException("Invalid email or password");
//     }

//     const payload = {
//       sub: user.id,
//       email: user.email,
//       role: user.role,
//       employeeId: user.employeeId,
//     };

//     return {
//       accessToken: await this.jwtService.signAsync(payload),
//       tokenType: "Bearer",
//     };
//   }
// }


// import {
//   Injectable,
//   UnauthorizedException,
//   ConflictException,
//   BadRequestException,
//   ForbiddenException,
// } from "@nestjs/common";
// import { JwtService } from "@nestjs/jwt";
// import * as bcrypt from "bcrypt";
// import { PrismaService } from "../prisma/prisma.service.js";
// import { RegisterDto } from "./dto/register.dto.js";
// import { LoginDto } from "./dto/login.dto.js";

// import {
//   RecordStatus,
//   Role,
// } from "../generated/prisma/client.js";

// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly prisma: PrismaService,
//     private readonly jwtService: JwtService,
//   ) {}

//   async register(dto: RegisterDto) {
//     const email = dto.email.trim().toLowerCase();

//     if (dto.role !== Role.EMPLOYEE) {
//       throw new BadRequestException(
//         "Public registration is only available for employee accounts",
//       );
//     }

//     const existingUser = await this.prisma.user.findUnique({
//       where: { email },
//     });

//     if (existingUser) {
//       throw new ConflictException("Email is already registered");
//     }

//     const existingEmployee = await this.prisma.employee.findFirst({
//       where: { email },
//     });

//     if (existingEmployee) {
//       throw new ConflictException(
//         "An employee with this email already exists",
//       );
//     }

//     const hashedPassword = await bcrypt.hash(dto.password, 12);

//     const user = await this.prisma.$transaction(async (tx) => {
//       const employee = await tx.employee.create({
//         data: {
//           employeeCode: `EMP-${crypto.randomUUID()}`,
//           name: dto.name.trim(),
//           email,
//           status: RecordStatus.ACTIVE,
//         },
//       });

//       return tx.user.create({
//         data: {
//           email,
//           passwordHash: hashedPassword,
//           role: Role.EMPLOYEE,
//           status: RecordStatus.ACTIVE,
//           employeeId: employee.id,
//         },
//         select: {
//           id: true,
//           email: true,
//           role: true,
//           employeeId: true,
//           createdAt: true,
//         },
//       });
//     });

//     return user;
//   }

//   async login(dto: LoginDto) {
//     const email = dto.email.trim().toLowerCase();

//     const user = await this.prisma.user.findUnique({
//       where: { email },
//     });

//     if (
//       !user ||
//       !(await bcrypt.compare(dto.password, user.passwordHash))
//     ) {
//       throw new UnauthorizedException(
//         "Invalid email or password",
//       );
//     }

//     if (user.status !== RecordStatus.ACTIVE) {
//       throw new UnauthorizedException(
//         "Your account is inactive",
//       );
//     }

//     const payload = {
//       sub: user.id,
//       email: user.email,
//       role: user.role,
//       employeeId: user.employeeId,
//     };

//     return {
//       accessToken: await this.jwtService.signAsync(payload),
//       tokenType: "Bearer",
//     };
//   }
// }




import {
  Injectable,
  UnauthorizedException,
  ConflictException,
  BadRequestException,
  ForbiddenException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { timingSafeEqual, randomUUID } from "node:crypto";
import * as bcrypt from "bcrypt";

import { PrismaService } from "../prisma/prisma.service.js";
import { RegisterDto } from "./dto/register.dto.js";
import { LoginDto } from "./dto/login.dto.js";

import {
  RecordStatus,
  Role,
} from "../generated/prisma/client.js";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  // private isValidSetupKey(providedKey?: string): boolean {
  //   const expectedKey = process.env.ADMIN_SETUP_KEY;

  //   if (!expectedKey || !providedKey) {
  //     return false;
  //   }

  //   const provided = Buffer.from(providedKey, "utf8");
  //   const expected = Buffer.from(expectedKey, "utf8");

  //   if (provided.length !== expected.length) {
  //     return false;
  //   }

  //   return timingSafeEqual(provided, expected);
  // }

  private isValidSetupKey(providedKey?: string): boolean {
  const expectedKey = process.env.ADMIN_SETUP_KEY;

  console.log("Setup key loaded:", Boolean(expectedKey));
  console.log("Setup key received:", Boolean(providedKey));

  if (!expectedKey || !providedKey) {
    return false;
  }

  const provided = Buffer.from(providedKey, "utf8");
  const expected = Buffer.from(expectedKey, "utf8");

  if (provided.length !== expected.length) {
    console.log("Setup key lengths do not match");
    return false;
  }

  const isValid = timingSafeEqual(provided, expected);
  console.log("Setup key matches:", isValid);

  return isValid;
}

  async register(dto: RegisterDto, setupKey?: string) {
    const email = dto.email.trim().toLowerCase();
    const name = dto.name.trim();

    if (!name) {
      throw new BadRequestException("Name is required");
    }

    // Only EMPLOYEE and the initial ADMIN may register here.
    if (
      dto.role !== Role.EMPLOYEE &&
      dto.role !== Role.ADMIN
    ) {
      throw new ForbiddenException(
        "Public registration is not available for this role",
      );
    }

    // The initial administrator requires the private setup key.
    if (dto.role === Role.ADMIN) {
      if (!this.isValidSetupKey(setupKey)) {
        throw new ForbiddenException(
          "A valid administrator setup key is required",
        );
      }

      const existingAdmin = await this.prisma.user.findFirst({
        where: { role: Role.ADMIN },
        select: { id: true },
      });

      if (existingAdmin) {
        throw new ConflictException(
          "An administrator account already exists. Use an existing administrator account to manage users.",
        );
      }
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingUser) {
      throw new ConflictException(
        "Email is already registered",
      );
    }

    const hashedPassword = await bcrypt.hash(
      dto.password,
      12,
    );

    if (dto.role === Role.ADMIN) {
      // An administrator manages the system and does not need
      // an Employee record to use administrator functions.
      return this.prisma.user.create({
        data: {
          email,
          passwordHash: hashedPassword,
          role: Role.ADMIN,
          status: RecordStatus.ACTIVE,
          employeeId: null,
        },
        select: {
          id: true,
          email: true,
          role: true,
          employeeId: true,
          createdAt: true,
        },
      });
    }

    // Employee and User are created together so the account
    // cannot be created without its employee link.
    const existingEmployee = await this.prisma.employee.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
      select: { id: true },
    });

    if (existingEmployee) {
      throw new ConflictException(
        "An employee with this email already exists",
      );
    }

    return this.prisma.$transaction(async (tx) => {
      const employee = await tx.employee.create({
        data: {
          employeeCode: `EMP-${randomUUID()}`,
          name,
          email,
          status: RecordStatus.ACTIVE,
        },
      });

      return tx.user.create({
        data: {
          email,
          passwordHash: hashedPassword,
          role: Role.EMPLOYEE,
          status: RecordStatus.ACTIVE,
          employeeId: employee.id,
        },
        select: {
          id: true,
          email: true,
          role: true,
          employeeId: true,
          createdAt: true,
        },
      });
    });
  }

  async login(dto: LoginDto) {
    const email = dto.email.trim().toLowerCase();

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (
      !user ||
      !(await bcrypt.compare(dto.password, user.passwordHash))
    ) {
      throw new UnauthorizedException(
        "Invalid email or password",
      );
    }

    if (user.status !== RecordStatus.ACTIVE) {
      throw new UnauthorizedException(
        "Your account is inactive",
      );
    }

    // Refresh the employee link from the database at login.
    // The JWT guard should also load the current user record
    // when building req.user for protected endpoints.
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      employeeId: user.employeeId,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      tokenType: "Bearer",
    };
  }

  async createManager(dto: RegisterDto) {
  const email = dto.email.trim().toLowerCase();
  const name = dto.name.trim();

  if (!name) {
    throw new BadRequestException("Name is required");
  }

  // Check whether the email already belongs to a user.
  const existingUser = await this.prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });

  if (existingUser) {
    throw new ConflictException("Email is already registered");
  }

  // Also prevent duplicate employee records.
  const existingEmployee = await this.prisma.employee.findFirst({
    where: {
      email: {
        equals: email,
        mode: "insensitive",
      },
    },
    select: { id: true },
  });

  if (existingEmployee) {
    throw new ConflictException(
      "An employee with this email already exists",
    );
  }

  const hashedPassword = await bcrypt.hash(dto.password, 12);

  // Create the employee and manager account together.
  return this.prisma.$transaction(async (tx) => {
    const employee = await tx.employee.create({
      data: {
        employeeCode: `MGR-${randomUUID()}`,
        name,
        email,
        status: RecordStatus.ACTIVE,
      },
    });

    return tx.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
        role: Role.MANAGER,
        status: RecordStatus.ACTIVE,
        employeeId: employee.id,
      },
      select: {
        id: true,
        email: true,
        role: true,
        employeeId: true,
        createdAt: true,
      },
    });
  });
}
 
async createAdmin(dto: RegisterDto) {
  const email = dto.email.trim().toLowerCase();

  const existingUser = await this.prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });

  if (existingUser) {
    throw new ConflictException("Email is already registered");
  }

  const hashedPassword = await bcrypt.hash(dto.password, 12);

  return this.prisma.user.create({
    data: {
      email,
      passwordHash: hashedPassword,
      role: Role.ADMIN,
      status: RecordStatus.ACTIVE,
      employeeId: null,
    },
    select: {
      id: true,
      email: true,
      role: true,
      employeeId: true,
      createdAt: true,
    },
  });
}

}
