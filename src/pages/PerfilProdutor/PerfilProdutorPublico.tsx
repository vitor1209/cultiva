import { Container, IconButton, Stack } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import SearchBar from "../../components/barSearch/barSearch";
import { UserRound, LogOut, ChevronRight } from "lucide-react";
import Typography from "@mui/joy/Typography";
import ProductCard from "../../components/Card/Card.tsx";
import { Footer } from "../../components/Footer/Footer";
import * as Styled from "../PerfilProdutor/PerfilProdutor.styled.ts";
import { HeaderProdutor } from "../../components/HeaderProdutor/HeaderProdutor.tsx";
import { useNavigate, useParams } from "react-router-dom";
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

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("usuarioLogado");
        navigate("/");
    };

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
                        <IconButton aria-label="perfil" size="large">
                            <UserRound />
                        </IconButton>
                        <IconButton aria-label="logout" size="large" onClick={handleLogout}>
                            <LogOut />
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
                    <Button variante="ButtonLinkBlack" tamanho="sm">
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
                                    "https://veja.abril.com.br/wp-content/uploads/2016/12/maconha.jpg?crop=1&resize=1212,909"
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
