import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProduto } from "../../controllers/produto.controller";
import { cadastroProduto, type CadastroProdutoType } from "./CadastrarProduto.schemas";
import { useState } from "react";

import axios from "axios";


export const useProduto = () => {
    const form = useForm<CadastroProdutoType>({
        resolver: zodResolver(cadastroProduto),
        mode: "onChange",
    });


    const createMutation = useCreateProduto();

    const convertDate = (str: string) => {
        const [d, m, y] = str.split("/");
        return `${y}-${m}-${d}`;
    };

    const onSubmit = form.handleSubmit((data) => {
        const formData = new FormData();

        formData.append("nome", data.nome);
        formData.append("descricao", data.descricao ?? "");
        formData.append("preco_unit", String(
            Number(data.preco.replace("R$", "").replace(/\./g, "").replace(",", "."))
        ));
        formData.append("quantidade_estoque", String(Number(data.quantidadeEstoque)));
        formData.append("quant_unit_medida", String(Number(data.quantidadeMedida)));
        formData.append("validade", convertDate(data.dataValidade));

        // fk_unidade_medida_id: mapear de acordo com backend
        formData.append("fk_unidade_medida_id", String(
            data.unidadeMedida === "kg" ? 1 : data.unidadeMedida === "gr" ? 2 : data.unidadeMedida === "l" ? 3 : data.unidadeMedida === "ml" ? 4 : data.unidadeMedida === "und" ? 5 : data.unidadeMedida === "dz" ? 6 : 7
        ));

        // fk_horta_id fixo ou dinâmico
        formData.append("fk_horta_id", "1");

        if (data.imagem instanceof File) {
            formData.append("caminho", data.imagem);
        }

        createMutation.mutate(formData);
    });

    return {
        ...form,
        onSubmit,
        isLoading, // : createMutation.isPending,
        control: form.control
    };
};
