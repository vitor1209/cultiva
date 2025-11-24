import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPedidosProdutor } from "../../../controllers/pedido.controller";
import { useUpdateStatus } from "../../../controllers/status.controller";
import type { StatusType } from "../../../components/CardPedido/CardPedido.type";
import type { SelectChangeEvent } from "@mui/material";

export const usePedidoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetPedidosProdutor();

  const { mutate: updateStatus } = useUpdateStatus();

  const [openModal, setOpenModal] = useState(false);
  const [openModalCancel, setOpenModalCancel] = useState(false);
  const [statusAtivo, setStatusAtivo] = useState<number>(1);
  const [colorAtivo, setColorAtivo] = useState<string>("#6796FF");

  const pedidoData = data?.pedidos.find((p) => p.id === Number(id));

  const statusMap: Record<number, StatusType> = {
    1: "Preparando",
    2: "Enviado",
    3: "Disponível para Retirada",
    4: "Finalizado",
    5: "Cancelado",
  };

  const getColorByStatus = (status: number) => {
    switch (status) {
      case 2:
      case 3:
        return "#DE96FA";
      case 4:
        return "#A0E393";
      case 5:
        return "#e26262";
      case 1:
      default:
        return "#6796FF";
    }
  };

  useEffect(() => {
    if (!pedidoData) return;
    setStatusAtivo(pedidoData.status);
    setColorAtivo(getColorByStatus(pedidoData.status));
  }, [pedidoData]);

  if (isLoading) return { isLoading: true };
  if (isError || !data) return { isError: true };
  if (!pedidoData) return { pedidoNotFound: true };


  const endereco = pedidoData.usuario.endereco;

  const enderecoCompleto = endereco
    ? [endereco.rua, endereco.numero, endereco.cidade, endereco.estado, endereco.cep]
      .filter(Boolean)
      .join(", ")
    : pedidoData.usuario.email;



  const pedido = {
    img: pedidoData.usuario.foto ?? "",
    nome: pedidoData.usuario.nome ?? "",
    dataCompra: pedidoData.data_hora ?? "",
    formaPagamento: pedidoData.forma_pagamento ?? "",
    totalCompra: pedidoData.preco_final ?? 0,
    status: statusMap[pedidoData.status] ?? "Preparando",
    endereco: enderecoCompleto ?? "",
    itens: pedidoData.itens ?? [],
  };

  const handleStatusChange = (event: SelectChangeEvent<number>) => {
    const newStatus = Number(event.target.value);
    setStatusAtivo(newStatus);
    setColorAtivo(getColorByStatus(newStatus));
  };

  const handleCancelar = () => {
    if (!id) return; // garante que o id existe
    const pedidoId = Number(id);

    setStatusAtivo(5);
    setColorAtivo(getColorByStatus(5));
    setOpenModalCancel(true);

    updateStatus(
      { id: pedidoId, status: 5 }, // ✅ inclui o ID
      {
        onSuccess: () => console.log("Pedido cancelado com sucesso!"),
        onError: (err) => console.error("Erro ao cancelar pedido", err),
      }
    );
  };

  const handleAtualizar = () => {
    if (!id) return;
    const pedidoId = Number(id);

    setOpenModal(true);

    updateStatus(
      { id: pedidoId, status: statusAtivo },
      {
        onSuccess: () => console.log("Status atualizado com sucesso!"),
        onError: (err) => console.error("Erro ao atualizar status", err),
      }
    );
  };

  const formatarReal = (valor: number) =>
    valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

  const formatDate = (datetime: string) => {
    const date = new Date(datetime);
    return (
      date.toLocaleDateString("pt-BR") +
      " " +
      date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
    );
  };

  return {
    pedido,
    formatDate,
    statusAtivo,
    colorAtivo,
    handleStatusChange,
    openModal,
    setOpenModal,
    openModalCancel,
    setOpenModalCancel,
    handleCancelar,
    handleAtualizar,
    formatarReal,
    updateStatus,
  };
};
