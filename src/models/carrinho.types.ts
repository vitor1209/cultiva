export enum CarrinhoKey {
    GET = "GET_CARRINHO",
}

export namespace CarrinhoTypes {
    export type Request = {
        produto_id: number,
        quantidade: number,
    }

    export type Item = {
        id: number;
        fk_produto_id: number;
        fk_usuario_id: number;
        quantidade_item_total: number;
        preco_item_total: number;
        fk_pedido_id: number | null;
    };

    export type AddItemResponse = {
        message: string;
        item: Item;
    };
}