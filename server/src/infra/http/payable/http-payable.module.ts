import { Module } from '@nestjs/common';
import { PayableController } from './controllers/payable.controller';
import { DatabaseModule } from '@infra/database/database.module';
import { CreatePayableService } from '@modules/payable/services/create-payable.service';
import { ReadPayableService } from '@modules/payable/services/read-payable.service';
import { UpdatePayableService } from '@modules/payable/services/update-payable.service';
import { DeletePayableService } from '@modules/payable/services/delete-payable.service';
import { ReadAllPayableService } from '@modules/payable/services/read-all-payable.service';
import { CreatePayableBatchService } from '../../../modules/payable/services/create-payable-batch.service';
import { RabbitMQModule } from '../rabbitmq/rabbitmq.module';

@Module({
  imports: [DatabaseModule, RabbitMQModule],
  controllers: [PayableController],
  providers: [
    CreatePayableService,
    ReadPayableService,
    CreatePayableBatchService,
    ReadAllPayableService,
    UpdatePayableService,
    DeletePayableService,
  ],
})
export class HttpPayableModule {}
