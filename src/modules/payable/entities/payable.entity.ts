import { BaseEntity } from '@modules/assignor/base.entity';
import { Assignor } from '@modules/assignor/entities/assignor.entity';

interface PayableProps {
  id: string;
  value: number;
  emissionDate: Date;
  assignor: Assignor;
}

export class Payable extends BaseEntity<PayableProps> {
  get value(): number {
    return this.props.value;
  }

  set value(value: number) {
    this.props.value = value;
  }

  get emissionDate(): Date {
    return this.props.emissionDate;
  }

  set emissionDate(value: Date) {
    this.props.emissionDate = value;
  }

  get assignor(): Assignor {
    return this.props.assignor;
  }

  set assignor(value: Assignor) {
    this.props.assignor = value;
  }
}
