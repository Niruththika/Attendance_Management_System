// import { Injectable } from "@nestjs/common";
// import { PrismaService } from "../prisma/prisma.service.js";
// import { RecordStatus } from "../generated/prisma/client.js";

// @Injectable()
// export class EmployeesService {
//   constructor(private readonly prisma: PrismaService) {}

//   async findAll() {
//     return this.prisma.employee.findMany({
//       where: {
//         status: RecordStatus.ACTIVE,
//       },
//       select: {
//         id: true,
//         employeeCode: true,
//         name: true,
//         email: true,
//         status: true,
//       },
//       orderBy: {
//         name: "asc",
//       },
//     });
//   }
// }

import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { Prisma } from "../generated/prisma/client.js";
import { PrismaService } from "../prisma/prisma.service.js";
import {
  RecordStatus,
  Role,
} from "../generated/prisma/client.js";
import { CreateEmployeeDto } from "./dto/create-employee.dto.js";
import { UpdateEmployeeDto } from "./dto/update-employee.dto.js";
import * as bcrypt from "bcrypt";
import { CreateEmployeeLoginDto } from "./dto/create-employee-login.dto.js";
@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}

  // async findAll() {
  //   return this.prisma.employee.findMany({
  //     select: {
  //       id: true,
  //       employeeCode: true,
  //       name: true,
  //       email: true,
  //       status: true,
  //       teamId: true,
  //       managerId: true,
  //       hasLoginAccount: boolean, // NEW
  //     },
  //     orderBy: { name: "asc" },
  //   });
  // }

  
async findAll() {
  const employees = await this.prisma.employee.findMany({
    select: {
      id: true,
      employeeCode: true,
      name: true,
      email: true,
      status: true,
      teamId: true,
      managerId: true,
      user: {
        select: {
          id: true,
        },
      },
    },
    orderBy: { name: "asc" },
  });

  return employees.map(({ user, ...employee }) => ({
    ...employee,
    hasLoginAccount: user !== null,
  }));
}

  async create(dto: CreateEmployeeDto) {
    const employeeCode = dto.employeeCode.trim();
    const name = dto.name.trim();
    const email = dto.email.trim().toLowerCase();

    if (!employeeCode || !name) {
      throw new BadRequestException(
        "Employee code and name are required",
      );
    }

    await this.validateAssignments(dto.teamId, dto.managerId);

    const existing = await this.prisma.employee.findFirst({
      where: {
        OR: [
          { employeeCode },
          { email: { equals: email, mode: "insensitive" } },
        ],
      },
      select: { id: true },
    });

    if (existing) {
      throw new ConflictException(
        "Employee code or email is already registered",
      );
    }

    try {
      return await this.prisma.employee.create({
        data: {
          employeeCode,
          name,
          email,
          status: dto.status ?? RecordStatus.ACTIVE,
          teamId: dto.teamId || null,
          managerId: dto.managerId || null,
        },
        select: {
          id: true,
          employeeCode: true,
          name: true,
          email: true,
          status: true,
          teamId: true,
          managerId: true,
        },
      });
    } catch (error) {
      this.handleDatabaseError(error);
    }
  }

  
