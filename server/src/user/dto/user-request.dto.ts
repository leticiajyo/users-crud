import {
  IsDateString,
  IsEnum,
  IsMobilePhone,
  IsNotEmpty,
  IsNumberString,
  IsString,
  Length,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { Gender } from '../user.entity';

export class UserRequestDTO {
  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  @IsString()
  @Length(0, 100)
  name: string;

  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  @IsString()
  @Length(0, 100)
  firstName: string;

  @IsMobilePhone()
  phone: string;

  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  @IsString()
  @Length(0, 100)
  street: string;

  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  @IsString()
  @Length(0, 30)
  city: string;

  @IsNumberString()
  @Length(5, 5, {
    message: 'postalCode must be exactly 5 characters',
  })
  postalCode: string;

  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  @IsString()
  @Length(0, 30)
  country: string;

  @IsDateString()
  birthday: string;

  @IsEnum(Gender)
  gender: string;

  @IsNotEmpty()
  @Transform(({ value }) => value?.trim())
  @IsString()
  @Length(0, 30)
  nationality: string;
}
