export namespace AuthUserData {
    export type Horta = {
        id: number;
        nome_horta: string;
        frete: number;
        fk_usuario_id: number;
    };

    export type User = {
        id: number;
        nome: string;
        email: string;
        telefone: string;
        datanasc: string;
        foto: string | null;
        banner: string | null;
        Tipo_usuario: "consumidor" | "produtor";
        hortas?: Horta | null;
    };
}

export namespace AuthUpdate {
    export type Request = {
        nome?: string;
        telefone?: string;
        datanasc?: string;
        foto?: string | null;
        banner?: string | null;

        // Somente produtor
        nome_horta?: string;
        frete?: number;
    };

    export type Response = {
        message: string;
        user: AuthUserData.User;
    };
}
