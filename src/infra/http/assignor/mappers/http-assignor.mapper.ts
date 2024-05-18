import { Assignor } from '@modules/assignor/entities/assignor.entity';

export class HttpAssignorMapper {
  static toHttp(assignor: Assignor) {
    return {
      id: assignor.id,
      document: assignor.document,
      email: assignor.email,
      phone: assignor.phone,
      name: assignor.name,
      payables: assignor.payables,
    };
  }
}
