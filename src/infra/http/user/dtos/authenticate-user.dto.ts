import { IsEmail, IsNotEmpty } from 'class-validator';

export class AutenticateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
