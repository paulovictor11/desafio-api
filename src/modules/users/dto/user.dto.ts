import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class UserDTO {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(8)
    readonly password: string;
}