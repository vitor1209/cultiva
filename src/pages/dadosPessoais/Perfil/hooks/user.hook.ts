import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthUpdate, useGetUser } from "../../../../controllers/user.controller";
import { DadosPessoaisSchemaC, type FormData } from "../DadosPessoaisC.schema";

export function useUserForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(DadosPessoaisSchemaC),
    defaultValues: {
      email: "",
      telefone: "",
      datanasc: "",
      foto: "",
    },
  });

  const { data: user } = useGetUser();
  const updateMutation = useAuthUpdate();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      // Converte data yyyy-mm-dd -> dd/mm/yyyy
      const [ano, mes, dia] = user.datanasc.split("-");
      const dataFormatada = `${dia}/${mes}/${ano}`;

      // Concatena URL da foto
      const fotoUrl = user.foto ? `http://127.0.0.1:8000/storage/${user.foto}` : "";

      form.reset({
        email: user.email ?? "",
        telefone: user.telefone ?? "",
        datanasc: dataFormatada,
        foto: fotoUrl,
      });
    }
  }, [user, form]);

  const onSubmit = (data: FormData) => {
    const formData = new FormData();

    // Reverte data para yyyy-mm-dd antes de enviar
    if (data.datanasc) {
      const [dia, mes, ano] = data.datanasc.split("/");
      formData.append("datanasc", `${ano}-${mes}-${dia}`);
    }

    if (data.email) formData.append("email", data.email);
    if (data.telefone) formData.append("telefone", data.telefone);

    // Adiciona foto somente se for um arquivo selecionado
    if (data.foto instanceof File) {
      formData.append("foto", data.foto);
    }

    updateMutation.mutate(formData, {
      onSuccess: () => {
        setModalMessage("Dados atualizados com sucesso!");
        setModalOpen(true);
      },
    });
  };

  return {
    form,
    onSubmit,
    modalOpen,
    setModalOpen,
    modalMessage,
    user,
  };
}
