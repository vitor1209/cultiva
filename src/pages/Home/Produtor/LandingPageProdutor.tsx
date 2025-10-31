import { Box, Container, IconButton, Stack } from "@mui/material";
import Typography from '@mui/joy/Typography';
import { ChevronRight, UserRound } from "lucide-react";
import { Header } from "../../../components/Header/Header.tsx";
import { CarouselFullScreen } from "../../../components/Carousel/Carousel.tsx";
import * as Styled from "../LandingPage.styled.ts";
import { Button } from "../../../components/Button/Button.tsx";
import ProductCard from "../../../components/Card/Card.tsx";
import { Footer } from "../../../components/Footer/Footer.tsx";
import SearchBar from "../../../components/barSearch/barSearch.tsx";
import CardInfo from "../../../components/cardInfo/CardInfo.tsx";

export function HomePageProdutor() {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ backgroundColor: "#fff8f0", textAlign: "center", marginTop: 8, padding: 0 }}
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
                    <Button variante="ButtonLinkBlack" tamanho="sm">Início</Button>
                    <Button variante="ButtonLinkBlack" tamanho="sm">Seus Produtos</Button>
                    <Button variante="ButtonLinkBlack" tamanho="sm">Pedidos</Button>
                    <Button variante="ButtonLinkBlack" tamanho="sm">Como Funciona</Button>
                </>
            </Header>
            <Styled.boxName>
                <Typography p={'0 3%'} level="inherit" sx={{ color: '#fff' }}>Olá, Usuário Exemplo</Typography>
                <Typography p={'0 3%'} level="inherit" sx={{ color: '#fff' }}>Gerencie seus produtos e acompanhe suas vendas</Typography>
            </Styled.boxName>

            <Styled.Division />
            <CardInfo name={"Pedidos do Mês"} acrescimo="+12%" valor={"45"} color={"azul"} tamanho={"md"} icon={ChevronRight}></CardInfo>
            <Styled.Division />

            <CarouselFullScreen>
                <Box sx={{ background: "#1976d2", height: 324 }}></Box>
                <Box sx={{ background: "#9c27b0", height: 324 }}></Box>
                <Box sx={{ background: "#2e7d32", height: 324 }}></Box>
            </CarouselFullScreen>
            <Styled.Division />

            <Styled.ContainerFull>
                <Styled.Session>
                    <h1>Conectansvj\shdpgiuhouhfiuwgf-apj\io\sefdo quem planta a quem consome</h1>
                    <p>
                        Encontre produtos frescos diretamente dos produtores da sua região. Apoie a agricultura local e tenha acesso a hortaliças de qualidade superior.
                    </p>
                    <Button
                        variante="ButtonGreen"
                        espacamento={15}
                        tamanho="md"
                        ladoIcon="direita"
                        icon={ChevronRight}
                    >
                        Saiba Mais
                    </Button>
                </Styled.Session>
            </Styled.ContainerFull>

            <Styled.Division />


            <Container maxWidth={"xl"} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="90%" alignItems='center' marginBottom={2}>
                    <Typography level="h4">Mais Vendidos</Typography>
                    <Button ladoIcon="direita" icon={ChevronRight} variante="ButtonLinkBlack" tamanho={"sm"}>Ver todos</Button>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} gap={3} flexWrap="wrap" justifyContent="space-evenly" alignItems="center" width="95%"    >
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produtor'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produtor'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produtor'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produtor'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produtor'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produtor'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produtor'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produtor'} />
                </Stack>
            </Container>

            <Styled.Division />

            <Container maxWidth={"xl"} sx={{ width: '95%', padding: '3% 0 4% 0 ', p: { xs: 2, md: 4 }, borderRadius: '25px', backgroundColor: '#d9d3d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="95%" alignItems='center' marginBottom={2}>
                    <Typography level="h4">Conferir outros Produtores</Typography>
                    <Button ladoIcon="direita" icon={ChevronRight} variante="ButtonLinkBlack" tamanho={"sm"}>Ver todos</Button>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} flexWrap="wrap" gap={2.5}>
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Sítio Verde"}
                        lugar={"Campinas, SP"}
                        avaliacao={4.8}
                        tipoCard={'Horta'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Sítio Verde"}
                        lugar={"Campinas, SP"}
                        avaliacao={4.8}
                        tipoCard={'Horta'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Sítio Verde"}
                        lugar={"Campinas, SP"}
                        avaliacao={4.8}
                        tipoCard={'Horta'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Sítio Verde"}
                        lugar={"Campinas, SP"}
                        avaliacao={4.8}
                        tipoCard={'Horta'}
                    />
                </Stack>
            </Container>
            <Styled.Division />
            <Footer />
        </Container>
    );
}
