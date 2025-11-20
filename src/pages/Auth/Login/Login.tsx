import ContainerForm from "../../../components/FormContainer/FormContainer";
import * as styled from "../Auth.styled";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { ChevronLeft } from "lucide-react";
import { Alert } from "@mui/joy";
import { useLoginForm, type LoginForm } from "./login.hooks";

export function LoginPage() {
    const { control, onSubmit, errorMessage } = useLoginForm();

    return (
        <styled.ContainerAuth sx={{ width: "100%" }}>
            <Button
                icon={ChevronLeft}
                sx={{
                    position: "absolute",
                    top: "3%",
                    right: "3%",
                    zIndex: 10,
                }}
                tamanho="sm"
                to="/"
                variante="ButtonLinkBlack"
            >
                Voltar
            </Button>

            <ContainerForm acao="Login" initialTab="Consumidor">
                <Input<LoginForm>
                    placeholder="Digite seu email"
                    control={control}
                    name="email"
                    label="Email"
                />
                <Input<LoginForm>
                    type="password"
                    placeholder="Digite sua senha"
                    control={control}
                    name="senha"
                    label="Senha"
                />
                <Button tamanho="md" variante="ButtonGreen" onClick={onSubmit}>
                    Entrar
                </Button>

                {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
            </ContainerForm>
        </styled.ContainerAuth>
    );
}
