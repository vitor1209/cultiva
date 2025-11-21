import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { AxiosError } from "axios";
import { User } from "./Cadastro.schemas";
import { useRegister } from "../../../controllers/auth.controller";

export const useRegisterForm = () => {
  const registro = useRegister();

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(User),
  });

  const [tipoUsuario, setTipoUsuario] = useState<"consumidor" | "produtor">(
    "consumidor"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (values) => {
    setErrorMessage(null);
    setSuccessMessage(null);
    setLoading(true);

    const [day, month, year] = values.dataNasci.split("/").map(Number);
    const datanascString = `${year}-${String(month).padStart(2, "0")}-${String(
      day
    ).padStart(2, "0")}`;

    try {
      const payloadUser = {
        nome: values.NomeCompleto,
        email: values.Email,
        telefone: values.celular.replace(/\D/g, ""),
        datanasc: datanascString,
        password: values.Senha,
        password_confirmation: values.ConfirmarSenha,
        Tipo_usuario: tipoUsuario,
        nome_horta: tipoUsuario === "produtor" ? values.NomeHorta : undefined,
        frete:
          tipoUsuario === "produtor" && values.frete !== undefined
            ? String(values.frete)
            : undefined,
      };

      const { user, token, horta } = await registro.mutateAsync(payloadUser);

      localStorage.setItem("token", token);
      localStorage.setItem(
        "usuarioLogado",
        JSON.stringify({
          ...user,
          fk_horta_id: horta?.id, 
        })
      );


      setSuccessMessage("Cadastro realizado com sucesso!");

      setTimeout(() => {
        window.location.href =
          tipoUsuario === "produtor" ? "/HomeProdutor" : "/HomeConsumidor";
      }, 1000);
    } catch (err: unknown) {
      const axiosError = err as AxiosError<{ message: string }>;
      setErrorMessage(
        axiosError.response?.data?.message ?? "Erro ao cadastrar usuário."
      );
    } finally {
      setLoading(false);
    }
  });


  return {
    control,
    onSubmit,
    setTipoUsuario,
    tipoUsuario,
    errorMessage,
    successMessage,
    loading,
    handleSubmit,
  };
};
