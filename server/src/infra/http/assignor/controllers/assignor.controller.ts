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
import { CreateAssignorDto } from '../dtos/create-assignor.dto';
import { UpdateAssignorService } from './../../../../modules/assignor/services/update-assignor.service';
import { CreateAssignorService } from '@modules/assignor/services/create-assignor.service';
import { ReadAssignorService } from '@modules/assignor/services/read-assignor.service';
import { DeleteAssignorService } from '@modules/assignor/services/delete-assignor.service';
import { LocalAuthGuard } from '@infra/authentication/guards/local-auth.guard';

@Controller('integrations/assignor')
@ApiTags('Assignor')
export class AssignorController {
  constructor(
    private createAssignorService: CreateAssignorService,
    private readAssignorService: ReadAssignorService,
    private updateAssignorService: UpdateAssignorService,
    private deleteAssignorService: DeleteAssignorService,
  ) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  async create(@Body() body: CreateAssignorDto): Promise<any> {
    const response = await this.createAssignorService.execute(body);

    return response;
  }

  @Get(':id')
  @UseGuards(LocalAuthGuard)
  async findById(@Param('id') id: string) {
    return await this.readAssignorService.execute(id);
  }

  @Delete(':id')
  @UseGuards(LocalAuthGuard)
  async delete(@Param('id') id: string) {
    return await this.deleteAssignorService.execute(id);
  }

  @Patch(':id')
  @UseGuards(LocalAuthGuard)
  async update(@Param('id') id: string, @Body() body: CreateAssignorDto) {
    return await this.updateAssignorService.execute(id, body);
  }
}
