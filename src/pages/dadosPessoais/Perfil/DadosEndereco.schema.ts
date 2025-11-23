import * as z from "zod";

export const EnderecoSchema = z.object({
    rua: z
        .string()
        .min(1, "Informe a rua")
        .max(255, "Rua deve ter no máximo 255 caracteres"),

    numero: z
        .string()
        .min(1, "Informe o número")
        .max(10, "Número deve ter no máximo 10 caracteres"),

    cidade: z
        .string()
        .min(1, "Informe a cidade")
        .max(255, "Cidade deve ter no máximo 255 caracteres"),

    estado: z
        .string()
        .length(2, "Estado deve ter 2 caracteres (UF)"),

    cep: z
        .string()
        .min(1, "Informe o CEP")
        .max(20, "CEP deve ter no máximo 20 caracteres"),

    complemento: z
        .string()
        .max(255, "Complemento muito longo")
        .nullable()
        .optional(),
});

export type EnderecoEntregaDados = z.infer<typeof EnderecoSchema>;
