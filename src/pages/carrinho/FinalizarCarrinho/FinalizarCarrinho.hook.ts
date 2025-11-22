import { useEffect, useState } from "react";
import { useCarrinhoAdd, useGetCarrinho } from "../../../controllers/carrinho.controller";
import type { CarrinhoGet } from "../../../models/carrinho.types";
import { useNavigate } from "react-router-dom";

export function useFinalizarCarrinho() {

    const [opcaoEntrega, setOpcaoEntrega] =
        useState<"residencia" | "horta">("residencia");

    const { data: carrinhoItemsOriginal, isLoading } = useGetCarrinho();

    const [carrinhoItems, setCarrinhoItems] = useState<CarrinhoGet.Item[]>([]);

    useEffect(() => {
  if (carrinhoItemsOriginal)
    setCarrinhoItems(carrinhoItemsOriginal);
}, [carrinhoItemsOriginal]);

    const aumentarQuantidade = (id: number) => {
        setCarrinhoItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantidade_item_total: item.quantidade_item_total + 1 }
                    : item
            )
        );
    };

    const diminuirQuantidade = (id: number) => {
        setCarrinhoItems(prev =>
            prev.map(item =>
                item.id === id && item.quantidade_item_total > 1
                    ? { ...item, quantidade_item_total: item.quantidade_item_total - 1 }
                    : item
            )
        );
    };

    /// FRETE POR HORTA
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

    const { mutateAsync: addCarrinho } = useCarrinhoAdd();
    const navigate = useNavigate();

    const handleFinalizar = async () => {
        try {
            for (const item of carrinhoItems) {
                await addCarrinho({
                    produto_id: item.fk_produto_id,
                    quantidade: item.quantidade_item_total
                });
            }

            console.log("Carrinho atualizado com sucesso!");

            navigate("/FinalizarEndereco");

        } catch (error) {
            console.error("Erro ao enviar carrinho:", error);
        }
    };

    return {
        carrinhoItems,
        isLoading,
        aumentarQuantidade,
        diminuirQuantidade,
        subtotal,
        freteTotal,
        entrega,
        total,
        opcaoEntrega,
        setOpcaoEntrega,
        handleFinalizar
    };
}
