import { Assignor } from '@modules/assignor/entities/assignor.entity';
import {
  Prisma,
  Assignor as PrismaAssignor,
  Payable as PrismaPayable,
} from '@prisma/client';

export class PrismaAssignorMapper {
  static toPrisma(assignor): Prisma.AssignorUncheckedCreateInput {
    return {
      id: assignor.id,
      document: assignor.document,
      email: assignor.email,
      phone: assignor.phone,
      name: assignor.name,
    } as PrismaAssignor;
  }

  static toDomain(
    assignor: PrismaAssignor,
    payables?: PrismaPayable[],
  ): Assignor {
    return Assignor.create({
      id: assignor.id,
      document: assignor.document,
      email: assignor.email,
      phone: assignor.phone,
      name: assignor.name,
      payables: payables,
    });
  }
}
