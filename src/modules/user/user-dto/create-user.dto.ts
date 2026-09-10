import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  fullname!: string;

  @IsString()
  @IsNotEmpty()
  username!: string;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @MaxLength(11)
  @MinLength(11)
  @IsString()
  @IsNotEmpty()
  phone!: string;

  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  password!: string;
}
