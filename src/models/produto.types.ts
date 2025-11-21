export enum ProdutoQueryKey {
    CREATE = "CREATE_PRODUCT",
    GET = "GET_PRODUCT",
}

export namespace CreateProduto {
    export type Request = {
        nome: string;
        descricao?: string;
        preco_unit: number;
        quantidade_estoque: number;
        quant_unit_medida: number;
        validade?: string;
        fk_unidade_medida_id: number;
        fk_horta_id: number;
        caminho?: File; 
    };

    export type Response = {
        id: number;
        nome: string;
        descricao?: string;
        preco_unit: number;
        quantidade_estoque: number;
        quant_unit_medida: number;
        validade?: string;
        fk_unidade_medida_id: number;
        fk_horta_id: number;
        imagem?: string; 
    };
}

export namespace GetProduto {
    export type Request = {
        fk_horta_id?: number;
    };

    export type Response = {
        id: number;
        nome: string;
        descricao?: string;
        preco_unit: number;
        quantidade_estoque: number;
        quant_unit_medida: number;
        validade?: string;
        fk_unidade_medida_id: number;
        fk_horta_id: number;
        imagem?: string; 
    };
}