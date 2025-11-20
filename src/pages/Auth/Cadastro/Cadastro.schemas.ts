import * as z from "zod";

export const User = z
  .object({
    NomeCompleto: z
      .string({ message: "Nome é obrigatório" })
      .min(3, { message: "Nome deve ter pelo menos 3 caracteres" })
      .max(255, { message: "Nome deve ter menos de 255 caracteres" }),

    NomeHorta: z.string().optional(),

    frete: z.union([z.string(), z.number()]).optional(),

    Email: z
      .string({ message: "E-mail é obrigatório" })
      .email({ message: "E-mail inválido" })
      .max(255, { message: "E-mail deve ter menos de 255 caracteres" }),

    celular: z.string({ message: "Número é obrigatório" }),

    dataNasci: z
      .string()
      .regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, "Data inválida"),

    Senha: z
      .string({ message: "Senha é obrigatória" })
      .min(8, { message: "Senha deve ter pelo menos 8 caracteres" })
      .max(100, { message: "Senha deve ter menos de 100 caracteres" }),

    ConfirmarSenha: z.string({
      message: "Confirmação de senha é obrigatória",
    }),

    // Campo interno apenas para o Zod saber o tipo
    TipoInterno: z.enum(["consumidor", "produtor"]).default("consumidor"),
  })

  // Validar se as senhas coincidem
  .refine((data) => data.Senha === data.ConfirmarSenha, {
    message: "As senhas não coincidem",
    path: ["ConfirmarSenha"],
  })

  // Validação condicional de NomeHorta
  .refine(
    (data) =>
      data.TipoInterno === "consumidor" ||
      (data.TipoInterno === "produtor" && data.NomeHorta),
    {
      message: "Nome da horta é obrigatório para produtores",
      path: ["NomeHorta"],
    }
  )

  // Validação condicional de frete
  .refine(
    (data) =>
      data.TipoInterno === "consumidor" ||
      (data.TipoInterno === "produtor" && data.frete),
    {
      message: "Frete é obrigatório para produtores",
      path: ["frete"],
    }
  );
