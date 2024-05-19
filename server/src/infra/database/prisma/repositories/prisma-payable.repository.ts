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

  async delete(itemId: string): Promise<void> {
    await this.prisma.payable.delete({ where: { id: itemId } });
  }

  async save(item: Payable): Promise<void> {
    const data = PrismaPayableMapper.toPrisma(item);

    await this.prisma.payable.update({
      where: { id: item.id },
      data,
    });
  }

  async findById(itemId: string): Promise<Payable> {
    const payable = this.prisma.payable.findUnique({ where: { id: itemId } });

    return PrismaPayableMapper.toDomain(payable);
  }
}
