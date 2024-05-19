import { Injectable } from '@nestjs/common';
import { PayableRepository } from '../repositories/payable.repository';
import { AssignorRepository } from '@modules/assignor/repositories/assignor.repository';
import { CreatePayableDto } from '@infra/http/payable/dtos/create-payable.dto';
import { Payable } from '../entities/payable.entity';
import { Assignor } from '@modules/assignor/entities/assignor.entity';
import { Either, left, right } from 'src/types/EitherMonad';

type CreatePayableServiceResponse = Either<Error, Payable>;

@Injectable()
export class CreatePayableService {
  constructor(
    private repository: PayableRepository,
    private assignorRepository: AssignorRepository,
  ) {}

  async execute({
    id,
    value,
    assignorId,
    emissionDate,
  }: CreatePayableDto): Promise<CreatePayableServiceResponse> {
    const assignor = await this.assignorRepository.findById(assignorId);
    const formatAssignor = Assignor.create(assignor);

    if (!assignor) {
      left(new Error('Assignor not found'));
    }

    const payable = Payable.create({
      id,
      value,
      assignorId: assignor.id,
      assignor: formatAssignor,
      emissionDate,
    });

    await this.repository.create(payable);

    return right(payable);
  }
}
