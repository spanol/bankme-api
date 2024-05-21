import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreatePayableDto {
  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  value: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  emissionDate: string;

  @ApiProperty()
  assignorDocument?: string;

  @ApiProperty()
  @IsEmail()
  assignorEmail?: string;
}
