import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProduto } from "../../controllers/produto.controller";
import { cadastroProduto, type CadastroProdutoType } from "./CadastrarProduto.schemas";

export const useProduto = () => {
    const form = useForm<CadastroProdutoType>({
        resolver: zodResolver(cadastroProduto),
        mode: "onChange",
    });

    const createMutation = useCreateProduto();

    const onSubmit = form.handleSubmit((data) => {
        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            if (key === "imagem") {
                if (value instanceof File) {
                    formData.append("imagem", value); 
                }
            } else {
                formData.append(key, String(value)); 
            }
        });

        createMutation.mutate(formData);
    });

    return {
        ...form,
        onSubmit,
        isLoading: createMutation.isPending,
    };
};
