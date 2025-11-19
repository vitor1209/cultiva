import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRegister } from "../../../controllers/auth.controller"
import { User } from "./Cadastro.schemas"

export const useRegisterForm = () => {
    const registro = useRegister()

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(User),
    })

    const [tipoUsuario, setTipoUsuario] = useState<"Consumidor" | "Produtor">("Consumidor")

    const onSubmit = handleSubmit((values) => {
        const [day, month, year] = values.dataNasci.split("/").map(Number)
        const datanascString = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(
            2,
            "0"
        )}`

        const payload = {
            nome: values.NomeCompleto,
            email: values.Email,
            telefone: values.celular.replace(/\D/g, ""),
            datanasc: datanascString,
            password: values.Senha,
            password_confirmation: values.ConfirmarSenha,
            Tipo_usuario: tipoUsuario.toLowerCase(),
        }

        console.log(payload)

        registro.mutate(payload, {
            onSuccess: ({ token, user }) => {
                localStorage.setItem("token", token)
                localStorage.setItem("usuarioLogado", JSON.stringify(user))
                window.location.href = "/"
            },
        })
    })

    return {
        handleSubmit,
        control,
        setTipoUsuario,
        onSubmit,
    }
}
