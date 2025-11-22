import z from "zod"

export const enderecoEntregaSchema = z.object({
    cep: z.string().min(8, "CEP inválido"),
    estado: z.string().min(1, "Selecione um estado"),

    cidade: z.string().min(1, "Cidade obrigatória"),
    rua: z.string().min(1, "Rua obrigatória"),

    numero: z.string().min(1, "Número obrigatório"),
    bairro: z.string().min(1, "Bairro obrigatório")
})

export type EnderecoEntregaForm = z.infer<typeof enderecoEntregaSchema>
