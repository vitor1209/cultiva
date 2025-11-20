import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../../../controllers/auth.controller";
import { User } from "./Login.schemas";
import { AxiosError } from "axios";
import { useState } from "react";

export type LoginForm = {
    email: string;
    senha: string;
};

export const useLoginForm = () => {
    const loginMutation = useLogin();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { handleSubmit, control } = useForm<LoginForm>({
        resolver: zodResolver(User),
    });

    const onSubmit = handleSubmit((values) => {
        const payload = {
            email: values.email,
            password: values.senha,
        };

        loginMutation.mutate(payload, {
            onSuccess: ({ token, user }) => {
                localStorage.setItem("token", token);
                localStorage.setItem("usuarioLogado", JSON.stringify(user));

                if (user.Tipo_usuario === "consumidor") {
                    window.location.href = "/HomeConsumidor";
                } else {
                    window.location.href = "/HomeProdutor";
                }
            },
            onError: (error: unknown) => {
                if (error instanceof AxiosError) {
                    setErrorMessage(error.response?.data?.message || "Erro ao logar");
                } else {
                    setErrorMessage("Erro desconhecido");
                }
            },
        });
    });

    return { handleSubmit, control, onSubmit, errorMessage };
};
