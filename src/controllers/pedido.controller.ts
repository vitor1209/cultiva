import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../lib/api/api";
import { PedidoKey, type PedidoFinalizar, type PedidoProdutor } from "../models/pedidos.types";

export const usePedidoFinalizar = () => {
  return useMutation<PedidoFinalizar.Response, unknown, PedidoFinalizar.Request>({
    mutationKey: [PedidoKey.POST],
    mutationFn: async (payload) => {
      const { data } = await api.post("/pedido/finalizar", payload);
      return data;
    },
  });
};


export const useGetPedidosProdutor = () => {
  return useQuery<PedidoProdutor.Response>({
    queryKey: [PedidoKey.GET_PRODUTOR],

    queryFn: async () => {
      const response = await api.get("/produtor/pedidos");
      return response.data;
    },
  });
};
