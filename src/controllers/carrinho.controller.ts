import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../lib/api/api";
import { CarrinhoKey, type CarrinhoAdd, type CarrinhoDel, type CarrinhoGet,  } from "../models/carrinho.types";

export const useCarrinhoDel = () => {
  return useMutation<CarrinhoDel.Response, unknown, number>({
    mutationKey: [CarrinhoKey.DELETE],
    mutationFn: async (id: number) => {
      const { data } = await api.delete(`/carrinho/${id}`);
      return data;
    },
  });
};

export const useCarrinhoAdd = () => {
  return useMutation<CarrinhoAdd.Response, unknown, CarrinhoAdd.Request>({
    mutationKey: [CarrinhoKey.ADD],
    mutationFn: async (payload) => {
      const { data } = await api.post("/carrinho", payload);
      return data;
    },
  });
};

export const useGetCarrinho = () => {
  return useQuery<CarrinhoGet.Item[]>({
    queryKey: [CarrinhoKey.GET],
    queryFn: async () => {
      const { data } = await api.get("/carrinho"); 
      return data; 
    },
  });
};