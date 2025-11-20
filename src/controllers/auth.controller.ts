// auth.hooks.ts
import { useMutation, useQuery } from "@tanstack/react-query"
import { AuthQueryKey } from "../models/auth.types"
import type { RegisterUser, LoginUser } from "../models/auth.types"
import { api } from "../lib/api/api"

// REGISTER
export const useRegister = () => {
    return useMutation({
        mutationKey: [AuthQueryKey.REGISTER],
        mutationFn: async (payload: RegisterUser.Request) => {
            const { data } = await api.post<RegisterUser.Response>("/register", payload);
            return data;
        }
    })
}

// LOGIN
export const useLogin = () => {
    return useMutation({
        mutationKey: [AuthQueryKey.LOGIN],
        mutationFn: async (payload: LoginUser.Request) => {
            const { data } = await api.post<LoginUser.Response>("/login", payload)
            return data
        },
    })
}

// GET USER (rota protegida)
export const useUser = () => {
    return useQuery({
        queryKey: [AuthQueryKey.USER],
        queryFn: async () => {
            const { data } = await api.get("/user")
            return data
        },
    })
}

export const useSendResetLink = () => {
  return useMutation({
    mutationFn: async (email: { email: string }) => {
      const { data } = await api.post("/forgot_password", email);
      return data;
    },
  });
};


export const useResetPassword = () => {
  return useMutation({
    mutationFn: async (payload: { email: string; password: string; password_confirmation: string; token: string }) => {
      const { data } = await api.post("/password/reset", payload);
      return data;
    },
  });
};
