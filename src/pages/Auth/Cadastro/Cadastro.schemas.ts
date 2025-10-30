import * as z from "zod";

export const User = z
  .object({
    NomeCompleto: z
      .string({ error: "Nome é obrigatório" })
      .min(3, { error: "Nome deve ter pelo menos 3 caracteres" })
      .max(255, { error: "Nome deve ter menos de 255 caracteres" }),

    Email: z
      .string({ error: "E-mail é obrigatório" })
      .email({ error: "E-mail inválido" })
      .max(255, { error: "E-mail deve ter menos de 255 caracteres" }),

    CPF: z
      .string({ error: "CPF é obrigatório" })
      .regex(/^\d{11}$/, { error: "CPF deve conter 11 dígitos numéricos" }),

    dataNasci: z
      .string({ error: "Data de nascimento é obrigatória" })
      .refine(
        (value) => {
          const data = new Date(value);
          return !isNaN(data.getTime());
        },
        { error: "Data de nascimento inválida" }
      ),

    CEP: z
      .string({ error: "CEP é obrigatório" })
      .regex(/^\d{8}$/, { error: "CEP deve conter 8 dígitos" }),

    Estado: z
      .string({ error: "Estado é obrigatório" })
      .min(2, { error: "Informe a sigla do estado" })
      .max(2, { error: "Informe a sigla do estado" }),

    Senha: z
      .string({ error: "Senha é obrigatória" })
      .min(6, { error: "Senha deve ter pelo menos 6 caracteres" })
      .max(100, { error: "Senha deve ter menos de 100 caracteres" }),

    ConfirmarSenha: z
      .string({ error: "Confirmação de senha é obrigatória" }),
  })
  .refine((data) => data.Senha === data.ConfirmarSenha, {
    error: "As senhas não coincidem",
    path: ["ConfirmarSenha"],
  });
