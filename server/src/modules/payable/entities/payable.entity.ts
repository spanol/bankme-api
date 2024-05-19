import { Assignor } from '@modules/assignor/entities/assignor.entity';
import { BaseEntity, BaseEntityProps } from '@modules/shared/base.entity';

interface PayableProps extends BaseEntityProps {
  value: number;
  emissionDate: Date | string;
  assignor: Assignor;
  assignorId: string;
}

export class Payable extends BaseEntity<PayableProps> {
  constructor(props: PayableProps, id?: string) {
    super(props, id);
    this.props.emissionDate =
      typeof props.emissionDate === 'string'
        ? new Date(props.emissionDate)
        : props.emissionDate;
  }

  get value(): number {
    return this.props.value;
  }

  set value(value: number) {
    this.props.value = value;
  }

  get emissionDate(): Date {
    return this.props.emissionDate as Date;
  }

  set emissionDate(value: string) {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date format');
    }
    this.props.emissionDate = date;
  }

  get assignor(): Assignor {
    return this.props.assignor;
  }

  set assignor(value: Assignor) {
    this.props.assignor = value;
  }

  get assignorId(): string {
    return this.props.assignorId;
  }

  set assignorId(value: string) {
    this.props.assignorId = value;
  }
}
