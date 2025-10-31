import ContainerForm from "../../../components/FormContainer/FormContainer";
import * as styled from "../Auth.styled";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { User } from "./Cadastro.schemas";
import Typography from "@mui/joy/Typography";
import { Stack } from '@mui/material';
import { MASCARAS } from "../../../masks";
import { ChevronLeft } from "lucide-react";

export function CadastroPage() {
    const { handleSubmit, control } = useForm({
        resolver: zodResolver(User)
    })

    const onSubmit = handleSubmit(async (values) => {
        console.log(values);
    })

    return (
        <styled.ContainerAuth>
            <Button icon={ChevronLeft} sx={{
                position: "absolute",
                top: "3%",
                right: "3%",
                zIndex: 10,
            }} tamanho={"sm"} to="/Login" variante="ButtonLinkBlack">Voltar</Button>
            <ContainerForm
                acao="Cadastro"
                children={
                    <>
                        <Input placeholder="Nome completo" name="NomeCompleto" label="Nome completo" control={control} />
                        <Input placeholder="E-mail" name="Email" label="E-mail" control={control} />
                        <Input mask={MASCARAS.cpf} placeholder="000.000.000-00" name="CPF" label="CPF" control={control} />
                        <Input mask={MASCARAS.data} placeholder="00/00/0000" name="dataNasci" label="Data de Nascimento" control={control} />
                    </>
                }
                childrenSecund={
                    <>
                        <Input mask={MASCARAS.cep} placeholder="00000-000" name="CEP" label="CEP" control={control} />
                        <Input placeholder="Estado" name="Estado" label="Estado" control={control} />
                        <Input placeholder="Senha" name="Senha" label="Senha" control={control} />
                        <Input placeholder="Confirmar senha" name="ConfirmarSenha" label="Confirmar senha" control={control} />

                        <Stack>
                            <Button tamanho="md" variante="ButtonGreen" onClick={onSubmit}>
                                Cadastrar
                            </Button>
                        </Stack>


                        <Typography textAlign={'center'} level="body-xs">Ao se cadastrar, você concorda com nossos Termos de Uso e Política de Privacidade.</Typography>
                    </>
                }
            />
        </styled.ContainerAuth>
    )
}