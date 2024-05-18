import { Module } from '@nestjs/common';
import { HttpAssignorModule } from './assignor/http-assignor.module';
import { HttpPayableModule } from './payable/http-payable.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [HttpAssignorModule, HttpPayableModule, UserModule],
})
export class HttpModule {}
