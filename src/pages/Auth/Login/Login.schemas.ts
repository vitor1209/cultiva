import * as z from "zod"

export const User = z.object({
    email: z
        .string({ error: "Email é obrigatório" })
        .email({ error: "Email invalido" })
        .max(255, { error: "Senha deve ter menos de 255 digitos." }),
    senha: z
        .string({ error: "Senha é obrigatória" })
        .max(100, { error: "Senha deve ter menos de 100 digitos." })
        .min(8, { error: "Senha deve ter mais de 8 digitos." }),
})
