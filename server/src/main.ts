import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useSwagger } from '@infra/http/swagger/useSwagger';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  useSwagger(app);
  app.use(passport.initialize());
  await app.listen(3000);
}
bootstrap();
