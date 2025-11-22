export enum EnderecoKey {
  POST = "POST_ENDERECO",
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
        created_at: string;
        updated_at: string;
    };

    export type Response = {
        message: string;
        endereco: Endereco;
    };
}

