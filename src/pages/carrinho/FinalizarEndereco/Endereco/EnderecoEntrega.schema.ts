import z from "zod"

export const enderecoEntregaSchema = z.object({
    cep: z.string("CEP obrigatório inválido").min(8, "CEP inválido"),
    estado: z.string("Estado obrigatório"),

    cidade: z.string("Cidade é obrigatório"),
    rua: z.string('Rua é obrigatório'),

    numero: z.string('Numero é obrigatório'),
    bairro: z.string('Bairro é obrigatório'),
})

export type EnderecoEntregaForm = z.infer<typeof enderecoEntregaSchema>
