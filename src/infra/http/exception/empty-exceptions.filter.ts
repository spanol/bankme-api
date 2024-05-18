import { UnauthorizedUserException } from '@modules/user/exceptions/unauthorized-user.exception';
import { ExceptionFilter, Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { Response } from 'express';

@Catch(UnauthorizedUserException)
export class UnauthorizedUserExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(UnauthorizedUserExceptionFilter.name);

  catch(exception: UnauthorizedUserException, host: ArgumentsHost) {
    this.logger.error(exception);

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.getStatus();

    response.status(status);
  }
}
