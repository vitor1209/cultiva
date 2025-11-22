import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api/api";
import { PedidoKey, type PedidoFinalizar } from "../models/pedidos.types";

export const usePedidoFinalizar = () => {
  return useMutation<PedidoFinalizar.Response, unknown, PedidoFinalizar.Request>({
    mutationKey: [PedidoKey.POST],
    mutationFn: async (payload) => {
      const { data } = await api.post("/pedido/finalizar", payload);
      return data;
    },
  });
};
