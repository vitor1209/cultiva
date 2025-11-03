export type StatusType = "Preparando" | "Enviado" | "Disponível para Retirada" | "Finalizado"

export interface CardPedidoPros {
    img: string
    nome: string
    id: string
    data: string
    formaPagamento: string
    totalCompra: string
    status: StatusType
}
