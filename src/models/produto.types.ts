// models/produto.types.ts
export enum ProdutoQueryKey {
    CREATE = "CREATE_PRODUCT",
    LIST = "LIST_PRODUCTS",
    SHOW = "GET_PRODUCT",
    UPDATE = "UPDATE_PRODUCT",
    DELETE = "DELETE_PRODUCT",
}

export namespace CreateProduto {
    export type Request = {
        nome: string
        descricao?: string
        preco: number
        unidadeMedida: string
        quantidadeEstoque: number
        quantidadeMedida: number
        dataColheita: string // yyyy-mm-dd
    }

    export type Response = {
        id: number
        nome: string
        descricao?: string
        preco: number
        unidadeMedida: string
        quantidadeEstoque: number
        quantidadeMedida: number
        dataColheita: string
        created_at: string
    }
}
