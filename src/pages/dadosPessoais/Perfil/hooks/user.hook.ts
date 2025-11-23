import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthUpdate, useGetUser } from "../../../../controllers/user.controller";
import { DadosPessoaisSchemaC, type FormData } from "../DadosPessoaisC.schema";

export function useUserForm() {
    const form = useForm<FormData>({
        resolver: zodResolver(DadosPessoaisSchemaC),
        defaultValues: {
            nome: "",
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
        // Converte data de yyyy-mm-dd -> dd/mm/yyyy
        const [ano, mes, dia] = user.datanasc.split("-");
        const dataFormatada = `${dia}/${mes}/${ano}`;

        // Concatena URL da foto
        const fotoUrl = user.foto ? `http://127.0.0.1:8000/storage/${user.foto}` : "";

        form.reset({
            nome: user.nome ?? "",
            email: user.email ?? "",
            telefone: user.telefone ?? "",
            datanasc: dataFormatada,
            foto: fotoUrl,
        });
    }
}, [user, form]);

    const onSubmit = (data: FormData) => {
        const formData = new FormData();

        const [dia, mes, ano] = data.datanasc.split("/");
        formData.append("datanasc", `${ano}-${mes}-${dia}`);
        formData.append("nome", data.nome);
        formData.append("email", data.email);
        formData.append("telefone", data.telefone);

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
