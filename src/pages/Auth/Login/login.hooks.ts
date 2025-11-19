import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useLogin } from "../../../controllers/auth.controller"
import { User } from "./Login.schemas"
import { AxiosError } from "axios"
import { useState } from "react"

export const useLoginForm = () => {
    const loginMutation = useLogin()

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(User),
    })

    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    const onSubmit = handleSubmit((values) => {
        const payload = {
            email: values.email,
            password: values.senha,
        }

        loginMutation.mutate(payload, {
            onSuccess: ({ token, user }) => {
                localStorage.setItem("token", token)
                localStorage.setItem("usuarioLogado", JSON.stringify(user))
                window.location.href = "/"
            },
            onError: (error: unknown) => {
                if (error instanceof AxiosError) {
                    setErrorMessage(error.response?.data?.message || "Erro ao logar")
                } else {
                    setErrorMessage("Erro desconhecido")
                }
            },
        })
    })

    return { handleSubmit, control, onSubmit, errorMessage }
}
