import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api/api";
import { ProdutoQueryKey, type CreateProduto } from "../models/produto.types";

export const useCadastroProduto = () => {
  return useMutation<CreateProduto.Response, unknown, CreateProduto.Request>({
    mutationKey: [ProdutoQueryKey.CREATE],
    mutationFn: async (payload: CreateProduto.Request) => {
      const { data } = await api.post("/produtos", payload);
      return data;
    },
  });
};
