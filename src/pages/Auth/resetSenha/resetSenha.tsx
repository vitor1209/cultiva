import ContainerForm from "../../../components/FormContainer/FormContainer";
import * as styled from "../Auth.styled";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { ChevronLeft } from "lucide-react";
import { Alert } from "@mui/joy";
import { useForm } from "react-hook-form";
import { useResetSenha } from "./resetSenha.hook";

type ResetSenhaForm = { email: string; }

export function ResetSenhaPage() {
    const { control, handleSubmit } = useForm<ResetSenhaForm>();
    const { resetSenha, successMessage, errorMessage, loading } = useResetSenha();

    const onSubmit = handleSubmit((data) => {
        resetSenha(data.email);
    });

    return (
        <styled.ContainerAuth sx={{ width: "100%" }}>
            <Button
                icon={ChevronLeft}
                sx={{ position: "absolute", top: "3%", right: "3%", zIndex: 10 }}
                tamanho="sm"
                to="/"
                variante="ButtonLinkBlack"
            >
                Voltar
            </Button>

            <ContainerForm acao="Reset">
                <Input<ResetSenhaForm>
                    placeholder="Digite seu email"
                    control={control}
                    name="email"
                    label="Email"
                />
                
                <Button tamanho="md" variante="ButtonGreen" onClick={onSubmit} disabled={loading}>
                    {loading ? "Enviando..." : "Enviar Link"}
                </Button>

                {successMessage && <Alert color="success" sx={{ mt: 2 }}>{successMessage}</Alert>}
                {errorMessage && <Alert color="danger" sx={{ mt: 2 }}>{errorMessage}</Alert>}
            </ContainerForm>
        </styled.ContainerAuth>
    );
}
