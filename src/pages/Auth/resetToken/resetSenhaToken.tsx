import ContainerForm from "../../../components/FormContainer/FormContainer";
import * as styled from "../Auth.styled";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { ChevronLeft } from "lucide-react";
import { Alert } from "@mui/joy";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Reset } from "../reset.schema";
import { useResetSenha } from "./resetToken.hook";

type ResetSenhaForm = z.infer<typeof Reset>;

export function ResetTokenPage() {
  const { control, handleSubmit } = useForm<ResetSenhaForm>();
  const { resetSenha, successMessage, errorMessage, loading } = useResetSenha();

  const onSubmit = handleSubmit((data) => {
    resetSenha({
      email: data.Email,
      token: data.Token,
      senha: data.Senha,
      senha_confirmation: data.Senha, // Laravel exige confirmação
    });
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

      <ContainerForm acao="Token">
        <Input<ResetSenhaForm>
          placeholder="Digite seu email"
          control={control}
          name="Email"
          label="Email"
        />
        <Input<ResetSenhaForm>
          placeholder="Digite seu Token"
          control={control}
          name="Token"
          label="Token"
        />
        <Input<ResetSenhaForm>
          placeholder="Digite sua nova Senha"
          control={control}
          name="Senha"
          label="Senha"
          type="password"
        />
       <Input<ResetSenhaForm>
          placeholder="Confirme sua nova Senha"
          control={control}
          name="ConfirmeSenha"
          label="Confirme sua nova Senha"
          type="password"
        />
    
        <Button
          tamanho="md"
          variante="ButtonGreen"
          onClick={onSubmit}
          disabled={loading}
        >
          {loading ? "Enviando..." : "Redefinir Senha"}
        </Button>

        {successMessage && <Alert color="success" sx={{ mt: 2 }}>{successMessage}</Alert>}
        {errorMessage && <Alert color="danger" sx={{ mt: 2 }}>{errorMessage}</Alert>}
      </ContainerForm>
    </styled.ContainerAuth>
  );
}
