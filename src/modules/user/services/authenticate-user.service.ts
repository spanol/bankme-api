import { AutenticateUserDto } from '@infra/http/user/dtos/authenticate-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticateUserService {
  async execute({ email, password }: AutenticateUserDto) {}
}
