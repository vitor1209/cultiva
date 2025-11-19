export type OpcaoEntrega = "residencia" | "horta"

export interface ResumoCompraProps {
    subtotal: number
    entrega: number
    total: number
    page: "Confirmar" | "Finalizar"

    opcaoEntrega: OpcaoEntrega

    onChangeEntrega: (opcao: OpcaoEntrega) => void

    onFinalizar?: () => void
    onConfirmar?: () => void
    onContinuar?: () => void
}
