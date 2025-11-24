// resetToken.hook.ts
import { useState } from "react";
import axios from "axios";
import { api } from "../../../lib/api/api";
import { useNavigate } from "react-router";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const useResetSenha = () => {
  const navigate = useNavigate(); 
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const resetSenha = async (payload: {
    email: string;
    token: string;
    senha: string;
    senha_confirmation?: string;
  }) => {
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await api.post("/reset_password", {
        email: payload.email,
        token: payload.token,
        password: payload.senha,
        password_confirmation: payload.senha_confirmation || payload.senha,
      });

      setSuccessMessage(res.data.message || "Senha redefinida com sucesso!");

      await sleep(1000);
      navigate("/Login"); 
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setErrorMessage(err.response?.data?.message || "Erro ao redefinir a senha");
      } else if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("Erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  };

  return { resetSenha, successMessage, errorMessage, loading };
};
