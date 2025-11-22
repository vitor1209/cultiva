export enum PedidoKey {
  POST = "POST_Pedido",
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
