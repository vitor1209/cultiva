import { Container, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import Typography from '@mui/joy/Typography';
import { CheckCircle, Package, ShoppingCart, UserRound } from "lucide-react";
import * as Styled from "./Produtos.styled";
import { Header } from "../../../components/Header/Header";
import SearchBar from "../../../components/barSearch/barSearch";
import { Button } from "../../../components/Button/Button";
import { Footer } from "../../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useGetProdutosGeral } from "../../../controllers/produto.controller";
import { useGetHorta } from "../../../controllers/horta.controller";
import ProductCard from "../../../components/Card/Card";
import { useAddCarrinho } from "../../carrinho/carrinho.hook";
import { PadraoModal } from "../../../components/Modal/Modal";

export function ProdutoDetalhePage() {

    const { handleAdd, modalMessage, modalOpen, setModalOpen } = useAddCarrinho();

    const { id } = useParams();
    const produtoId = Number(id);

    const handleAdicionarCarrinho = () => {
        handleAdd({
            produto_id: produtoId,
            quantidade: 1,
        });
    };

    const { data: produtos, isLoading, error } = useGetProdutosGeral();

    const produto = produtos?.find(p => p.id === produtoId);

    const { data: hortas } = useGetHorta();

    const horta = hortas?.find((h) => h.id === produto?.fk_horta_id);

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));

    if (isLoading) return <p>Carregando...</p>;
    if (error) return <p>Erro ao carregar produto.</p>;
    if (!produto) return <p>Produto não encontrado.</p>;

    const formatDate = (datetime?: string | null) => {
        if (!datetime) return "Não informado";

        const date = new Date(datetime);

        if (isNaN(date.getTime())) return "Data inválida";

        return date.toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    };

    const produtosSemelhantes = produtos
        ?.filter(p => p.id !== produtoId)   // remove o produto atual
        ?.slice(0, 4);

    return (

        <>
            <Container
                disableGutters
                maxWidth={false}
                sx={{ backgroundColor: "#fff8f0", textAlign: "center", marginTop: 8, padding: 0 }}
            >
                <Header
                    end={
                        <Stack direction={"row"} gap={3}>
                            <IconButton size="large">
                                <ShoppingCart />
                            </IconButton>
                            <IconButton size="large">
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
                        <Button variante="ButtonLinkBlack" tamanho="sm">Início</Button>
                        <Button variante="ButtonLinkBlack" tamanho="sm">Produtores</Button>
                        <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">Produtos</Button>
                        <Button variante="ButtonLinkBlack" tamanho="sm">Como Funciona</Button>
                    </>
                </Header>

                <Styled.Division />

                <Styled.Produto>
                    <Styled.imagem>
                        <img
                            src={produto.imagem || "https://via.placeholder.com/400"}
                            alt={produto.nome}
                            style={{ width: "100%", borderRadius: "10px" }}
                        />
                    </Styled.imagem>

                    <Styled.texto>
                        <Stack spacing={0.8} width="100%" maxWidth="400px">

                            {/* NOME */}
                            <Typography level="body-sm" sx={{ color: 'black', fontSize: '1.3rem' }}>
                                {produto.nome}
                            </Typography>



                            {/* HORTA / PRODUTOR */}
                            <Typography level="body-lg" sx={{ color: "green" }}>
                                Por {horta?.nome ?? "Produtor Desconhecido"}
                            </Typography>

                            <hr />

                            {/* PREÇO */}
                            <Typography sx={{ color: "green", fontSize: '1.4rem' }}>
                                R$ {produto.preco_unit.toFixed(2)}
                            </Typography>

                            {/* ESTOQUE */}
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Package size={24} color="#717182" />
                                <Typography level="body-lg" sx={{ color: "#717182" }}>
                                    {produto.quantidade_estoque} unidades disponíveis
                                </Typography>
                            </Stack>

                            {/* VALIDADE / COLHEITA */}
                            <Typography mb={2} level="body-lg" sx={{ color: "#717182" }}>
                                Validade: <b>{formatDate(produto.validade) ?? "Não informado"}</b>
                            </Typography>

                            <hr />
                        </Stack>

                        {/* DESCRIÇÃO */}
                        <Stack mt={2}>
                            <Typography>
                                {produto.descricao ?? "Produto sem descrição detalhada."}
                            </Typography>

                            {/* BOTÕES */}
                            <Stack mt={4} direction={isSmall ? "column" : "row"} gap={2} justifyContent="space-between">
                                <Button
                                    espacamento={20}
                                    icon={ShoppingCart}
                                    tamanho="lg"
                                    variante="ButtonWhite"
                                    onClick={handleAdicionarCarrinho}
                                    to="/HomeConsumidor"
                                >
                                    Adicionar ao carrinho
                                </Button>

                                <Button
                                    onClick={handleAdicionarCarrinho}
                                    to="/FinalizarCarrinho"
                                    espacamento={60} tamanho="lg">
                                    Comprar agora
                                </Button>
                            </Stack>
                        </Stack>
                    </Styled.texto>
                </Styled.Produto>

                <Styled.Division />
                {/* <TabsProduto /> */}
                <Styled.Division />

                <Container
                    maxWidth={"xl"}
                    sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        width="90%"
                        alignItems="center"
                        marginBottom={2}
                    >
                        <Typography level="body-lg">Mais Produtos</Typography>
                    </Stack>

                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        gap={3}
                        flexWrap="wrap"
                        justifyContent="space-evenly"
                        alignItems="center"
                        width="100%"
                    >

                        <Stack direction={{ xs: "column", sm: "row" }} gap={4} flexWrap="wrap" justifyContent="space-evenly" alignItems="center" width="95%">
                            {produtosSemelhantes && produtosSemelhantes.length > 0 ? (
                                produtosSemelhantes.map(prod => (
                                    <ProductCard
                                        key={prod.id}
                                        id={prod.id}
                                        image={prod.imagem ?? "https://via.placeholder.com/300"}
                                        name={prod.nome}
                                        lugar={hortas?.find(h => h.id === prod.fk_horta_id)?.nome ?? "Produtor"}
                                        descricao={prod.descricao}
                                        preco={prod.preco_unit.toFixed(2)}
                                        tipoCard="semLogin"
                                    />
                                ))
                            ) : (
                                <Typography>Nenhum produto semelhante disponível</Typography>
                            )}

                        </Stack>
                    </Stack>
                </Container>

                <Styled.Division />
                <Footer />
            </Container>

            <PadraoModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Carrinho"
                description={modalMessage ?? ""}
                buttonText="Concluir"
                to="/HomeConsumidor"
                Icon={CheckCircle}
            />
        </>

    );
}
