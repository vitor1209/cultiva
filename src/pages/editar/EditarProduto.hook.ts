// hooks/useEditarProduto.ts
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useGetProdutoById, useUpdateProduto } from "../../controllers/produto.controller";
import { cadastroProduto, type CadastroProdutoType } from "../Cadastrar/CadastrarProduto.schemas";


export const useEditarProduto = (id: number | undefined) => {
  const navigate = useNavigate();
  const getProduto = useGetProdutoById(Number(id));
  const updateProduto = useUpdateProduto();

  const { control, handleSubmit, reset } = useForm<CadastroProdutoType>({
    resolver: zodResolver(cadastroProduto),
    defaultValues: {
      nome: "",
      descricao: "",
      preco: "",
      unidadeMedida: "kg",
      quantidadeEstoque: "",
      quantidadeMedida: "",
      dataColheita: "",
      dataValidade: "",
    },
  });

  // Formata data para input
  const formatarDataParaInput = (data: string) => {
    const d = new Date(data);
    const dia = String(d.getDate()).padStart(2, "0");
    const mes = String(d.getMonth() + 1).padStart(2, "0");
    const ano = d.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  // Formata data para API
  const formatarDataParaAPI = (data: string) => {
    const [dia, mes, ano] = data.split("/");
    return `${ano}-${mes}-${dia}`;
  };

  // Converte preço string -> number
  const converterPreco = (valor: string) => {
    return Number(valor.replace("R$", "").replace(/\./g, "").replace(",", ".").trim());
  };

  // Preenche o formulário com os dados do produto
  useEffect(() => {
    if (getProduto.data) {
      const p = getProduto.data;
      reset({
        nome: p.nome,
        descricao: p.descricao,
        preco: p.preco.toFixed(2),
        unidadeMedida: p.unidadeMedida,
        quantidadeEstoque: p.quantidadeEstoque.toString(),
        quantidadeMedida: p.quantidadeMedida.toString(),
        dataColheita: formatarDataParaInput(p.dataColheita),
        dataValidade: formatarDataParaInput(p.dataValidade),
      });
    }
  }, [getProduto.data, reset]);

  // Função de envio do formulário
  const onSubmit = handleSubmit((data) => {
    if (!id) return;

    const payload = {
      id: Number(id),
      nome: data.nome,
      descricao: data.descricao ?? undefined,
      preco: converterPreco(data.preco),
      unidadeMedida: data.unidadeMedida,
      quantidadeEstoque: Number(data.quantidadeEstoque),
      quantidadeMedida: Number(data.quantidadeMedida),
      dataColheita: formatarDataParaAPI(data.dataColheita),
      dataValidade: formatarDataParaAPI(data.dataValidade),
    };

    updateProduto.mutate(payload, {
      onSuccess: () => {
        alert("Produto atualizado com sucesso!");
        navigate("/HomeProdutor");
      },
      onError: () => {
        alert("Erro ao atualizar produto");
      },
    });
  });

  return {
    control,
    onSubmit,
    isLoading: updateProduto.isPending,
  };
};
