import { useMutation, useQuery } from "@tanstack/react-query"
import { AuthQueryKey } from "../models/auth.types"
import type { RegisterUser, LoginUser } from "../models/auth.types"

import { api } from "../lib/api/api"

// REGISTER
export const useRegister = () => {
    return useMutation({
        mutationKey: [AuthQueryKey.REGISTER],
        mutationFn: async (payload: RegisterUser.Request) => {
            const { data } = await api.post<RegisterUser.Response>("/register", payload)
            return data
        },
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
