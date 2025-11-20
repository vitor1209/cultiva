import ContainerForm from "../../../components/FormContainer/FormContainer";
import * as styled from "../Auth.styled";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import Typography from "@mui/joy/Typography";
import { Stack, Alert } from "@mui/material";
import { MASCARAS } from "../../../masks";
import { ChevronLeft } from "lucide-react";
import { useRegisterForm } from "./Cadastro.hooks";

export function CadastroPage() {
  const {
    control,
    onSubmit,
    setTipoUsuario,
    tipoUsuario,
    errorMessage,
    successMessage,
    loading,
  } = useRegisterForm();

  return (
    <styled.ContainerAuth>
      <Button
        icon={ChevronLeft}
        sx={{ position: "absolute", top: "3%", right: "3%", zIndex: 10 }}
        tamanho="sm"
        to="/Login"
        variante="ButtonLinkBlack"
      >
        Voltar
      </Button>

      <ContainerForm
        acao="Cadastro"
        onTabChange={(t) =>
          setTipoUsuario(t.toLowerCase() as "consumidor" | "produtor")
        }
        initialTab="Consumidor"
        children={
          <>
            <Input
              placeholder="Nome completo"
              name="NomeCompleto"
              label="Nome completo"
              control={control}
            />

            {tipoUsuario === "produtor" && (
              <Input
                placeholder="Nome da horta"
                name="NomeHorta"
                label="Nome da horta"
                control={control}
              />
            )}

            <Input
              placeholder="E-mail"
              name="Email"
              label="E-mail"
              control={control}
            />

            <Input
              mask={MASCARAS.data}
              placeholder="00/00/0000"
              name="dataNasci"
              label="Data de Nascimento"
              control={control}
            />
          </>
        }
        childrenSecund={
          <>
            {tipoUsuario === "produtor" && (
              <Input
                placeholder="Valor do frete"
                type="number"
                name="frete"
                label="Valor do frete"
                control={control}
              />
            )}

            <Input
              mask={MASCARAS.celular}
              placeholder="(00) 00000-0000"
              name="celular"
              label="Celular"
              control={control}
            />

            <Input
              placeholder="Senha"
              type="password"
              name="Senha"
              label="Senha"
              control={control}
            />

            <Input
              placeholder="Confirmar senha"
              type="password"
              name="ConfirmarSenha"
              label="Confirmar senha"
              control={control}
            />

            <Stack mt={2}>
              <Button
                tamanho="md"
                variante="ButtonGreen"
                onClick={() => onSubmit()}
                disabled={loading}
              >
                {loading ? "Cadastrando..." : "Cadastrar"}
              </Button>
            </Stack>

            {errorMessage && (
              <Alert color="error" sx={{ mt: 2 }}>
                {errorMessage}
              </Alert>
            )}
            {successMessage && (
              <Alert color="success" sx={{ mt: 2 }}>
                {successMessage}
              </Alert>
            )}

            <Typography textAlign="center" level="body-xs" mt={1}>
              Ao se cadastrar, você concorda com nossos Termos de Uso e Política
              de Privacidade.
            </Typography>
          </>
        }
      />
    </styled.ContainerAuth>
  );
}
