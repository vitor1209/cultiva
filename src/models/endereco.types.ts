export enum EnderecoKey {
  POST = "POST_ENDERECO",
  GET = "GET_ENDERECO",
}

export namespace EnderecoAdd  {
    export type Request = {
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
        complemento?: string | null;
    };

    export type Endereco = {
        id: number;
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
        complemento: string | null;
    };

    export type Response = {
        message: string;
        endereco: Endereco;
    };
}

export namespace EnderecoGet  {
    export type Endereco = {
        id: number;
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
        complemento: string | null;
    };

    export type Response = Endereco[]
}

export namespace EnderecoUpdate {
    export type Request = {
        id: number; 

        rua?: string;
        numero?: string;
        bairro?: string;
        cidade?: string;
        estado?: string;
        cep?: string;
        complemento?: string | null;
    };

    export type Endereco = {
        id: number;
        rua: string;
        numero: string;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
        complemento: string | null;
    };

    export type Response = {
        message: string;
        endereco: Endereco;
    };
}
