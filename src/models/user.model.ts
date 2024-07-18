import { IsEmail, IsNumber, IsString } from 'class-validator';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

export class UserModel implements User {
  @IsNumber()
  id: number;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsEmail()
  email: string;
  @IsNumber()
  age: number;
}
