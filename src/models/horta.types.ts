export enum HortaQueryKey {
    GET = "GET_HORTA",
}

export namespace GetHorta {
    export type Usuario = {
        nome: string;
        email: string;
        banner?: string | null;
        telefone: number;
    };

    export type Horta = {
        id: number;
        nome: string;
        usuario: Usuario;
        descricao?: string | null;
    };

    export type Response = Horta[];
}
