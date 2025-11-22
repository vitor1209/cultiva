import * as z from "zod";

export const DadosPessoais = z.object({
    NomeCompleto: z
        .string({ message: "Nome é obrigatório" })
        .min(3, { message: "Nome deve ter pelo menos 3 caracteres" })
        .max(255, { message: "Nome deve ter menos de 255 caracteres" }),

    Email: z
        .string({ message: "E-mail é obrigatório" })
        .email({ message: "E-mail inválido" })
        .max(255, { message: "E-mail deve ter menos de 255 caracteres" }),

    celular: z
        .string({ message: "Número é obrigatório" })
        .max(15, { message: "Número muito longo" }),

    dataNasci: z
        .string({ message: "Data é obrigatória" })
        .regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, "Data inválida"),

    foto: z.string().nullable().optional(),
    banner: z.string().nullable().optional(),


    nome_horta: z.string().max(255).optional(),
    frete: z.coerce.number().min(0).optional(),

});