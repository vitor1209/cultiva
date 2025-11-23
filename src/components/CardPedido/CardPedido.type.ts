export type StatusType = "Preparando" | "Enviado" | "Disponível para Retirada" | "Finalizado" | 'Cancelado'

export interface CardPedidoPros {
    img: string
    nome: string
    id: number
    data: string
    formaPagamento: string
    totalCompra: number
    status: StatusType
}
