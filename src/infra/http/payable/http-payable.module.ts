import { Module } from '@nestjs/common';
import { PayableController } from './controllers/payable.controller';
import { CreatePayableService } from '@modules/payable/services/create-payable.service';
import { DatabaseModule } from '@infra/database/database.module';
import { CryptoModule } from '@infra/crypto/crypto.module';
import { AuthenticationModule } from '@infra/authentication/authentication.module';

@Module({
  imports: [DatabaseModule, CryptoModule, AuthenticationModule],
  controllers: [PayableController],
  providers: [CreatePayableService],
})
export class HttpPayableModule {}
