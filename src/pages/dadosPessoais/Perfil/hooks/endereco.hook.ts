import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEnderecoAdd, useGetEndereco, useEnderecoUpdate } from "../../../../controllers/endereco.controller";
import { EnderecoSchema, type EnderecoEntregaDados } from "../DadosEndereco.schema";
import type { EnderecoAdd, EnderecoUpdate } from "../../../../models/endereco.types";

export function useFinalizarEnderecoForm() {
    const form = useForm<EnderecoEntregaDados>({
        resolver: zodResolver(EnderecoSchema),
    });

    const { data: enderecos } = useGetEndereco();
    const enderecoExistente =
        enderecos && enderecos.length > 0 ? enderecos[enderecos.length - 1] : null;

    const addMutation = useEnderecoAdd();
    const updateMutation = useEnderecoUpdate();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState<string | null>(null);

    useEffect(() => {
        if (enderecoExistente) {
            form.reset({
                rua: enderecoExistente.rua,
                numero: enderecoExistente.numero,
                cidade: enderecoExistente.cidade,
                estado: enderecoExistente.estado,
                cep: enderecoExistente.cep,
                complemento: enderecoExistente.complemento ?? "",
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [enderecoExistente]);

    const onSubmit = (data: EnderecoEntregaDados) => {
        console.log('oioio');
        
        if (enderecoExistente) {
            updateMutation.mutate(
                { id: enderecoExistente.id, ...data } as EnderecoUpdate.Request,
                {
                    onSuccess: () => {
                        setModalMessage("Endereço atualizado com sucesso!");
                        setModalOpen(true);
                    },
                }
            );
            return;
        }

        addMutation.mutate(data as EnderecoAdd.Request, {
            onSuccess: () => {
                form.reset();
                setModalMessage("Endereço criado com sucesso!");
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
        enderecoExistente,
    };
}
