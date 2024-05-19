import { Injectable, OnModuleInit } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../repositories/user.repository';
import { Either, left, right } from '@utils/either';
import { User } from '../entities/user.entity';

type UserAuthRequest = Either<Error, { access_token: string }>;

@Injectable()
export class AuthenticateUserService implements OnModuleInit {
  constructor(
    private readonly jwtService: JwtService,
    private readonly repository: UserRepository,
  ) {}
  async onModuleInit() {
    await this.createDefaultUser();
  }

  private async createDefaultUser() {
    const defaultUserLogin = 'aprovame';
    const defaultUserPassword = 'aprovame';

    const existingUser = await this.repository.findByLogin(defaultUserLogin);
    if (!existingUser) {
      const user = User.create({
        login: defaultUserLogin,
        password: defaultUserPassword,
      });

      await this.repository.create(user);
      console.log(`Default user "${defaultUserLogin}" created`);
    } else {
      console.log(`Default user "${defaultUserLogin}" already exists`);
    }
  }

  async execute({
    login,
    password,
  }: {
    login: string;
    password: string;
  }): Promise<UserAuthRequest> {
    const user = await this.repository.findByLogin(login);

    if (!user || user.password !== password) {
      return left(new Error('Invalid credentials'));
    }

    const payload = { username: login, sub: user.id };

    return right({
      access_token: this.jwtService.sign(payload),
    });
  }
}
