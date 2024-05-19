import { Payable } from '@prisma/client';
import { PayableRepository } from '../repositories/payable.repository';
import { Injectable } from '@nestjs/common';

type ReadPayableServiceResponse = Promise<Payable>;

@Injectable()
export class ReadPayableService {
  constructor(private repository: PayableRepository) {}

  async execute(id: string): ReadPayableServiceResponse {
    const payable = await this.repository.findById(id);

    return payable;
  }
}
