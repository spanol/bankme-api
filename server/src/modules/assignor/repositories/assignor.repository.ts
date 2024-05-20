import { GenericRepository } from '@infra/database/shared/generic-repository';
import { Assignor } from '@prisma/client';

export abstract class AssignorRepository extends GenericRepository<Assignor> {
  abstract findByDocument(document: string): Promise<Assignor | null>;
  abstract findAll(): Promise<Assignor[]>;
}
