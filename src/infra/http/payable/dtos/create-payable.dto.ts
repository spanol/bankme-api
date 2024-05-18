import { IsUUID, IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreatePayableDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  value: number;

  @IsDateString()
  emissionDate: string;

  @IsUUID()
  assignorId: string;
}
