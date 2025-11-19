import { Box, Container, IconButton, Stack } from "@mui/material";
import Typography from '@mui/joy/Typography';
import { ChevronRight, UserRound, ShoppingBag, TrendingUp, Package, Star, Plus, ChartColumn } from "lucide-react";
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
                    <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">Pedidos</Button>
                    <Button variante="ButtonLinkBlack" tamanho="sm">Como Funciona</Button>
                </>
            </Header>
            <Styled.boxName>
                <Typography p={'0 3%'} level="inherit" sx={{ color: '#fff' }}>Olá, Usuário Exemplo</Typography>
                <Typography p={'0 3%'} level="inherit" sx={{ color: '#fff' }}>Gerencie seus produtos e acompanhe suas vendas</Typography>
            </Styled.boxName>

            <Styled.Division />

            <Container maxWidth={"xl"} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="94%" alignItems='center' marginBottom={2}>
                    <Typography level="body-lg">Resumo de desempenho</Typography>
                </Stack>

                <Stack justifyContent={'space-evenly'} direction={{ xs: "column", sm: "row" }} gap={3} p={'0 3%'}>

                    <CardInfo name={"Pedidos do Mês"} acrescimo="+12%" valor={"45"} color={"blue"} tamanho={"lg"} icon={ShoppingBag}></CardInfo>
                    <CardInfo name={"Receita Total"} acrescimo="+8%" valor={"R$ 3.240"} color={"green"} tamanho={"lg"} icon={TrendingUp}></CardInfo>
                    <CardInfo name={"Produtos Ativos"} acrescimo="+2" valor={"12"} color={"purple"} tamanho={"lg"} icon={Package}></CardInfo>
                    <CardInfo name={"Avaliação Média"} acrescimo="+0.2" valor={"4.8"} color={"orange"} tamanho={"lg"} icon={Star}></CardInfo>

                </Stack>
            </Container>

            <Styled.Division />

            <Stack justifyContent={'center'} alignItems={'center'}>
                <CarouselFullScreen tamanho="xl"  >
                    <Box sx={{ background: "#1976d2", height: { xs: '10rem', sm: '20.25rem' }, borderRadius: '30px' }}></Box>
                    <Box sx={{ background: "#9c27b0", height: { xs: '10rem', sm: '20.25rem' }, borderRadius: '30px' }}></Box>
                    <Box sx={{ background: "#2e7d32", height: { xs: '10rem', sm: '20.25rem' }, borderRadius: '30px' }}></Box>
                </CarouselFullScreen>
            </Stack>

            <Styled.Division />

            <Container maxWidth={"xl"} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="94%" alignItems='center' marginBottom={2}>
                    <Typography level="body-lg">Suas Ações Rápidas</Typography>
                </Stack>
                <Stack justifyContent={'space-evenly'} direction={{ xs: "column", sm: "row" }} gap={3} p={'0 4.5%'} >

                    <CardInfo to="/Cadastrar" name={"Cadastrar Produto"} valor={"Adicione novos produtos"} color={"blue"} tamanho={"md"} icon={Plus}></CardInfo>
                    <CardInfo to="/PerfilProdutor" name={"Meus Produtos"} valor={"Gerenciar produtos"} color={"green"} tamanho={"md"} icon={Package}></CardInfo>
                    <CardInfo name={"Pedidos Recebidos"} valor={"Ver novos pedidos"} color={"purple"} tamanho={"md"} icon={ShoppingBag}></CardInfo>
                    <CardInfo name={"Relatórios"} valor={"Análise de vendas"} color={"orange"} tamanho={"md"} icon={ChartColumn}></CardInfo>

                </Stack>
            </Container>

            <Styled.Division />


            <Container maxWidth={"xl"} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="90%" alignItems='center' marginBottom={2}>
                    <Typography level="body-lg">Seus Produtos</Typography>
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
                    <Typography level="body-lg">Conferir outros Produtores</Typography>
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

