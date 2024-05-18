import { Payable } from '@modules/payable/entities/payable.entity';

export class HttpPayableMapper {
  static toHttp(payable: Payable) {
    return {
      id: payable.id,
      value: payable.value,
      emissionDate: payable.emissionDate,
      assignor: payable.assignor,
    };
  }
}
