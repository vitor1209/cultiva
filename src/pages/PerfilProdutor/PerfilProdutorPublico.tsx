import { Container, IconButton, Stack } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import SearchBar from "../../components/barSearch/barSearch";
import { UserRound, ChevronRight } from "lucide-react";
import Typography from "@mui/joy/Typography";
import ProductCard from "../../components/Card/Card.tsx";
import { Footer } from "../../components/Footer/Footer";
import * as Styled from "../PerfilProdutor/PerfilProdutor.styled.ts";
import { HeaderProdutor } from "../../components/HeaderProdutor/HeaderProdutor.tsx";
import { useParams } from "react-router";
import { useGetHorta } from "../../controllers/horta.controller.ts";
import { useGetProdutos } from "../../controllers/produto.controller.ts";
import { useState } from "react";

export const PerfilProdutorPage = () => {
    const { hortaId } = useParams();

    const { data: hortas } = useGetHorta();

    const horta = hortas?.find((h) => h.id === Number(hortaId));

    const {
        data: produtos,
        isLoading,
        error,
    } = useGetProdutos(Number(hortaId));

    const [mostrarTodos, setMostrarTodos] = useState(false);

    const produtosExibidos = mostrarTodos
        ? produtos
        : produtos?.slice(0, 8);



    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                backgroundColor: "#fff8f0",
                textAlign: "left",
                marginTop: 12,
                padding: 0,
            }}
        >
            <Header
                end={
                    <Stack direction="row" spacing={1}>
                        <IconButton aria-label="perfil" size="large" href="/DadosConsumidor">
                            <UserRound />
                        </IconButton>
             
                    </Stack>
                }
                start={
                    <Stack flex={1} minWidth="250px" maxWidth="400px">
                        <SearchBar />
                    </Stack>
                }
            >
                <>
        <Button variante="ButtonLinkBlack" to="/HomeProdutor" tamanho="sm">Início</Button>
        <Button variante="ButtonLinkBlack" to="/HomeProdutor#produtos" tamanho="sm">Seus Produtos</Button>
        <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">Pedidos</Button>
        <Button variante="ButtonLinkBlack" to="/Sobre" tamanho="sm">Sobre</Button>
                </>
            </Header>

            <HeaderProdutor
                nome={horta?.nome ?? ""}
                endereco={horta?.usuario?.email ?? ""}
                telefone={`${horta?.usuario?.telefone ?? ""}`}
                logo={horta?.usuario?.banner ?? ""}
                descricao={horta?.descricao ?? ""}
            />


            <Container
                id="produtos"
                maxWidth={"xl"}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    width="90%"
                    marginBottom={2}
                >
                    <Typography level="body-lg">Seus Produtos</Typography>

                    <Button
                        ladoIcon="direita"
                        icon={ChevronRight}
                        variante="ButtonLinkBlack"
                        tamanho="sm"
                        onClick={() => setMostrarTodos(true)}
                    >
                        Ver todos
                    </Button>
                </Stack>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    gap={3}
                    flexWrap="wrap"
                    justifyContent="space-evenly"
                    width="95%"
                >
                    {isLoading && <Typography>Carregando produtos...</Typography>}
                    {error && <Typography>Erro ao carregar produtos</Typography>}

                    {produtosExibidos && produtosExibidos.length > 0 ? (
                        produtosExibidos.map((produto) => (
                            <ProductCard
                                key={produto.id}
                                id={produto.id}
                                image={
                                    produto.imagem ??
                                    "data:image/jpeg;base64,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"
                                }
                                name={produto.nome}
                                lugar={horta?.usuario?.nome ?? ""}
                                descricao={produto.descricao}
                                preco={produto.preco_unit.toFixed(2)}
                                tipoCard="Produto"
                            />
                        ))
                    ) : (
                        !isLoading && <Typography>Nenhum produto cadastrado</Typography>
                    )}
                </Stack>
            </Container>

            <Styled.Division />
            <Footer />
        </Container>
    );
};
