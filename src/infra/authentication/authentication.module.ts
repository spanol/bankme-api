import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { DatabaseModule } from '@infra/database/database.module';
import { CryptoModule } from '@infra/crypto/crypto.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthenticateUserService } from '@modules/user/services/authenticate-user.service';

@Module({
  imports: [
    PassportModule,
    DatabaseModule,
    CryptoModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [LocalStrategy, JwtStrategy, AuthenticateUserService],
})
export class AuthenticationModule {}
