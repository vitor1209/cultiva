import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetPedidosProdutor } from "../../../controllers/pedido.controller";
import type { StatusType } from "../../../components/CardPedido/CardPedido.type";
import type { SelectChangeEvent } from "@mui/material";

export const usePedidoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetPedidosProdutor();

  const [openModal, setOpenModal] = useState(false);
  const [openModalCancel, setOpenModalCancel] = useState(false);
  const [statusAtivo, setStatusAtivo] = useState<number>(1);
  const [colorAtivo, setColorAtivo] = useState<string>("#6796FF");

  // Evita chamar data.pedidos antes de carregar
  const pedidoData = data?.pedidos.find(p => p.id === Number(id));

  const statusMap: Record<number, StatusType> = {
    1: "Preparando",
    2: "Enviado",
    3: "Disponível para Retirada",
    4: "Finalizado",
    5: "Cancelado",
  };

  const getColorByStatus = (status: number) => {
    switch (status) {
      case 2: // Enviado
      case 3: // Disponível para Retirada
        return "#DE96FA";
      case 4: // Finalizado
        return "#A0E393";
      case 5: // Cancelado
        return "#e26262";
      case 1: // Preparando
      default:
        return "#6796FF";
    }
  };

  // Inicializa
  useEffect(() => {
    if (!pedidoData) return;
    setStatusAtivo(pedidoData.status);
    setColorAtivo(getColorByStatus(pedidoData.status));
  }, [pedidoData]);

  // Se ainda estiver carregando ou der erro
  if (isLoading) return { isLoading: true };
  if (isError || !data) return { isError: true };
  if (!pedidoData) return { pedidoNotFound: true };

  const enderecoCompleto = [
    pedidoData.usuario.endereco?.rua,
    pedidoData.usuario.endereco?.numero,
    pedidoData.usuario.endereco?.cidade,
    pedidoData.usuario.endereco?.estado,
    pedidoData.usuario.endereco?.cep,
  ].filter(Boolean) // remove undefined ou null
    .join(", ");

  console.log(pedidoData);


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
    setStatusAtivo(5); // Cancelado
    setColorAtivo(getColorByStatus(5));
    setOpenModalCancel(true);
  };
  
  const handleAtualizar = () => setOpenModal(true);

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
  };
};
