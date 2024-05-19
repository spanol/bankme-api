import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('user-auth')
@ApiTags('User Auth')
export class UserAuthController {}
