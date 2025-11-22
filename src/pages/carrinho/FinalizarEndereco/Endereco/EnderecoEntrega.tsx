import { Input } from "../../../../components/Input/Input";
import { MASCARAS } from "../../../../masks";
import { CardEntrega, Title, GridForm, Col } from "../EnderecoEntrega.styled";
import { Asterisk } from "lucide-react";
import type { EnderecoEntregaForm } from "./EnderecoEntrega.schema";
import type { UseFormReturn } from "react-hook-form";
import { SelectControlado } from "../../../../components/Input/Select/Select";
import { LISTA_UF } from "../../../../lib/Uf";
import { MenuItem } from "@mui/material";

interface EnderecoEntregaProps {
    form: UseFormReturn<EnderecoEntregaForm>;
}

export function EnderecoEntrega({ form }: EnderecoEntregaProps) {

    return (
        <CardEntrega>
            <Title>Endereço de Entrega</Title>

            <GridForm>
                <Col>
                    <Input
                        name="cep"
                        label="CEP"
                        placeholder="xxxxx-xxx"
                        mask={MASCARAS.cep}
                        required
                        control={form.control}
                        Icon={Asterisk}
                    />
                </Col>

                <Col>
                    <SelectControlado
                        control={form.control}
                        name="estado"
                        placeholder="Selecione o estado"
                        sx={{
                            height: 48,
                            "& .MuiSelect-select": {
                                padding: "12px 14px",
                            }
                        }}
                    >
                        {LISTA_UF.map((uf) => (
                            <MenuItem key={uf} value={uf}>
                                {uf}
                            </MenuItem>
                        ))}
                    </SelectControlado>
                </Col>

                <Col>
                    <Input
                        name="cidade"
                        label="Cidade"
                        placeholder="Digite sua cidade"
                        required
                        control={form.control}
                        Icon={Asterisk}
                    />
                </Col>

                <Col>
                    <Input
                        name="rua"
                        label="Rua"
                        placeholder="Digite sua rua"
                        required
                        control={form.control}
                        Icon={Asterisk}
                    />
                </Col>

                <Col>
                    <Input
                        name="numero"
                        label="Número"
                        type="number"
                        placeholder="Digite o número"
                        required
                        control={form.control}
                        Icon={Asterisk}
                    />
                </Col>

                <Col>
                    <Input
                        name="bairro"
                        label="Bairro"
                        placeholder="Digite seu bairro"
                        required
                        control={form.control}
                        Icon={Asterisk}
                    />
                </Col>
            </GridForm>
        </CardEntrega>
    );
}
