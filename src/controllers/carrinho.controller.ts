import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../lib/api/api";
import {
  ProdutoQueryKey,
  type CreateProduto,
  type GetProduto,
  type UpdateProduto,
} from "../models/produto.types";


export const useCadastroProduto = () => {
  return useMutation<CreateProduto.Response, unknown, CreateProduto.Request>({
    mutationKey: [ProdutoQueryKey.CREATE],
    mutationFn: async (payload: CreateProduto.Request) => {
      const { data } = await api.post("/produtos", payload);
      return data;
    },
  });
};


export const useGetProdutos = (fk_horta_id?: number) => {
  return useQuery<GetProduto.Response[]>({
    queryKey: [ProdutoQueryKey.GET, fk_horta_id],

    queryFn: async () => {
      const response = await api.get("/produtos", {
        params: { horta_id: fk_horta_id },
      });

      return response.data.data;
    },

    enabled: !!fk_horta_id,
  });
};

export const useGetProdutosGeral = () => {
  return useQuery<GetProduto.Response[]>({
    queryKey: [ProdutoQueryKey.GET],

    queryFn: async () => {
      const response = await api.get("/produtos");

      return response.data.data;
    },
  });
};


export const useDeleteProduto = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const { data } = await api.delete(`/produtos/${id}`);
      return data;
    },

    onSuccess: () => {
      // mesma chave usada no GET
      queryClient.invalidateQueries({
        queryKey: [ProdutoQueryKey.GET],
      });
    },
  });
};

export const useUpdateProduto = () => {
  return useMutation<UpdateProduto.Response, unknown, UpdateProduto.Request>({
    mutationKey: [ProdutoQueryKey.UPDATE],

    mutationFn: async (payload: UpdateProduto.Request) => {
      const { id, ...resto } = payload;

      const { data } = await api.post(
        `/produtos/${id}?_method=PUT`,
        resto,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      return data;
    },
  });
};
