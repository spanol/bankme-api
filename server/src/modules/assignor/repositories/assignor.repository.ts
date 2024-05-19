import { GenericRepository } from '@infra/database/shared/generic-repository';
import { Assignor } from '@prisma/client';

export abstract class AssignorRepository extends GenericRepository<Assignor> {}
