// controllers/produto.controller.ts
import { useMutation } from "@tanstack/react-query"
import { ProdutoQueryKey, type CreateProduto } from "../models/produto.types"
import { api } from "../lib/api/api"

// CREATE
export const useCreateProduto = () => {
    return useMutation({
        mutationKey: [ProdutoQueryKey.CREATE],
        mutationFn: async (payload: CreateProduto.Request) => {
            const { data } = await api.post<CreateProduto.Response>("/produtos", payload)
            return data
        }
    })
}
