import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthenticateUserService } from '@modules/user/services/authenticate-user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticateService: AuthenticateUserService) {
    super({
      usernameField: 'email',
    });
  }

  async validate(email: string, password: string) {
    const response = await this.authenticateService.execute({
      email,
      password,
    });

    return response;
  }
}
