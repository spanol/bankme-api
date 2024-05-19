import { Module } from '@nestjs/common';
import { AssignorController } from './controllers/assignor.controller';
import { CreateAssignorService } from '@modules/assignor/services/create-assignor.service';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AssignorController],
  providers: [CreateAssignorService],
})
export class HttpAssignorModule {}
