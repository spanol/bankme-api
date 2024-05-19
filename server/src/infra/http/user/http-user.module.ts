import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { UserAuthController } from './controllers/user-auth.controller';
import { AuthenticateUserService } from '@modules/user/services/authenticate-user.service';

@Module({
  imports: [DatabaseModule],
  controllers: [UserAuthController],
  providers: [AuthenticateUserService],
})
export class HttpUserModule {}
