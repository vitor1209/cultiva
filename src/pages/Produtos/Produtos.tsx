import { Container, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import Typography from '@mui/joy/Typography';
import { MapPin, Package, ShoppingCart, Star, UserRound } from "lucide-react";
import { Header } from "../../components/Header/Header";
import SearchBar from "../../components/barSearch/barSearch";
import { Button } from "../../components/Button/Button";
import ProductCard from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";
import * as Styled from "./Produtos.styled";
import { QuantidadeSelector } from "./components/selectQuant/QuantidadeSelector";
import { InputImagem } from "../../components/Input/BoxImg/BoxImg";
import TabsProduto from "./components/tabs/tabs";

export function ProdutoDetalhePage() {

    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));

    const imgWidth = isSmall ? 19 : 40;
    const imgHeight = isSmall ? 12 : 30;

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
                        width={imgWidth}
                        height={imgHeight}
                    />
                </Styled.imagem>

                <Styled.texto>
                    <Stack spacing={0.8} width="100%" maxWidth="400px">
                        <Typography level="body-sm" sx={{ color: 'black', fontSize: '1.3rem' }} >Alface Orgânica</Typography>
                        <Typography level="body-lg" sx={{ color: "green" }}>
                            Por Sítio Verde
                        </Typography>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <MapPin color="#717182" size={20} />
                            <Typography sx={{ color: "#717182" }} level="body-lg">Campinas, SP</Typography>
                        </Stack>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <Star size={20} color="#f1c40f" />
                            <Typography level="body-lg">4.8</Typography>
                            <Typography level="body-xs" sx={{ color: "#717182" }} >
                                (128 avaliações)
                            </Typography>
                        </Stack>

                        <hr />

                        <Typography sx={{ color: "green", fontSize: '1.4rem' }} >
                            R$ 3.50
                        </Typography>

                        <Stack direction="row" spacing={1} alignItems="center">
                            <Package size={24} color="#717182" />
                            <Typography level="body-lg" sx={{ color: "#717182" }} >25 unidades disponíveis</Typography>
                        </Stack>

                        <Typography mb={2} level="body-lg" sx={{ color: "#717182" }} >
                            Data de colheita: <b>18/10/2025</b>
                        </Typography>

                        <hr />

                    </Stack>
                    <Stack mt={2} >
                        <Typography>
                            Alface orgânica cultivada sem agrotóxicos, fresca e crocante.
                        </Typography>
                        <Stack>
                            <QuantidadeSelector />
                        </Stack>
                        <Stack direction={isSmall ? 'column' : 'row'} gap={2} justifyContent={'space-between'} >
                            <Button espacamento={20} icon={ShoppingCart} tamanho="lg" variante="ButtonWhite">Adicionar ao carrinho</Button>
                            <Button espacamento={60} tamanho="lg">Comprar agora</Button>
                        </Stack>
                    </Stack>
                </Styled.texto>
            </Styled.Produto>

            <Styled.Division />
            <TabsProduto />
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

