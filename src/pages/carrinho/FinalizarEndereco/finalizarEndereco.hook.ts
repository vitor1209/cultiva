import { useState, useMemo } from "react";
import { useGetCarrinho } from "../../../controllers/carrinho.controller";

export function useFinalizarEndereco() {

    const { data: carrinhoItems = [], isLoading } = useGetCarrinho();

    const produtosResumo = useMemo(() => {
        return carrinhoItems.map(item => ({
            id: String(item.id),
            nome: item.produto.nome,
            produtor: item.produto.horta?.nome_horta || "Produtor",
            quantidade: item.quantidade_item_total,
            preco: item.preco_item_total,
        }));
    }, [carrinhoItems]);


    const [opcaoEntrega, setOpcaoEntrega] =
        useState<"horta" | "residencia">("residencia");
    const [OpcaoPagamento, setOpcaoPagamento] =
        useState<"PIX" | "Dinheiro">("PIX");

    const hortas = new Map<number, { nome: string; frete: number }>();

    carrinhoItems.forEach(item => {
        const horta = item.produto.horta;
        if (horta && !hortas.has(horta.id)) {
            hortas.set(horta.id, {
                nome: horta.nome_horta,
                frete: Number(horta.frete)
            });
        }
    });

    const freteTotal = Array.from(hortas.values())
        .reduce((acc, horta) => acc + horta.frete, 0);

    const entrega = opcaoEntrega === "horta" ? 0 : freteTotal;

    /// SUBTOTAL
    const subtotal = carrinhoItems.reduce(
        (acc, item) =>
            acc + item.produto.preco_unit * item.quantidade_item_total,
        0
    );

    const total = subtotal + entrega;


    return {
        carrinhoItems,
        isLoading,
        produtosResumo,
        subtotal,
        freteTotal,
        entrega,
        total,
        opcaoEntrega,
        setOpcaoEntrega,
        OpcaoPagamento,
        setOpcaoPagamento,
    };
}
