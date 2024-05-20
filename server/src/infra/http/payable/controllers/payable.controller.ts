import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePayableDto } from '../dtos/create-payable.dto';
import { UpdatePayableService } from './../../../../modules/payable/services/update-payable.service';
import { CreatePayableService } from '@modules/payable/services/create-payable.service';
import { ReadPayableService } from '@modules/payable/services/read-payable.service';
import { JwtAuthGuard } from '@infra/authentication/guards/jwt-auth.guard';
import { DeletePayableService } from '@modules/payable/services/delete-payable.service';
import { HttpPayableMapper } from '../mappers/http-payable.mapper';
import { ReadAllPayableService } from '@modules/payable/services/read-all-payable.service';
import { Payable } from '@modules/payable/entities/payable.entity';

@Controller('integrations/payable')
@ApiTags('Payable')
export class PayableController {
  constructor(
    private readonly createPayableService: CreatePayableService,
    private readonly readPayableService: ReadPayableService,
    private readonly updatePayableService: UpdatePayableService,
    private readonly deletePayableService: DeletePayableService,
    private readonly readAllPayableService: ReadAllPayableService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Param('userId') userId: string,
    @Body() body: CreatePayableDto,
  ) {
    const result = await this.createPayableService.execute(userId, body);

    if (result.isLeft()) {
      return result.value;
    }

    return HttpPayableMapper.toHttp(result.value as Payable);
  }

  @Get()
  // @UseGuards(JwtAuthGuard)
  async findAll() {
    const result = await this.readAllPayableService.execute();
    console.log(result);
    if (result.isLeft()) {
      return result.value;
    }

    return result.value.map((payable) => HttpPayableMapper.toHttp(payable));
  }

  @Get(':id')
  // @UseGuards(JwtAuthGuard)
  async findById(@Param('id') id: string) {
    const result = await this.readPayableService.execute(id);

    if (result.isLeft()) {
      return result.value;
    }

    return HttpPayableMapper.toHttp(result.value as Payable);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const result = await this.deletePayableService.execute(id);

    if (result.isLeft()) {
      return result.value;
    }

    return HttpPayableMapper.toHttp(result.value as Payable);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() body: CreatePayableDto) {
    const result = await this.updatePayableService.execute(id, body);

    if (result.isLeft()) {
      return result.value;
    }

    return HttpPayableMapper.toHttp(result.value as Payable);
  }
}
