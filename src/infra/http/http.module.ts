import { Module } from '@nestjs/common';
import { AssignorModule } from './assignor/assignor.module';
import { PayableModule } from './payable/payable.module';

@Module({
  imports: [AssignorModule, PayableModule],
})
export class HttpModule {}
