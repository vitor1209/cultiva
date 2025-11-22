export enum CarrinhoKey {
  ADD = "ADD_CARRINHO",
  GET = "GET_CARRINHO",
  DELETE = "DELETE_CARRINHO",
}

export namespace CarrinhoDel {
  export type Request = {
    id: number;
  };

  export type Response = {
    message: string;
  };
}

export namespace CarrinhoAdd {
  export type Request = {
    produto_id: number;
    quantidade: number;
  };

  export type Item = {
    id: number;
    fk_produto_id: number;
    fk_usuario_id: number;
    quantidade_item_total: number;
    preco_item_total: number;
    fk_pedido_id: number | null;
  };

  export type Response = {
    message: string;
    item: Item;
  };
}

export namespace CarrinhoGet {
  export type Imagem = {
    id: number;
    caminho: string;
    fk_produto_id: number;
  };

  export type Horta = {
    id: number;
    nome_horta: string;
    fk_usuario_id: number;
    frete: string; 
  };

  export type Produto = {
    id: number;
    nome: string;
    preco_unit: number;
    quantidade_estoque: number;
    descricao: string;
    validade: string;
    quant_unit_medida: number;
    fk_horta_id: number;
    fk_unidade_medida_id: number;
    imagens: Imagem[];
    horta: Horta;
  };

  export type Item = {
    id: number;
    fk_produto_id: number;
    fk_usuario_id: number;
    quantidade_item_total: number;
    preco_item_total: number;
    fk_pedido_id: number | null;
    produto: Produto; 
  };

  export type Response = Item[];
}