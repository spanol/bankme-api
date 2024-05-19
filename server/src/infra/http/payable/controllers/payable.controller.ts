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
import { DeleteAssignorService } from '@modules/assignor/services/delete-assignor.service';
import { JwtAuthGuard } from '@infra/authentication/guards/jwt-auth.guard';
import { DeletePayableService } from '@modules/payable/services/delete-payable.service';

@Controller('integrations/payable')
@ApiTags('Payable')
export class PayableController {
  constructor(
    private readonly createPayableService: CreatePayableService,
    private readonly readPayableService: ReadPayableService,
    private readonly updatePayableService: UpdatePayableService,
    private readonly deletePayableService: DeletePayableService,
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(
    @Param('assignorId') assignorId: string,
    @Body() body: CreatePayableDto,
  ) {
    await this.createPayableService.execute(assignorId, body);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findById(@Param('id') id: string) {
    return await this.readPayableService.execute(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.deletePayableService.execute(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() body: CreatePayableDto) {
    return await this.updatePayableService.execute(id, body);
  }
}
