import { Injectable } from '@nestjs/common';
import { PayableRepository } from '../repositories/payable.repository';
import { UpdatePayableDto } from '@infra/http/payable/dtos/update-payable.dto';

@Injectable()
export class UpdatePayableService {
  constructor(private repository: PayableRepository) {}

  async execute(id: string, { value }: UpdatePayableDto) {
    const payable = await this.repository.findById(id);

    if (!payable) {
      throw new Error('Payable not found');
    }

    payable.value = value ?? payable.value;

    await this.repository.save(payable);

    return payable;
  }
}
