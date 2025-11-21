import { Container, IconButton, MenuItem, Stack, Typography } from "@mui/material";
import { Asterisk, UserRound } from "lucide-react";
import { Header } from "../../components/Header/Header.tsx";
import SearchBar from "../../components/barSearch/barSearch.tsx";
import { Button } from "../../components/Button/Button.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";
import { Input } from "../../components/Input/Input.tsx";
import { MASCARAS } from "../../masks/index.ts";
import * as styled from "./CadastrarProdutoPage.styled.ts";
import { InputImagem } from "../../components/Input/BoxImg/BoxImg.tsx";
import { useProduto } from "./CadastrarProduto.hooks.ts";
import { SelectControlado } from "../../components/Input/Select/Select.tsx";

export function CadastrarProdutoPage() {
    const { control, onSubmit, isLoading } = useProduto();

    return (
        <Container disableGutters maxWidth={false} sx={{ backgroundColor: "#fff8f0", mt: 8, textAlign: "center", p: 0 }}>
            <Header
                end={<IconButton size="large"><UserRound /></IconButton>}
                start={<Stack flex={1} minWidth="250px" maxWidth="400px"><SearchBar /></Stack>}
            >
                <Button variante="ButtonLinkBlack" to="/HomeProdutor" tamanho="sm">Início</Button>
                <Button variante="ButtonLinkBlack" tamanho="sm">Seus Produtos</Button>
                <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">Pedidos</Button>
                <Button variante="ButtonLinkBlack" tamanho="sm">Como Funciona</Button>
            </Header>

            <Stack>
                <form onSubmit={onSubmit}>
                    <styled.ContainerInputs>
                        <styled.BoxFoto>
                            <InputImagem
                                name="imagem"
                                control={control}
                                label="Cadastrar Novo Produto:"
                                height={40}
                                width={45}
                            />
                        </styled.BoxFoto>

                        <styled.BoxInputs>
                            <styled.InputWrapper>
                                <Input Icon={Asterisk} required placeholder="Nome do Produto" name="nome" label="Nome do Produto:" control={control} />
                            </styled.InputWrapper>

                            <styled.InputRow>
                                <Input Icon={Asterisk} required mask={MASCARAS.data} placeholder="dd/mm/aaaa" name="dataColheita" label="Data da colheita:" control={control} />
                                <Input Icon={Asterisk} required mask={MASCARAS.data} placeholder="dd/mm/aaaa" name="dataValidade" label="Data de validade:" control={control} />
                            </styled.InputRow>

                            <styled.InputWrapper>
                                <Input multiline rows={5} placeholder="Descrição detalhada" name="descricao" label="Descrição detalhada:" control={control} />
                            </styled.InputWrapper>

                            <styled.InputRow>
                                <Input Icon={Asterisk} required type="number" placeholder="Unidades" name="quantidadeMedida" label="Quantidade por unidade:" control={control} />
                                <Stack sx={{ width: { md: "90%", lg: "35%" } }}>
                                    <Typography variant="subtitle1" fontWeight={500} color="#0A0A0A">Unidade de medida:</Typography>
                                    <SelectControlado control={control} name="unidadeMedida" placeholder="Selecione uma opção">
                                        <MenuItem value="kg">kg</MenuItem>
                                        <MenuItem value="ml">ml</MenuItem>
                                        <MenuItem value="mg">gr</MenuItem>
                                        <MenuItem value="kg">l</MenuItem>
                                        <MenuItem value="ml">dz</MenuItem>
                                        <MenuItem value="ml">und</MenuItem>
                                        <MenuItem value="ml">cm</MenuItem>

                                    </SelectControlado>
                                </Stack>
                            </styled.InputRow>

                            <styled.InputRow>
                                <Input Icon={Asterisk} required type="number" placeholder="Quantidade disponível" name="quantidadeEstoque" label="Quantidade disponível:" control={control} />
                                <Input mask={MASCARAS.real} Icon={Asterisk} required placeholder="R$ 00,00" name="preco" label="Preço:" control={control} />
                            </styled.InputRow>

                            <Stack flexDirection="row" width="90%" justifyContent="space-between" mb="10%" mt="5%">
                                <Button variante="ButtonGray" tamanho="md" type="button" sx={{ width: "48%" }}>Cancelar</Button>
                                <Button tamanho="md" type="submit" sx={{ width: "48%" }}>{isLoading ? "Salvando..." : "Salvar"}</Button>
                            </Stack>
                        </styled.BoxInputs>
                    </styled.ContainerInputs>
                </form>
            </Stack>

            <Footer />
        </Container>
    );
}
