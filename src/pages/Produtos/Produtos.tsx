import { Container, IconButton, Stack } from "@mui/material";
import Typography from '@mui/joy/Typography';
import { MapPin, Package, ShoppingCart, Star, UserRound } from "lucide-react";
import { Header } from "../../components/Header/Header";
import SearchBar from "../../components/barSearch/barSearch";
import { Button } from "../../components/Button/Button";
import ProductCard from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";
import * as Styled from "./Produtos.styled";
import { QuantidadeSelector } from "./QuantidadeSelector";
import { InputImagem } from "../../components/Input/BoxImg/BoxImg";

export function ProdutoDetalhePage() {

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ backgroundColor: "#fff8f0", textAlign: "center", marginTop: 8, padding: 0 }}
        >
            <Header
                end={
                    <Stack direction={'row'} gap={3}>
                        <IconButton aria-label="delete" size="large">
                            <ShoppingCart />
                        </IconButton>
                        <IconButton aria-label="delete" size="large">
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
                    <InputImagem
                        name="fotoProduto"
                        defaultImage="https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"
                        readOnly
                        width={40}
                        height={30}
                    />
                </Styled.imagem>

                <Styled.texto>
                    <Stack spacing={1.5} width="100%" maxWidth="400px">
                        <Typography level="title-md">Alface Orgânica</Typography>
                        <Typography level="body-sm" sx={{ color: "green" }}>
                            Por Sítio Verde
                        </Typography>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <MapPin size={16} />
                            <Typography level="body-sm">Campinas, SP</Typography>
                        </Stack>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <Star size={16} color="#f1c40f" />
                            <Typography level="body-sm">4.8</Typography>
                            <Typography level="body-xs" sx={{ color: "gray" }}>
                                (128 avaliações)
                            </Typography>
                        </Stack>

                        <hr />

                        <Typography level="title-lg" sx={{ color: "green", fontWeight: "bold" }}>
                            R$ 3.50
                        </Typography>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <Package size={16} />
                            <Typography level="body-sm">25 unidades disponíveis</Typography>
                        </Stack>

                        <Typography level="body-sm">
                            Data de colheita: <b>18/10/2025</b>
                        </Typography>

                        <hr />

                    </Stack>
                    <Stack>
                        <Typography>
                            Alface orgânica cultivada sem agrotóxicos, fresca e crocante.
                        </Typography>
                        <Stack>
                            <QuantidadeSelector />
                        </Stack>
                        <Stack >
                            <Button tamanho="md">Comprar agora</Button>
                            <Button icon={ShoppingCart} tamanho="md" variante="ButtonWhite">Adicionar ao carrinho</Button>
                        </Stack>
                    </Stack>
                </Styled.texto>
            </Styled.Produto>

            <Styled.Division />

            <Container maxWidth={"xl"} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="90%" alignItems='center' marginBottom={2}>
                    <Typography level="body-lg">Produtos Semelhantes</Typography>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} gap={3} flexWrap="wrap" justifyContent="space-evenly" alignItems="center" width="95%"    >

                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produto'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produto'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produto'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produto'}
                    />

                </Stack>
            </Container>

            <Styled.Division />

            <Footer />
        </Container>
    );
}

