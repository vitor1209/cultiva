import { Container, IconButton, Stack, Box, Link} from "@mui/material";
import { ShoppingCart, UserRound, ChevronRight } from "lucide-react";
import { Header } from "../../../components/Header/Header.tsx";
import { Footer } from "../../../components/Footer/Footer.tsx";
import SearchBar from "../../../components/barSearch/barSearch.tsx";
import { Button } from "../../../components/Button/Button.tsx";
import Typography from '@mui/joy/Typography';
import { CarouselFullScreen } from "../../../components/Carousel/Carousel.tsx";
import * as Styled from "../LandingPage.styled.ts";
import ProductCard from "../../../components/Card/Card.tsx";
import { CardPedidos } from "../../../components/CardPedidos/CardPedidos.tsx";


export function HomeConsumidorPage(){
    
    return(
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

            <Box
                sx={{
                width: "100%",
                background: " #00a63e",
                color: "white",
                padding: " 1.5% 3% 1.5% 3% ",                
                textAlign: "Left",
                
                }}
            >
                <Typography sx={{color: "white"}} fontSize={15}>Olá, Usuário Exemplo</Typography>
                <Typography sx={{color: "white"}}  fontSize={15} mt={0}>
                    Veja as hortaliças frescas disponíveis na sua região
                </Typography>
                <Typography sx={{color: "white"}}  fontSize={15} mt={1}>Baseado no seu CEP:</Typography>

                <Box mt={0} display="flex" alignItems="center" gap={10}>
                    <Typography sx={{color: "white"}}  fontSize={14}>13054-230</Typography>
                    <Link href="/nâoExisteAinda:(" underline="hover" color="#a0ff97ff" fontSize={14}>Alterar</Link>
                </Box>
            </Box>

            <Styled.Division />

            <Stack justifyContent={'center'} alignItems={'center'}>
                <CarouselFullScreen tamanho="xl"  >
                    <Box sx={{ background: "#1976d2", height: { xs: '10rem', sm: '20.25rem' }, borderRadius: '30px' }}></Box>
                    <Box sx={{ background: "#9c27b0", height: { xs: '10rem', sm: '20.25rem' }, borderRadius: '30px' }}></Box>
                    <Box sx={{ background: "#2e7d32", height: { xs: '10rem', sm: '20.25rem' }, borderRadius: '30px' }}></Box>
                </CarouselFullScreen>
            </Stack>
       

            <Styled.Division />

            {/* <FilterBar onFilterChange={handleFilterChange} /> */}

            <Container maxWidth={"xl"} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="90%" alignItems='center' marginBottom={2}>
                    <Typography level="h4">Para você</Typography>
                    <Button ladoIcon="direita" icon={ChevronRight} variante="ButtonLinkBlack" tamanho={"sm"}>Ver todos</Button>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} gap={2} flexWrap="wrap" justifyContent="space-evenly" alignItems="center" width="95%"    >
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

            <Container maxWidth={"xl"} sx={{ width: '95%', padding: '3% 0 4% 0 ', p: { xs: 2, md: 4 }, borderRadius: '25px', backgroundColor: '#d9d3d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="95%" alignItems='center' marginBottom={2}>
                    <Typography level="body-lg">Produtores em Destaque</Typography>
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

            <Container maxWidth={"xl"} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="100%" alignItems='center' marginBottom={2}>
                    <Typography level="h4">Para você</Typography>
                    <Button ladoIcon="direita" icon={ChevronRight} variante="ButtonLinkBlack" tamanho={"sm"}>Ver todos</Button>
                </Stack>

                <Box
                    sx={{
                    display: "flex",
                    gap: 3,
                    flexWrap: "wrap",
                    textAlign: "left"                    
                    }}
                >
                    <CardPedidos
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUDtoK4TI2r2dm0VcG6wJa8A1MEV1rXAYVCg&s"
                    nome="Horta do Chico"
                    data="19/10/2025"
                    status="Disponível para retirada"
                    />

                    <CardPedidos
                    image="https://ibassets.com.br/ib.image.general/e5c40f457a8841b0892f561ade78aa1c.png"
                    nome="Casa Horta"
                    data="19/10/2025"
                    status="Preparando"
                    />

                    <CardPedidos
                    image="https://rotarysantosboqueirao.com.br/wp-content/uploads/2019/10/HORTA-COMUNIT%C3%81RIA-3-2.jpg"
                    nome="Bons Frutos"
                    data="19/10/2025"
                    status="Enviado"
                    />

                    <CardPedidos
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHvw-wkffWPmdR-AcPX8pQENZm6vkSuNX6uQ&s"
                    nome="da Horta pra Porta"
                    data="19/10/2025"
                    status="Finalizado"
                    />
                </Box>
            </Container>    
            

            <Stack p={"3% 0"} />
            <Footer />
        </Container>
    );
}
    
