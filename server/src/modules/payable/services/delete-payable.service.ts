import { Injectable } from '@nestjs/common';
import { PayableRepository } from '../repositories/payable.repository';

@Injectable()
export class DeletePayableService {
  constructor(private repository: PayableRepository) {}

  async execute(id: string) {
    const payable = await this.repository.findById(id);

    await this.repository.delete(payable.id);

    return payable;
  }
}
