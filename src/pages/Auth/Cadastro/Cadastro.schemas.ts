import * as z from "zod"

export const User = z.object({
    email: z
        .string({ error: "Email é obrigatório" })
        .email({ error: "Email invalido" })
        .max(40, { error: "Senha deve ter menos de 40 digitos." }),
    senha: z
        .string({ error: "Senha é obrigatória" })
        .max(30, { error: "Senha deve ter menos de 30 digitos." })
        .min(6, { error: "Senha deve ter mais de 6 digitos." }),
})
