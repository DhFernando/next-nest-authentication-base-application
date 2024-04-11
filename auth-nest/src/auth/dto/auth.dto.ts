import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto{

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    usernames: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}