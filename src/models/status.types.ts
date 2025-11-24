export enum StatusQueryKey {
    UPDATE ="UPDATE_PRODUCT"
}

export namespace UpdateStatus {
  export type Pedido = {
    id: number;
    data_hora: string; 
    preco_final: number;
    status: number;
    observacoes?: string | null;
    forma_pagamento: string;
    avaliacao?: number | null;
    fk_entrega_id: number;
    fk_usuario_id: number;
  };

  export type Response = {
    message: string;
    pedido: Pedido;
  };

  export type Request = {
    status: number;
  };
}
