import { ContainerResumo, Separador, LabelResumo, TotalValor } from "./ResumoPedido.styled"
import { ResumoLinha } from "./ResumoLinha"
import type { PropsResumoPedido } from "./ResumoPedido.types"

export const ResumoPedido = ({ produtos }: PropsResumoPedido) => {
    const subtotal = produtos.reduce((acc, p) => acc + p.preco, 0)

    return (
        <ContainerResumo>
            <LabelResumo>Resumo do seu pedido</LabelResumo>

            {produtos.map((p) => (
                <ResumoLinha
                    key={p.id}
                    quantidade={p.quantidade}
                    nome={p.nome}
                    produtor={p.produtor}
                    preco={p.preco}
                />
            ))}

            <Separador />

            <LinhaFinal titulo="Subtotal" valor={subtotal} />
        </ContainerResumo>
    )
}

const LinhaFinal = ({ titulo, valor }: { titulo: string; valor: number }) => (
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <LabelResumo>{titulo}</LabelResumo>
        <TotalValor>R$ {valor.toFixed(2)}</TotalValor>
    </div>
)
