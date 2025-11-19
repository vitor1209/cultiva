import ContainerForm from "../../../components/FormContainer/FormContainer";
import * as styled from "../Auth.styled";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import Typography from "@mui/joy/Typography";
import { Stack } from "@mui/material";
import { MASCARAS } from "../../../masks";
import { ChevronLeft } from "lucide-react";
import { useRegisterForm } from "./Cadastro.hooks";

export function CadastroPage() {

    const {
        control,
        setTipoUsuario,
        onSubmit,
    } = useRegisterForm()

    const handleTabChange = (tipoUsuario: "Consumidor" | "Produtor") => {
        setTipoUsuario(tipoUsuario.toLowerCase() as "consumidor" | "produtor");
    };

    return (
        <styled.ContainerAuth>
            <Button
                icon={ChevronLeft}
                sx={{
                    position: "absolute",
                    top: "3%",
                    right: "3%",
                    zIndex: 10,
                }}
                tamanho={"sm"}
                to="/Login"
                variante="ButtonLinkBlack"
            >
                Voltar
            </Button>

            <ContainerForm
                acao="Cadastro"
                onTabChange={handleTabChange}
                initialTab="Consumidor"
                children={
                    <>
                        <Input placeholder="Nome completo" name="NomeCompleto" label="Nome completo" control={control} />
                        <Input placeholder="E-mail" name="Email" label="E-mail" control={control} />
                        <Input mask={MASCARAS.data} placeholder="00/00/0000" name="dataNasci" label="Data de Nascimento" control={control} />
                    </>
                }
                childrenSecund={
                    <>
                        <Input mask={MASCARAS.celular} placeholder="(00) 00000-0000" name="celular" label="Celular" control={control} />
                        <Input placeholder="Senha" name="Senha" label="Senha" control={control} />
                        <Input placeholder="Confirmar senha" name="ConfirmarSenha" label="Confirmar senha" control={control} />

                        <Stack>
                            <Button tamanho="md" variante="ButtonGreen" onClick={onSubmit}>
                                Cadastrar
                            </Button>
                        </Stack>

                        <Typography textAlign={'center'} level="body-xs">
                            Ao se cadastrar, você concorda com nossos Termos de Uso e Política de Privacidade.
                        </Typography>
                    </>
                }
            />
        </styled.ContainerAuth>
    );
}
