import { Module } from '@nestjs/common';
import { AssignorController } from './controllers/assignor.controller';

@Module({
  controllers: [AssignorController],
})
export class AssignorModule {}
