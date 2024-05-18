import { Payable } from '@modules/payable/entities/payable.entity';
import { PayableRepository } from '@modules/payable/repositories/payable.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaPayableMapper } from '../mappers/prisma-payable.mapper';

@Injectable()
export class PrismaPayableRepository implements PayableRepository {
  constructor(private prisma: PrismaService) {}

  async create(item: Payable): Promise<void> {
    const data = PrismaPayableMapper.toPrisma(item);

    await this.prisma.payable.create({ data });
  }

  save(item: Payable): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(itemId: string): Promise<Payable> {
    throw new Error('Method not implemented.');
  }
}
