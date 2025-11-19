import z from "zod"

export const cadastroProduto = z
    .object({
        nome: z
            .string()
            .min(1, "Nome do Produto é obrigatório")
            .max(255, "Esse campo pode ter até 255 caracteres"),

        descricao: z
            .string()
            .max(2000, "Esse campo pode ter até 2000 caracteres")
            .optional(),

        preco: z
            .string()
            .min(1, "Preço é obrigatório")
            .refine((value) => {
                const numero = Number(
                    value
                        .replace("R$", "")
                        .replace(/\s/g, "")
                        .replace(/\./g, "")
                        .replace(",", ".")
                );

                return !isNaN(numero) && numero >= 0;
            }, "Preço inválido"),

        unidadeMedida: z.enum(["mg", "kg", "ml"], {
            message: "Selecione uma unidade de medida válida",
        }),

        quantidadeEstoque: z
            .string()
            .min(1, "Quantidade Disponível é obrigatória")
            .refine((v) => !isNaN(Number(v)), "Quantidade deve ser numérica"),

        quantidadeMedida: z
            .string()
            .min(1, "Quantidade Medida é obrigatória")
            .refine((v) => !isNaN(Number(v)), "Quantidade deve ser numérica"),

        dataColheita: z
            .string()
            .min(10, "Data de colheita é obrigatória")
            .refine((val) => {
                const [dia, mes, ano] = val.split("/").map(Number);
                const data = new Date(ano, mes - 1, dia);
                return data <= new Date();
            }, "A data de colheita deve ser menor ou igual à data atual"),

        dataValidade: z
            .string()
            .min(10, "Data de validade é obrigatória"),
    })
    .refine((produto) => {
        const [d1, m1, a1] = produto.dataColheita.split("/").map(Number);
        const [d2, m2, a2] = produto.dataValidade.split("/").map(Number);

        const colheita = new Date(a1, m1 - 1, d1);
        const validade = new Date(a2, m2 - 1, d2);

        return validade > colheita;
    }, {
        message: "A data da validade deve ser depois da colheita",
        path: ["dataValidade"],
    });

export type CadastroProdutoType = z.infer<typeof cadastroProduto>;
