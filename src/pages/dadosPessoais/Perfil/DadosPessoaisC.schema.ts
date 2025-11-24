import * as z from "zod";

export const DadosPessoaisSchemaC = z.object({


    email: z
        .string({ message: "E-mail é obrigatório" })
        .email({ message: "E-mail inválido" })
        .max(255, { message: "E-mail deve ter menos de 255 caracteres" }).optional(),

    telefone: z
        .string({ message: "Número é obrigatório" })
        .max(15, { message: "Número muito longo" }).optional(),

    datanasc: z
        .string({ message: "Data é obrigatória" })
        .regex(
            /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
            "Data inválida"
        ).optional(),

    foto: z
        .instanceof(File)
        .or(z.string())
        .optional(),
});

export type FormData = z.infer<typeof DadosPessoaisSchemaC>;
