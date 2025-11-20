// controllers/produto.controller.ts
import { useMutation, useQuery } from "@tanstack/react-query";
import { ProdutoQueryKey, type CreateProduto, type UpdateProduto,  } from "../models/produto.types";
import { api } from "../lib/api/api";

// CREATE
export const useCreateProduto = () => {
    return useMutation({
        mutationKey: [ProdutoQueryKey.CREATE],
        mutationFn: async (payload: CreateProduto.Request) => {
            const { data } = await api.post<CreateProduto.Response>("/produtos", payload);
            return data;
        }
    });
};

// GET PRODUTOS POR PRODUTOR
export const getProdutosByProdutor = async (produtorId: number) => {
    const { data } = await api.get(`/produtos?produtor_id=${produtorId}`)
    return data
}

export const getAllProdutos = async () => {
    const { data } = await api.get("/produtos");
    return data;
};


// GET PRODUTO POR ID
export const useGetProdutoById = (id: number) => {
    return useQuery({
        queryKey: [ProdutoQueryKey.SHOW, id],
        queryFn: async () => {
            const { data } = await api.get(`/produtos/${id}`)
            return data
        },
        enabled: !!id, // só faz a chamada se id existir
    })
}

// UPDATE PRODUTO
export const useUpdateProduto = () => {
    return useMutation({
        mutationKey: [ProdutoQueryKey.UPDATE],
        mutationFn: async ({ id, ...payload }: UpdateProduto.Request) => {
            const { data } = await api.put<UpdateProduto.Response>(`/produtos/${id}`, payload);
            return data;
        }
    });
};

// DELETE PRODUTO (opcional, se precisar)
export const useDeleteProduto = () => {
    return useMutation({
        mutationKey: [ProdutoQueryKey.DELETE],
        mutationFn: async (id: number) => {
            const { data } = await api.delete(`/produtos/${id}`);
            return data;
        }
    });
};

export namespace PasswordReset {
    // Enviar link de recuperação
    export type SendLinkRequest = { email: string };
    export type SendLinkResponse = { message: string };

    // Resetar senha
    export type ResetRequest = {
        email: string;
        token: string;
        password: string;
        password_confirmation: string;
    };
    export type ResetResponse = { message: string };
}

// Hook para enviar link de redefinição de senha
export const useSendResetLink = () => {
    return useMutation({
        mutationKey: ["SEND_RESET_LINK"],
        mutationFn: async (payload: PasswordReset.SendLinkRequest) => {
            const { data } = await api.post<PasswordReset.SendLinkResponse>(
                "/password/send-link",
                payload
            );
            return data;
        },
    });
};

// Hook para resetar a senha
export const useResetPassword = () => {
    return useMutation({
        mutationKey: ["RESET_PASSWORD"],
        mutationFn: async (payload: PasswordReset.ResetRequest) => {
            const { data } = await api.post<PasswordReset.ResetResponse>(
                "/password/reset",
                payload
            );
            return data;
        },
    });
};