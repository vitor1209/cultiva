import { useState } from "react"

export const useProduto = (initialQuantidade: number = 1) => {
    const [Quantidade, setQuantidade] = useState<number>(initialQuantidade)

    const acrescento = () => setQuantidade(prev => prev + 1)
    const decremento = () => setQuantidade(prev => (prev > 1 ? prev - 1 : prev))

    return {
        Quantidade,
        setQuantidade,
        acrescento,
        decremento,
    }
}
