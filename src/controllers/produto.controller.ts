import { useMutation, useQuery } from "@tanstack/react-query";
import { ProdutoQueryKey } from "../models/produto.types";
import { api } from "../lib/api/api";

export const useCreateProduto = () => {
    return useMutation({
        mutationKey: [ProdutoQueryKey.CREATE],
        mutationFn: async (payload: FormData) => {
            const { data } = await api.post(
                "/produtos",
                payload,
                {
                    headers: { "Content-Type": "multipart/form-data" }
                }
            );
            return data;
        }
    });
};


// GET PRODUTOS POR PRODUTOR
export const getProdutosByProdutor = async (produtorId: number) => {
    const { data } = await api.get(`/produtos?produtor_id=${produtorId}`);
    return data;
};

export const getAllProdutos = async () => {
    const { data } = await api.get("/produtos");
    return data;
};

// GET PRODUTO POR ID
export const useGetProdutoById = (id: number) => {
    return useQuery({
        queryKey: [ProdutoQueryKey.SHOW, id],
        queryFn: async () => {
            const { data } = await api.get(`/produtos/${id}`);
            return data;
        },
        enabled: !!id,
    });
};

// UPDATE
export const useUpdateProduto = () => {
    return useMutation({
        mutationKey: [ProdutoQueryKey.UPDATE],
        mutationFn: async ({ id, payload }: { id: number; payload: FormData }) => {
            const { data } = await api.post(
                `/produtos/${id}?_method=PUT`,
                payload,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            return data;
        }
    });
};

// DELETE
export const useDeleteProduto = () => {
    return useMutation({
        mutationKey: [ProdutoQueryKey.DELETE],
        mutationFn: async (id: number) => {
            const { data } = await api.delete(`/produtos/${id}`);
            return data;
        }
    });
};
