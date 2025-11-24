import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../../lib/api/api";
import type { UpdateProduto } from "../../../models/produto.types";

export const useEditarProduto = () => {
  const [produto, setProduto] = useState<UpdateProduto.Response | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const carregarProduto = async (id: string) => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await api.get(`/produtos/${id}`);
      setProduto(response.data.data); 
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setErrorMessage(err.response?.data?.message || "Erro ao carregar produto");
      } else if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  };

  const atualizarProduto = async (id: string, payload: FormData) => {
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      await api.post(`/produtos/${id}?_method=PUT`, payload, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      setSuccessMessage("Produto atualizado com sucesso!");
      await sleep(1000);
      navigate("/HomeProdutor");
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setErrorMessage(err.response?.data?.message || "Erro ao atualizar produto");
      } else if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    produto,
    carregarProduto,
    atualizarProduto,
    successMessage,
    errorMessage,
    loading,
  };
};
