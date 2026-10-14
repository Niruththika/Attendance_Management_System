
import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Request,
  UseGuards,
} from "@nestjs/common";
import { ShiftsService } from "./shifts.service.js";
import { CreateShiftDto } from "./dto/create-shift.dto.js";
import { UpdateShiftDto } from "./dto/update-shift.dto.js";
import { AssignShiftDto } from "./dto/assign-shift.dto.js";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard.js";
import { RolesGuard } from "../auth/guards/roles.guard.js";
import { Roles } from "../auth/decorators/roles.decorator.js";

interface AuthenticatedRequest {
  user: {
    userId: string;
    role: string;
  };
}

@Controller("shifts")
@UseGuards(JwtAuthGuard)
export class ShiftsController {
  constructor(private readonly shiftsService: ShiftsService) {}

  @Post()
  @UseGuards(RolesGuard)
  @Roles("ADMIN")
  create(@Body() dto: CreateShiftDto) {
    return this.shiftsService.create(dto);
  }

  @Get()
  @UseGuards(RolesGuard)
  @Roles("ADMIN")
  findAll() {
    return this.shiftsService.findAll();
  }

  @Patch(":id")
  @UseGuards(RolesGuard)
  @Roles("ADMIN")
  update(
    @Param("id") id: string,
    @Body() dto: UpdateShiftDto,
  ) {
    return this.shiftsService.update(id, dto);
  }

  @Post("assign")
  @UseGuards(RolesGuard)
  @Roles("ADMIN")
  assign(@Body() dto: AssignShiftDto) {
    return this.shiftsService.assign(dto);
  }

//   @Get("my")
//   getMyShift(@Request() req: AuthenticatedRequest) {
//     return this.shiftsService.getMyShift(req.user.userId);
//   }
@Get("my")
getMyShift(@Req() req: any) {
  return this.shiftsService.getMyShift(req.user.userId);
}

@Get("test")
test() {
  return {
    message: "Shifts API is working",
  };
}
}
