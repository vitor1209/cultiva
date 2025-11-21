import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../../lib/api/api";

export const useCadastroProduto = () => {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const cadastroProduto = async (payload: FormData) => {
        setLoading(true);
        setSuccessMessage(null);
        setErrorMessage(null);

        try {
            await api.post("/produtos", payload); // << usa a instância correta

            setSuccessMessage("Produto cadastrado com sucesso!");
            await sleep(1000);
            navigate('/HomeProdutor');
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setErrorMessage(err.response?.data?.message || "Erro ao cadastrar produto");
            } else if (err instanceof Error) {
                setErrorMessage(err.message);
            } else {
                setErrorMessage("Erro desconhecido");
            }
        } finally {
            setLoading(false);
        }
    };


    return { cadastroProduto, successMessage, errorMessage, loading };
};
