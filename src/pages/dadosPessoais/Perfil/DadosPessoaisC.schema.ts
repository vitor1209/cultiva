import * as z from "zod";

export const DadosPessoaisSchemaC = z.object({
    NomeCompletocon: z
        .string({ message: "Nome é obrigatório" })
        .min(3, { message: "Nome deve ter pelo menos 3 caracteres" })
        .max(255, { message: "Nome deve ter menos de 255 caracteres" }),

    Emailcon: z
        .string({ message: "E-mail é obrigatório" })
        .email({ message: "E-mail inválido" })
        .max(255, { message: "E-mail deve ter menos de 255 caracteres" }),

    celularcon: z
        .string({ message: "Número é obrigatório" })
        .max(15, { message: "Número muito longo" }),

    dataNascicon: z
        .string({ message: "Data é obrigatória" })
        .regex(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, "Data inválida"),

    fotocon: z.instanceof(File)
                    .or(z.string())
                    .optional(),

});