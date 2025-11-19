export type ProdutoResumo = {
    id: string
    nome: string
    produtor: string
    quantidade: number
    preco: number
}

export type PropsResumoPedido = {
    produtos: ProdutoResumo[]
}
