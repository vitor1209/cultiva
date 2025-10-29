import ContainerForm from "../../../components/FormContainer/FormContainer";
import * as styled from "../Auth.styled";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "./Login.schemas";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
// import { LoginBackground } from "../../../assets";
// import { Stack } from "@mui/material";

type LoginForm = { email: string; senha: string; }


export function LoginPage() {
    const { handleSubmit, control } = useForm({
        resolver: zodResolver(User)
    })

    const onSubmit = handleSubmit(async (values) => {
        console.log(values);
    })

    return (
        <styled.ContainerAuth>
            {/* <Stack className="fundo">
                <LoginBackground
                // preserveAspectRatio="xMidYMid slice"
                // height="100%"
                // width='90%'
                /> */}
            {/* </Stack> */}
            <ContainerForm>
                <Input<LoginForm>
                    placeholder="Digite seu email"
                    control={control}
                    name="email"
                    label="Email"
                />
                <Input<LoginForm>
                    type="password"
                    placeholder="Digite seu senha"
                    control={control}
                    name="senha"
                    label="Senha"
                />
                <Button tamanho={"md"} variante="ButtonGreen" onClick={onSubmit}>
                    Entrar
                </Button>
            </ContainerForm>
        </styled.ContainerAuth>
    )
}