import * as z from "zod"

export const User = z
    .object({
        NomeCompleto: z
            .string({ error: "Nome é obrigatório" })
            .min(1, { error: "Nome deve ter pelo menos 3 caracteres" })
            .max(255, { error: "Nome deve ter menos de 255 caracteres" }),

        Email: z
            .string({ error: "E-mail é obrigatório" })
            .email({ error: "E-mail inválido" })
            .max(255, { error: "E-mail deve ter menos de 255 caracteres" }),

        celular: z.string("Número é obrigatório"),

        dataNasci: z
            .string()
            .regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, "Data inválida")
            .refine(
                (val) => {
                    const [day, month, year] = val.split("/").map(Number)
                    const date = new Date(year, month - 1, day)
                    return date < new Date()
                },
                { message: "A data de nascimento deve ser menor que hoje" }
            ),

        Senha: z
            .string({ error: "Senha é obrigatória" })
            .min(8, { error: "Senha deve ter pelo menos 8 caracteres" })
            .max(100, { error: "Senha deve ter menos de 100 caracteres" }),

        ConfirmarSenha: z.string({ error: "Confirmação de senha é obrigatória" }),
    })
    .refine((data) => data.Senha === data.ConfirmarSenha, {
        error: "As senhas não coincidem",
        path: ["ConfirmarSenha"],
    })
