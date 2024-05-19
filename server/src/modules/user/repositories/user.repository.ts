import { GenericRepository } from '@infra/database/shared/generic-repository';
import { User } from '../entities/user.entity';

export abstract class UserRepository extends GenericRepository<User> {}
