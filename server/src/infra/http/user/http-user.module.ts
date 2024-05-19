import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { UserAuthController } from './controllers/user-auth.controller';
import { AuthenticateUserService } from '@modules/user/services/authenticate-user.service';
import { AuthenticationModule } from '@infra/authentication/authentication.module';

@Module({
  imports: [DatabaseModule, AuthenticationModule],
  controllers: [UserAuthController],
  providers: [AuthenticateUserService],
})
export class HttpUserModule {}
