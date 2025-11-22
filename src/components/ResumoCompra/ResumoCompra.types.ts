export type OpcaoEntrega = "residencia" | "horta"
export type OpcaoPagamento = "PIX" | "Dinheiro"

export interface ResumoCompraProps {
    subtotal: number
    entrega: number
    total: number
    page: "Confirmar" | "Finalizar"
    freteTotal: number
    formaPagamento : boolean
    pagamento? : OpcaoPagamento
    onChangePagamento : (opcao: OpcaoPagamento) => void

    opcaoEntrega: OpcaoEntrega

    onChangeEntrega: (opcao: OpcaoEntrega) => void

    onFinalizar?: () => void
    onConfirmar?: () => void
    onContinuar?: () => void
}
