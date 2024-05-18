import { User } from '@modules/user/entities/user.entity';
import { UserRepository } from '@modules/user/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  create(item: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  save(item: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  findById(itemId: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
