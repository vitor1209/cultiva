import ContainerForm from "../../../components/FormContainer/FormContainer";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { Stack, Alert } from "@mui/material";
import Typography from "@mui/joy/Typography";
import { useForm } from "react-hook-form";
import { ChevronLeft } from "lucide-react";
import * as styled from "../../Auth/Auth.styled";

export default function DadosPessoais() {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log("ENVIADO:", data);
    };

    return (
        <styled.ContainerAuth>
            <Button
                icon={ChevronLeft}
                sx={{ position: "absolute", top: "3%", right: "3%", zIndex: 10 }}
                tamanho="sm"
                to="/Dashboard"
                variante="ButtonLinkBlack"
            >
                Voltar
            </Button>

            <ContainerForm
                acao=""
                noTabs
                children={
                    <>
                        <Input
                            placeholder="Seu nome"
                            name="nome"
                            label="Nome"
                            control={control}
                        />

                        <Input
                            placeholder="(00) 00000-0000"
                            name="telefone"
                            label="Telefone"
                            control={control}
                        />

                        <Input
                            placeholder="00/00/0000"
                            name="datanasc"
                            label="Data de nascimento"
                            control={control}
                        />

                        <Input
                            type="file"
                            placeholder="Foto"
                            name="foto"
                            label="Foto"
                            control={control}
                        />
                    </>
                }
                childrenSecund={
                    <>
                        <Input
                            type="file"
                            placeholder="Envie o banner"
                            name="banner"
                            label="Banner"
                            control={control}
                        />

                        <Input
                            placeholder="Ex: Horta do João"
                            name="nome_horta"
                            label="Nome da Horta"
                            control={control}
                        />

                        <Input
                            placeholder="0,00"
                            name="frete"
                            type="number"
                            label="Frete"
                            control={control}
                        />

                        <Stack mt={2}>
                            <Button
                                tamanho="md"
                                variante="ButtonGreen"
                                onClick={handleSubmit(onSubmit)}
                            >
                                Salvar
                            </Button>
                        </Stack>

                        <Typography textAlign="center" level="body-xs" mt={1}>
                            Atualize os dados da sua horta sempre que necessário.
                        </Typography>
                    </>
                }
            />
        </styled.ContainerAuth>
    );
}