import { Module } from '@nestjs/common';
import { HttpAssignorModule } from './assignor/http-assignor.module';
import { HttpPayableModule } from './payable/http-payable.module';
import { HttpUserModule } from './user/http-user.module';

@Module({
  imports: [HttpAssignorModule, HttpPayableModule, HttpUserModule],
})
export class HttpModule {}
