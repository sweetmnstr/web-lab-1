import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class SaveEmailBodyInputDTO {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
