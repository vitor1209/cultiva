// models/produto.types.ts
export enum ProdutoQueryKey {
    CREATE = "CREATE_PRODUCT",
    LIST = "LIST_PRODUCTS",
    SHOW = "GET_PRODUCT",
    UPDATE = "UPDATE_PRODUCT",
    DELETE = "DELETE_PRODUCT",
}

// CREATE
export namespace CreateProduto {
    export type Request = {
        nome: string;
        descricao?: string;
        preco: number;
        unidadeMedida: string;
        quantidadeEstoque: number;
        quantidadeMedida: number;
        dataColheita: string; // yyyy-mm-dd
        dataValidade?: string; // opcional, se usar
        imagem?: string;       // URL ou base64
    };

    export type Response = {
        id: number;
        nome: string;
        descricao?: string;
        preco: number;
        unidadeMedida: string;
        quantidadeEstoque: number;
        quantidadeMedida: number;
        dataColheita: string;
        dataValidade?: string;
        imagem?: string;
        created_at: string;
    };
}

// UPDATE
export namespace UpdateProduto {
    export type Request = {
        id: number; // ID do produto que será atualizado
        nome?: string;
        descricao?: string;
        preco?: number;
        unidadeMedida?: string;
        quantidadeEstoque?: number;
        quantidadeMedida?: number;
        dataColheita?: string;
        dataValidade?: string;
        imagem?: string;
    };

    export type Response = {
        id: number;
        nome: string;
        descricao?: string;
        preco: number;
        unidadeMedida: string;
        quantidadeEstoque: number;
        quantidadeMedida: number;
        dataColheita: string;
        dataValidade?: string;
        imagem?: string;
        updated_at: string;
    };
}

// LIST / SHOW
export namespace Produto {
    export type Response = {
        id: number;
        nome: string;
        descricao?: string;
        preco: number;
        unidadeMedida: string;
        quantidadeEstoque: number;
        quantidadeMedida: number;
        dataColheita: string;
        dataValidade?: string;
        imagem?: string;
        avaliacao?: number;
        horta?: {
            id: number;
            nome: string;
        };
        created_at: string;
        updated_at?: string;
    };
}
