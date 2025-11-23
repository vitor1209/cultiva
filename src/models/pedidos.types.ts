export enum PedidoKey {
  POST = "POST_Pedido",
  GET_PRODUTOR = "GET_PRODUTOR",
}

export namespace PedidoFinalizar {
  export type Request = {
    forma_pagamento: string;
    servico_entrega: number;
  };

  export type Pedido = {
    id: number;
    data_hora: string;
    preco_final: number;
    status: boolean;
    forma_pagamento: string;
    fk_entrega_id: number;
    fk_usuario_id: number;
  };

  export type Response = {
    message: string;
    pedido: Pedido;
    frete_total: number;
    grupos_hortas: number;
  };
}

export namespace PedidoProdutor {
  export type Endereco = {
    id: number;
    estado: string;
    cidade: string;
    rua: string;
    cep: string;
    numero: string;
    complemento: string | null;
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
    // removido horta
  };

  export type Item = {
    id: number;
    fk_produto_id: number;
    fk_pedido_id: number;
    quantidade_item_total: number;
    preco_item_total: number;
    fk_usuario_id: number | null;
    produto: Produto;
  };

  export type Usuario = {
    id: number;
    email: string;
    nome: string;
    telefone: string;
    datanasc: string;
    foto: string | null;
    banner: string | null;
    Tipo_usuario: string;
    endereco?: Endereco; // último endereço apenas
  };

  export type Pedido = {
    id: number;
    data_hora: string;
    preco_final: number;
    status: number;
    observacoes: string | null;
    forma_pagamento: string | null;
    avaliacao: string | null;
    fk_entrega_id: number | null;
    fk_usuario_id: number;
    usuario: Usuario;
    itens: Item[];
    entregas?: {
      id: number;
      servico_entrega: boolean;
      frete: number;
      data_entregue: string | null;
    } | null;
  };

  export type Response = {
    pedidos: Pedido[];
    total: number;
  };
}
