import { Injectable } from '@nestjs/common';
import { AssignorRepository } from '../repositories/assignor.repository';
import { CreateAssignorDto } from '@infra/http/assignor/dtos/create-assignor.dto';
import { Assignor } from '../entities/assignor.entity';

@Injectable()
export class CreateAssignorService {
  constructor(private repository: AssignorRepository) {}

  async execute({ id, document, email, name, phone }: CreateAssignorDto) {
    const assignor = Assignor.create({
      id,
      payables: [],
      document,
      email,
      name,
      phone,
    });

    await this.repository.create(assignor);

    return assignor;
  }
}
