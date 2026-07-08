import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  full_name!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(10)
  phone?: string;

  @IsString()
  address?: string;

  @IsString()
  @IsNotEmpty()
  city!: string;

}