import z from "zod"

export const enderecoEntregaSchema = z.object({
    tipoEntrega: z.enum(["residencia", "retirada"]),

    cep: z.string().min(8, "CEP inválido"),
    estado: z.string().min(1, "Selecione um estado"),

    cidade: z.string().min(1, "Cidade obrigatória"),
    rua: z.string().min(1, "Rua obrigatória"),

    numero: z.string().min(1, "Número obrigatório"),
    complemento: z.string().optional(),
})

export type EnderecoEntregaForm = z.infer<typeof enderecoEntregaSchema>
