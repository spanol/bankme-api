import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AssignorRepository } from '@modules/assignor/repositories/assignor.repository';
import { Assignor } from '@prisma/client';

@Injectable()
export class PrismaAssignorRepository implements AssignorRepository {
  constructor(private prisma: PrismaService) {}

  create(item: Assignor): Promise<void> {
    throw new Error('Method not implemented.');
  }

  save(item: Assignor): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(itemId: string): Promise<Assignor> {
    throw new Error('Method not implemented.');
  }
}
