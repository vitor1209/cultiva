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
