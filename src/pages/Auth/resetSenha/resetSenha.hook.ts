import { useState } from "react";
import axios from "axios";
import { api } from "../../../lib/api/api";
import { useNavigate } from "react-router-dom";

export const useResetSenha = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const resetSenha = async (email: string) => {
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const res = await api.post("/forgot_password", { email });
      setSuccessMessage(res.data.message);

      await sleep(1000);
      navigate('/ResetTokenPage');
      
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setErrorMessage(err.response?.data?.message || "Erro ao enviar link");
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
