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
    const {
        control
    } = useProduto()


    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                backgroundColor: "#fff8f0",
                textAlign: "center",
                marginTop: 8,
                padding: 0,
            }}
        >
            <Header
                end={
                    <IconButton aria-label="delete" size="large">
                        <UserRound />
                    </IconButton>
                }
                start={
                    <Stack flex={1} minWidth="250px" maxWidth="400px">
                        <SearchBar />
                    </Stack>
                }
            >
                <>
                    <Button variante="ButtonLinkBlack" to="/HomeProdutor" tamanho="sm">
                        Início
                    </Button>
                    <Button variante="ButtonLinkBlack" tamanho="sm">
                        Seus Produtos
                    </Button>
                    <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">
                        Pedidos
                    </Button>
                    <Button variante="ButtonLinkBlack" tamanho="sm">
                        Como Funciona
                    </Button>
                </>
            </Header>

            <Stack>
                <styled.ContainerInputs>
                    <styled.BoxFoto>
                        <InputImagem
                            name="ImagemProduto"
                            label="Cadastrar Novo Produto:"
                        />
                    </styled.BoxFoto>

                    <styled.BoxInputs>

                        <styled.InputWrapper>
                            <Input
                                Icon={Asterisk}
                                required
                                placeholder="Nome do Produto"
                                name="nome"
                                label="Nome do Produto:"
                                control={control}
                            />
                        </styled.InputWrapper>

                        <styled.InputRow>

                            <Input
                                Icon={Asterisk}
                                required
                                mask={MASCARAS.data}
                                placeholder="dd/mm/aaaa"
                                name="dataColheita"
                                label="Data da colheita:"
                                control={control}
                            />

                            <Input
                                Icon={Asterisk}
                                required
                                mask={MASCARAS.data}
                                placeholder="dd/mm/aaaa"
                                name="dataValidade"
                                label="Data de validade:"
                                control={control}
                            />

                        </styled.InputRow>

                        <styled.InputWrapper>
                            <Input
                                multiline
                                rows={5}
                                placeholder="Descrição detalhada"
                                name="descricao"
                                label="Descrição detalhada:"
                                control={control}
                            />
                        </styled.InputWrapper>

                        <styled.InputRow>

                            <Input
                                Icon={Asterisk}
                                required
                                type="number"
                                placeholder="Unidades"
                                name="quantidadeMedida"
                                label="Quantidade por unidade:"
                                control={control}
                            />

                            <Stack width={'35%'}>
                                <Typography
                                    className="input-label"
                                    variant="subtitle1"
                                    color="#0A0A0A"
                                    fontWeight={500}
                                    sx={{
                                        display: "inline-block",
                                        transition: "transform 0.2s ease",
                                        transformOrigin: "left center",
                                    }}
                                >
                                    Unidade de medida:
                                </Typography>

                                <SelectControlado
                                    control={control}
                                    name="unidadeMedida"
                                    placeholder="Selecione uma opção"
                                >
                                    <MenuItem value="mg">mg</MenuItem>
                                    <MenuItem value="kg">kg</MenuItem>
                                    <MenuItem value="ml">ml</MenuItem>
                                </SelectControlado>
                            </Stack>

                        </styled.InputRow>

                        <styled.InputRow>
                            <Input
                                Icon={Asterisk}
                                required
                                placeholder="Quantidade disponível"
                                name="quantidadeEstoque"
                                label="Quantidade disponível:"
                                control={control}
                            />
                            <Input
                                mask={MASCARAS.real}
                                Icon={Asterisk}
                                required
                                placeholder="R$ 00,00"
                                name="preco"
                                label="Preço:"
                                control={control}
                            />

                        </styled.InputRow>
                        <Stack flexDirection={'row'} width={'90%'} justifyContent={'space-between'} mt={'3%'}>
                            <Button variante="ButtonGray" sx={{ width: "48%" }} tamanho="md">Cancelar</Button>
                            <Button sx={{ width: "48%" }} tamanho="md">Salvar</Button>
                        </Stack>
                    </styled.BoxInputs>

                </styled.ContainerInputs>


            </Stack>

            <Footer />
        </Container>
    );
}
