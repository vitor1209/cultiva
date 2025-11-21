export enum AuthQueryKey {
    REGISTER = "REGISTER",
    LOGIN = "LOGIN",
    USER = "USER",
}

type user = {
    id: number
    nome: string
    email: string
    telefone: string
    datanasc: string
    Tipo_usuario: string
    foto: string | null
    banner: string | null
}

export namespace RegisterUser {
    export type Request = {
        nome: string
        email: string
        telefone: string
        datanasc: string
        password: string
        password_confirmation: string
        Tipo_usuario: string
    }

    export type Response = {
        user: user
        token: string
        horta?: Horta 
    }
}

export namespace LoginUser {
    export type Request = {
        email: string
        password: string
    }

    export type Response = {
        user: user
        token: string
    }
}

export type Horta = {
  id: number;
  nome_horta: string;
  fk_usuario_id: number;
  frete?: string;
};
