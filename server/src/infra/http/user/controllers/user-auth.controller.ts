import { AuthenticateUserService } from '@modules/user/services/authenticate-user.service';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticateUserDto } from '../dtos/authenticate-user.dto';
import { LocalAuthGuard } from '@infra/authentication/guards/local-auth.guard';

@Controller('integrations/auth')
@ApiTags('User Auth')
export class UserAuthController {
  constructor(private authenticateUserService: AuthenticateUserService) {}

  @UseGuards(LocalAuthGuard)
  @ApiBody({ schema: { example: { login: 'aprovame', password: 'aprovame' } } })
  @ApiResponse({ status: 200, description: 'User successfully logged in.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Post()
  async authenticate(@Body() body: AuthenticateUserDto) {
    return await this.authenticateUserService.execute(body);
  }
}
