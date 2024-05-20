import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreatePayableDto {
  @IsNumber()
  @ApiProperty()
  @IsNotEmpty()
  value: number;

  @ApiProperty()
  emissionDate: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  assignorId: string;
}
