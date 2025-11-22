import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enderecoEntregaSchema, type EnderecoEntregaForm } from "./EnderecoEntrega.schema";
import { useEnderecoAdd } from "../../../../controllers/endereco.controller";
import axios from "axios";

export function useEnderecoForm() {
    const form = useForm<EnderecoEntregaForm>({
        resolver: zodResolver(enderecoEntregaSchema),
    });

    const enderecoMutation = useEnderecoAdd();

    const onSubmit = form.handleSubmit((data) => {
        enderecoMutation.mutate(data, {
            onSuccess: () => {
                console.log("Endereço cadastrado com sucesso!");
                form.reset();
            },
            onError: (err: unknown) => {
      // Aqui você captura o erro que o backend retornou
      if (axios.isAxiosError(err) && err.response) {
        console.error("Erro do backend:", err.response.data);
        // opcional: mostrar mensagem para o usuário
        // toast.error(err.response.data.message || "Erro ao cadastrar endereço");
      } else {
        console.error(err);
      }
    },
        });
    });

    return {
        form,
        onSubmit,
    };
}
