import { IsNotEmpty } from 'class-validator';

export class EnderecoDTO {
    @IsNotEmpty()
    readonly endereco: string;

    @IsNotEmpty()
    readonly numero: string;

    readonly complemente: string;

    @IsNotEmpty()
    readonly cep: string;

    @IsNotEmpty()
    readonly bairro: string;

    @IsNotEmpty()
    readonly cidade: string;

    @IsNotEmpty()
    readonly estado: string;

    @IsNotEmpty()
    readonly latitude: string;

    @IsNotEmpty()
    readonly longitude: string;
}