async createLoginAccount(
  employeeId: string,
  dto: CreateEmployeeLoginDto,
) {
  const employee = await this.prisma.employee.findUnique({
    where: { id: employeeId },
    include: { user: true },
  });

  if (!employee) {
    throw new NotFoundException("Employee not found");
  }

  if (employee.status !== RecordStatus.ACTIVE) {
    throw new BadRequestException(
      "Cannot create a login account for an inactive employee",
    );
  }

  if (employee.user) {
    throw new ConflictException(
      "This employee already has a login account",
    );
  }

  const passwordHash = await bcrypt.hash(dto.password, 12);

  return this.prisma.user.create({
    data: {
      employeeId: employee.id,
      email: employee.email,
      passwordHash,
      role: Role.EMPLOYEE,
      status: RecordStatus.ACTIVE,
    },
    select: {
      id: true,
      employeeId: true,
      email: true,
      role: true,
      status: true,
    },
  });
}



  async update(id: string, dto: UpdateEmployeeDto) {
    const existing = await this.prisma.employee.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!existing) {
      throw new NotFoundException("Employee not found");
    }

    await this.validateAssignments(dto.teamId, dto.managerId);

    const employeeCode = dto.employeeCode?.trim();
    const name = dto.name?.trim();
    const email = dto.email?.trim().toLowerCase();

    if (employeeCode === "" || name === "" || email === "") {
      throw new BadRequestException(
        "Employee code, name, and email cannot be empty",
      );
    }

    if (employeeCode || email) {
      const duplicate = await this.prisma.employee.findFirst({
        where: {
          id: { not: id },
          OR: [
            ...(employeeCode ? [{ employeeCode }] : []),
            ...(email
              ? [{ email: { equals: email, mode: "insensitive" as const } }]
              : []),
          ],
        },
        select: { id: true },
      });

      if (duplicate) {
        throw new ConflictException(
          "Employee code or email is already in use",
        );
      }
    }

    try {
      return await this.prisma.employee.update({
        where: { id },
        data: {
          ...(employeeCode !== undefined ? { employeeCode } : {}),
          ...(name !== undefined ? { name } : {}),
          ...(email !== undefined ? { email } : {}),
          ...(dto.status !== undefined ? { status: dto.status } : {}),
          ...(dto.teamId !== undefined
            ? { teamId: dto.teamId || null }
            : {}),
          ...(dto.managerId !== undefined
            ? { managerId: dto.managerId || null }
            : {}),
        },
        select: {
          id: true,
          employeeCode: true,
          name: true,
          email: true,
          status: true,
          teamId: true,
          managerId: true,
        },
      });
    } catch (error) {
      this.handleDatabaseError(error);
    }
  }

  
  async updateStatus(id: string, status: RecordStatus) {
    const employee = await this.prisma.employee.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!employee) {
      throw new NotFoundException("Employee not found");
    }

    try {
      return await this.prisma.$transaction(async (tx) => {
        const updatedEmployee = await tx.employee.update({
          where: { id },
          data: { status },
        });

        // Keep the linked login account in sync with employee status.
        await tx.user.updateMany({
          where: { employeeId: id },
          data: { status },
        });

        return updatedEmployee;
      });
    } catch (error) {
      this.handleDatabaseError(error);
    }
  }

  async findManagers() {
    const managerUsers = await this.prisma.user.findMany({
      where: {
        role: Role.MANAGER,
        employeeId: { not: null },
      },
      select: { employeeId: true },
    });

    const managerEmployeeIds = managerUsers
      .map((user) => user.employeeId)
      .filter((id): id is string => id !== null);

    if (managerEmployeeIds.length === 0) {
      return [];
    }

    return this.prisma.employee.findMany({
      where: {
        id: { in: managerEmployeeIds },
        status: RecordStatus.ACTIVE,
      },
      select: {
        id: true,
        employeeCode: true,
        name: true,
        email: true,
      },
      orderBy: { name: "asc" },
    });
  }

  private async validateAssignments(
    teamId?: string | null,
    managerId?: string | null,
  ) {
    if (teamId) {
      const team = await this.prisma.team.findUnique({
        where: { id: teamId },
        select: { id: true },
      });

      if (!team) {
        throw new BadRequestException("Selected team does not exist");
      }
    }

    if (managerId) {
      const manager = await this.prisma.employee.findFirst({
        where: {
          id: managerId,
          status: RecordStatus.ACTIVE,
          user: { is: { role: Role.MANAGER } },
        },
        select: { id: true },
      });

      if (!manager) {
        throw new BadRequestException(
          "Selected manager does not exist or is inactive",
        );
      }
    }
  }

  private handleDatabaseError(error: unknown): never {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new ConflictException(
        "Employee code or email is already in use",
      );
    }

    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      throw new NotFoundException("Employee not found");
    }

    throw error;
  }
}