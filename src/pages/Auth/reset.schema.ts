import * as z from "zod";

export const Reset = z
  .object({
    Email: z
      .string({ error: "E-mail é obrigatório" })
      .email({ error: "E-mail inválido" })
      .max(255, { error: "E-mail deve ter menos de 255 caracteres" }),

    Senha: z
      .string({ error: "Senha é obrigatória" })
      .min(8, { error: "Senha deve ter pelo menos 8 caracteres" })
      .max(100, { error: "Senha deve ter menos de 100 caracteres" }),

    ConfirmeSenha: z
      .string({ error: "Confirmação de senha é obrigatória" })
      .min(8, { error: "Senha deve ter pelo menos 8 caracteres" })
      .max(100, { error: "Senha deve ter menos de 100 caracteres" }),

    Token: z.string({ error: "Token é obrigatório" }),
  })
  .refine((data) => data.Senha === data.ConfirmeSenha, {
    message: "As senhas devem ser iguais",
    path: ["ConfirmeSenha"], 
  });
