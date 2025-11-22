import * as z from "zod";

export const EnderecoSchema = z.object({
    rua: z
        .string()
        .max(255, "Rua deve ter no máximo 255 caracteres")
        .optional(),

    numero: z
        .string()
        .max(10, "Número deve ter no máximo 10 caracteres")
        .optional(),

    bairro: z
        .string()
        .max(255, "Bairro deve ter no máximo 255 caracteres")
        .optional(),

    cidade: z
        .string()
        .max(255, "Cidade deve ter no máximo 255 caracteres")
        .optional(),

    estado: z
        .string()
        .max(2, "Estado deve ter 2 caracteres (UF)")
        .optional(),

    cep: z
        .string()
        .max(20, "CEP deve ter no máximo 20 caracteres")
        .optional(),

    complemento: z
        .string()
        .max(255, "Complemento muito longo")
        .nullable()
        .optional(),
});