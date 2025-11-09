import z from "zod"

export const cadastroProduto = z
    .object({
        nome: z
            .string("Nome do Produto é obrigatorio")
            .max(255, "Esse campo pode ter até 255 caracteres"),

        descricao: z.string().max(2000, "Esse campo pode ter até 2000 caracteres").optional(),

        preco: z
            .number("Preço é obrigatorio")
            .min(0, "Preço tem que ser maior que 0")
            .multipleOf(0.01, "Esse campo pode conter apenas 2 casas decimais"),

        unidadeMedida: z.enum(["gr", "kg", "ml"], "Selecione uma role válida."),

        quantidadeEstoque: z.number("Quantidade Disponível é obrigatorio"),

        quantidadeMedida: z.number("Quantidade Medida é obrigatorio"),

        dataColheita: z
            .date("Data de Colheita é obrigatorio")
            .refine((val) => val <= new Date(), "A data de colheita deve ser menor que a data atual"),

        dataValidade: z.date("Data de Validade é obrigatorio"),
    })
    .refine(
        (produto) => produto.dataValidade > produto.dataColheita,
        "A data da validade teve ser depois da colheita"
    )

export type CadastroProdutoType = z.infer<typeof cadastroProduto>
