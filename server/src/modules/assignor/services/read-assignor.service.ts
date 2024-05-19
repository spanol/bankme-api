import { Assignor } from '@prisma/client';
import { AssignorRepository } from '../repositories/assignor.repository';
import { Injectable } from '@nestjs/common';

type ReadAssignorServiceResponse = Promise<Assignor>;

@Injectable()
export class ReadAssignorService {
  constructor(private repository: AssignorRepository) {}

  async execute(id: string): ReadAssignorServiceResponse {
    const assignor = await this.repository.findById(id);

    return assignor;
  }
}
