import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AssignorRepository } from '@modules/assignor/repositories/assignor.repository';
import { PrismaAssignorMapper } from '../mappers/prisma-assignor.mapper';
import { Assignor } from '@modules/assignor/entities/assignor.entity';

@Injectable()
export class PrismaAssignorRepository implements AssignorRepository {
  constructor(private prisma: PrismaService) {}

  async create(item: Assignor): Promise<void> {
    const data = PrismaAssignorMapper.toPrisma(item);

    await this.prisma.assignor.create({ data });
  }

  save(item: Assignor): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<Assignor | null> {
    const assignor = await this.prisma.assignor.findUnique({
      where: { id },
      include: { payables: true },
    });

    if (!assignor) {
      return null;
    }

    return PrismaAssignorMapper.toDomain(assignor);
  }
}
