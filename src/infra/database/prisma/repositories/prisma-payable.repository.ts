import { Payable } from '@modules/payable/entities/payable.entity';
import { PayableRepository } from '@modules/payable/repositories/payable.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaPayableRepository implements PayableRepository {
  constructor(private prisma: PrismaService) {}

  create(item: Payable): Promise<void> {
    throw new Error('Method not implemented.');
  }

  save(item: Payable): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(itemId: string): Promise<Payable> {
    throw new Error('Method not implemented.');
  }
}
