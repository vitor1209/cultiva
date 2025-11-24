import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetCarrinho } from "../../../controllers/carrinho.controller";
import axios from "axios";
import { enderecoEntregaSchema, type EnderecoEntregaForm } from "./Endereco/EnderecoEntrega.schema";
import { useEnderecoAdd } from "../../../controllers/endereco.controller";
import { usePedidoFinalizar } from "../../../controllers/pedido.controller";
import type { EnderecoAdd } from "../../../models/endereco.types";
import type { PedidoFinalizar } from "../../../models/pedidos.types";

export function useFinalizarEnderecoForm(opcaoInicial?: "horta" | "residencia") {
    const form = useForm<EnderecoEntregaForm>({
        resolver: zodResolver(enderecoEntregaSchema),
    });

    const enderecoMutation = useEnderecoAdd();
    const pedidoMutation = usePedidoFinalizar();

    const { data: carrinhoItems = [], isLoading } = useGetCarrinho();

    const produtosResumo = useMemo(
        () =>
            carrinhoItems.map(item => ({
                id: String(item.id),
                nome: item.produto.nome,
                produtor: item.produto.horta?.nome_horta || "Produtor",
                quantidade: item.quantidade_item_total,
                preco: item.preco_item_total,
            })),
        [carrinhoItems]
    );

    const [opcaoEntrega, setOpcaoEntrega] = useState<"horta" | "residencia">("residencia");
    const [opcaoPagamento, setOpcaoPagamento] = useState<"PIX" | "Dinheiro">("PIX");

    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState<string | null>(null);

    const hortas = new Map<number, { nome: string; frete: number }>();
    carrinhoItems.forEach(item => {
        const horta = item.produto.horta;
        if (horta && !hortas.has(horta.id)) {
            hortas.set(horta.id, {
                nome: horta.nome_horta,
                frete: Number(horta.frete),
            });
        }
    });

    const freteTotal = Array.from(hortas.values()).reduce((acc, horta) => acc + horta.frete, 0);
    const entrega = opcaoEntrega === "horta" ? 0 : freteTotal;

    const subtotal = carrinhoItems.reduce(
        (acc, item) => acc + item.produto.preco_unit * item.quantidade_item_total,
        0
    );

    const total = subtotal + entrega;

    const handleSubmitFinalizar = () => {
        if (opcaoInicial === "residencia") {
            form.handleSubmit((data: EnderecoAdd.Request) => {
                enderecoMutation.mutate(data, {
                    onSuccess: () => {
                        const pedidoPayload: PedidoFinalizar.Request = {
                            forma_pagamento: opcaoPagamento,
                            servico_entrega: 1,
                        };

                        pedidoMutation.mutate(pedidoPayload, {
                            onSuccess: () => {
                                form.reset();
                                setModalMessage("Pedido finalizado com sucesso!");
                                setModalOpen(true);
                            },
                            onError: (err: unknown) => {
                                if (axios.isAxiosError(err) && err.response) {
                                    console.error("Erro ao criar pedido:", err.response.data);
                                } else {
                                    console.error(err);
                                }
                            },
                        });
                    },
                    onError: (err: unknown) => {
                        if (axios.isAxiosError(err) && err.response) {
                            console.error("Erro ao cadastrar endereço:", err.response.data);
                        } else {
                            console.error(err);
                        }
                    },
                });
            })();
        } else {
            const pedidoPayload: PedidoFinalizar.Request = {
                forma_pagamento: opcaoPagamento,
                servico_entrega: 0,
            };

            pedidoMutation.mutate(pedidoPayload, {
                onSuccess: () => {
                    setModalMessage("Pedido finalizado com sucesso!");
                    setModalOpen(true);
                },
                onError: (err: unknown) => {
                    if (axios.isAxiosError(err) && err.response) {
                        console.error("Erro ao criar pedido:", err.response.data);
                    } else {
                        console.error(err);
                    }
                },
            });
        }
    };

    return {
        form,
        onSubmit: handleSubmitFinalizar,
        produtosResumo,
        subtotal,
        freteTotal,
        entrega,
        total,
        opcaoEntrega,
        setOpcaoEntrega,
        opcaoPagamento,
        setOpcaoPagamento,
        carrinhoItems,
        isLoading,
        modalOpen,
        setModalOpen,
        modalMessage,
    };
}
