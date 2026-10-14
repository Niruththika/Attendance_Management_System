import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service.js";
import { RecordStatus } from "../generated/prisma/client.js";

@Injectable()
export class EmployeesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.employee.findMany({
      where: {
        status: RecordStatus.ACTIVE,
      },
      select: {
        id: true,
        employeeCode: true,
        name: true,
        email: true,
        status: true,
      },
      orderBy: {
        name: "asc",
      },
    });
  }
}