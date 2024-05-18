import { BaseEntity } from '@modules/shared/base.entity';

interface UserProps {
  id: string;
  login: string;
  password: string;
}

export class User extends BaseEntity<UserProps> {
  get login(): string {
    return this.props.login;
  }

  set login(value: string) {
    this.props.login = value;
  }

  get password(): string {
    return this.props.password;
  }

  set password(value: string) {
    this.props.password = value;
  }
}
