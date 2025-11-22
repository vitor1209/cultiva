import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../../components/Input/Input";
import { enderecoEntregaSchema, type EnderecoEntregaForm } from "./EnderecoEntrega.schema";

import {
    CardEntrega,
    Title,
    GridForm,
    Col,
} from "./EnderecoEntrega.styled";

import { MASCARAS } from "../../../masks";
import { Asterisk } from "lucide-react";

export function EnderecoEntrega() {
    const { control } = useForm<EnderecoEntregaForm>({
        resolver: zodResolver(enderecoEntregaSchema),
        defaultValues: {
            tipoEntrega: "residencia", // Mantém por padrão, mas não usamos mais
        },
    });

    return (
        <CardEntrega>
            <Title>Escolha como deseja receber</Title>

            <GridForm>

                <Col>
                    <Input
                        label="CEP"
                        name="cep"
                        mask={MASCARAS.cep}
                        placeholder="00000-000"
                        Icon={Asterisk}
                        required
                        control={control}
                    />
                </Col>

                <Col>
                    <Input
                        name="estado"
                        label="Estado"
                        placeholder="Digite o estado"
                        control={control}
                        Icon={Asterisk}
                        required
                    />
                </Col>

                <Col>
                    <Input
                        name="cidade"
                        label="Cidade"
                        placeholder="Digite a cidade"
                        control={control}
                        Icon={Asterisk}
                        required
                    />
                </Col>

                <Col>
                    <Input
                        name="rua"
                        label="Rua"
                        placeholder="Digite a rua"
                        control={control}
                        Icon={Asterisk}
                        required
                    />
                </Col>

                <Col>
                    <Input
                        name="numero"
                        label="Número"
                        placeholder="Ex: 123"
                        control={control}
                        Icon={Asterisk}
                        required
                    />
                </Col>

                <Col>
                    <Input
                        name="complemento"
                        label="Complemento"
                        placeholder="Digite o complemento"
                        control={control}
                    />
                </Col>

            </GridForm>
        </CardEntrega>
    );
}
