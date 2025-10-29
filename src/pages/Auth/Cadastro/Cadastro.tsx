import ContainerForm from "../../../components/FormContainer/FormContainer";
import * as styled from "../Auth.styled";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input/Input";
import { User } from "./Cadastro.schemas";

export function CadastroPage() {
    const { handleSubmit, control } = useForm({
        resolver: zodResolver(User)
    })

    const onSubmit = handleSubmit(async (values) => {
        console.log(values);
    })

    return (
        <styled.ContainerAuth>
            <ContainerForm
                acao="Cadastro"
                children={
                    <>
                        <Input placeholder="Email" name="email" label="Email" control={control} />
                        <Input placeholder="Nome" name="senha" label="Nome" control={control} />
                        <Input placeholder="Nome" name="senha" label="Nome" control={control} />
                    </>
                }
                childrenSecund={
                    <>
                        <Input placeholder="Senha" name="senha" label="Senha" control={control} />
                        <Input placeholder="Nome" name="senha" label="Nome" control={control} />
                        <Input placeholder="Nome" name="senha" label="Nome" control={control} />
                        <Input placeholder="Nome" name="senha" label="Nome" control={control} />

                        <Button tamanho="md" variante="ButtonGreen" onClick={onSubmit}>
                            Cadastrar
                        </Button>
                    </>
                }
            />
        </styled.ContainerAuth>
    )
}