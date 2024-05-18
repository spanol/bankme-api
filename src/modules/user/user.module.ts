import { Module } from '@nestjs/common';
import { UserAuthController } from './controllers/user-auth.controller';

@Module({
  controllers: [UserAuthController],
})
export class UserModule {}
