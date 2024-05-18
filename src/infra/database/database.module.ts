import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { AssignorRepository } from '@modules/assignor/repositories/assignor.repository';
import { PrismaAssignorRepository } from './prisma/repositories/prisma-assignor.repository';
import { PayableRepository } from '@modules/payable/repositories/payable.repository';
import { PrismaPayableRepository } from './prisma/repositories/prisma-payable.repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: AssignorRepository,
      useClass: PrismaAssignorRepository,
    },
    {
      provide: PayableRepository,
      useClass: PrismaPayableRepository,
    },
  ],
  exports: [AssignorRepository, PayableRepository],
})
export class DatabaseModule {}
