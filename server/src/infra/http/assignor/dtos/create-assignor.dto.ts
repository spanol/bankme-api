import {
  IsUUID,
  IsNotEmpty,
  IsString,
  MaxLength,
  IsEmail,
} from 'class-validator';

export class CreateAssignorDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @MaxLength(30)
  document: string;

  @IsEmail()
  @MaxLength(140)
  email: string;

  @IsString()
  @MaxLength(20)
  phone: string;

  @IsString()
  @MaxLength(140)
  name: string;
}
