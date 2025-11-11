import { useState } from "react"

export const useProduto = () => {
    const [Quantidade, setQuantidade] = useState<number>(1)

    const acrescento = () => setQuantidade(Quantidade + 1)

    const decremento = () => {
        if (Quantidade > 1) {
            setQuantidade(Quantidade - 1)
        }
    }

    return {
        Quantidade,
        acrescento,
        decremento,
    }
}
