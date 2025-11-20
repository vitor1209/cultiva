export enum ProdutoQueryKey {
    CREATE = "CREATE_PRODUCT",
    LIST = "LIST_PRODUCTS",
    SHOW = "GET_PRODUCT",
    UPDATE = "UPDATE_PRODUCT",
    DELETE = "DELETE_PRODUCT",
}

// CREATE
export namespace CreateProduto {
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
        imagem?: Blob; 
        created_at: string;
    };
}

// UPDATE
export namespace UpdateProduto {
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
