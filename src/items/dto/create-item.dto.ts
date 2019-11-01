import { IsLowercase, IsString, Length } from 'class-validator';

export class CreateItemDto {
  @IsString() readonly name: string;
  @IsString() readonly description: string;
  @IsString() readonly qty: number;
}
