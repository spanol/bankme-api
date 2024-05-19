import { Injectable } from '@nestjs/common';
import { AssignorRepository } from '../repositories/assignor.repository';
import { CreateAssignorDto } from '@infra/http/assignor/dtos/create-assignor.dto';
import { Assignor } from '../entities/assignor.entity';
import { Either, right } from '@utils/either';

type CreateAssignorServiceResponse = Either<Error, Assignor>;
@Injectable()
export class CreateAssignorService {
  constructor(private repository: AssignorRepository) {}

  async execute({
    document,
    email,
    name,
    phone,
  }: CreateAssignorDto): Promise<CreateAssignorServiceResponse> {
    const assignor = Assignor.create({
      document,
      payables: [],
      email,
      name,
      phone,
    });

    const assignorAlreadyExists =
      await this.repository.findByDocument(document);

    if (assignorAlreadyExists) {
      return right(assignorAlreadyExists);
    }

    await this.repository.create(assignor);

    return right(assignor);
  }
}
