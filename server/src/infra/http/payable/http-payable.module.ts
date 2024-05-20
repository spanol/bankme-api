import { Module } from '@nestjs/common';
import { PayableController } from './controllers/payable.controller';
import { DatabaseModule } from '@infra/database/database.module';
import { CreatePayableService } from '@modules/payable/services/create-payable.service';
import { ReadPayableService } from '@modules/payable/services/read-payable.service';
import { UpdatePayableService } from '@modules/payable/services/update-payable.service';
import { DeletePayableService } from '@modules/payable/services/delete-payable.service';
import { ReadAllPayableService } from '@modules/payable/services/read-all-payable.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PayableController],
  providers: [
    CreatePayableService,
    ReadPayableService,
    ReadAllPayableService,
    UpdatePayableService,
    DeletePayableService,
  ],
})
export class HttpPayableModule {}
