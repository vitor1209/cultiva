import { Box, Container, Stack } from "@mui/material";
import Typography from '@mui/joy/Typography';
import { ChevronRight } from "lucide-react";
import { CarouselFullScreen } from "../../../components/Carousel/Carousel.tsx";
import * as Styled from "../LandingPage.styled.ts";
import { Button } from "../../../components/Button/Button.tsx";
import { Footer } from "../../../components/Footer/Footer.tsx";
import { useState } from "react";
import ProductCard from "../../../components/Card/Card.tsx";
import { useGetProdutosGeral } from "../../../controllers/produto.controller.ts";
import { useGetHorta } from "../../../controllers/horta.controller.ts";
import banner1 from "../../../assets/images/banner/3.svg"
import banner2 from "../../../assets/images/banner/4.svg"
import banner3 from "../../../assets/images/banner/5.svg"


export function HomePage() {
    const [mostrarTodos, ] = useState(false);
    const [mostrarHortas, ] = useState(false);

    const { data: produtos, isLoading: produtosLoading, error: produtosError } = useGetProdutosGeral();
    const { data: hortas, isLoading: hortasLoading, error: hortasError } = useGetHorta();

    const produtosExibidos = mostrarTodos ? produtos : produtos?.slice(0, 8);
    const hortasExibidas = mostrarHortas ? hortas : hortas?.slice(0, 8);

    return (
        <Container disableGutters maxWidth={false} sx={{ textAlign: "center", padding: 0 }}>
            <Styled.HeroContainer>
                <Stack
                    direction={{ xs: "column-reverse", md: "row" }}
                    spacing={{ xs: 6, md: 10 }}
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ width: "100%", maxWidth: 1200, mx: "auto" }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            textAlign: "left",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            maxWidth: 520,
                            width: "100%",
                        }}
                    >
                        <Typography
                            level="h1"
                            sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "3rem" }, color: "#1B3A28", lineHeight: 1.2 }}
                            fontFamily={'"Anybody", "Inter", sans-serif'}
                        >
                            Conectando você ao Produtor Local
                        </Typography>

                        <Typography level="body-lg" sx={{ mt: 2, color: "#3A4D3D", fontSize: "1.15rem" }}>
                            Produtos frescos, naturais e direto da terra para sua casa, com qualidade e transparência.
                        </Typography>

                        <Stack direction="row" spacing={3} sx={{ mt: 6 }}>
                            <Button variante="ButtonGreen" tamanho="xl" to="/Login" espacamento={10}>Começar Agora</Button>
                            <Button variante="ButtonLinkBlack" to="/Sobre" tamanho="xl">
                                Saiba Mais
                            </Button>
                        </Stack>

                        <Stack direction="row" gap={4} justifyContent="space-evenly" flexWrap="wrap" mt={8}>
                            <Stack alignItems="center" spacing={1}>
                                <img src="/natural.png" width={80} height={80} />
                                <Typography level="body-sm">Natural</Typography>
                            </Stack>
                            <Stack alignItems="center" spacing={1}>
                                <img src="/horta.png" width={80} height={80} />
                                <Typography level="body-sm">Direto da Horta</Typography>
                            </Stack>
                            <Stack alignItems="center" spacing={1}>
                                <img src="/entrega.png" width={80} height={80} />
                                <Typography level="body-sm">Entrega Segura</Typography>
                            </Stack>
                        </Stack>
                    </Box>

                    <Box
                        sx={{
                            width: { xs: "100%", md: 600 },
                            height: { xs: 240, md: 350 },
                            backgroundImage: "url('/logog.png')",
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}
                    />
                </Stack>
            </Styled.HeroContainer>

            <Styled.Division id="inicio" />
            <CarouselFullScreen tamanho="full">
                <Box component="img" src={banner1} sx={{ width: "100%", objectFit: "cover" }} />
                <Box component="img" src={banner2} sx={{ width: "100%", objectFit: "cover" }} />
                <Box component="img" src={banner3} sx={{ width: "100%", objectFit: "cover" }} />
            </CarouselFullScreen>
            <Styled.Division />

            {/* Produtos */}
            <Container id="produtos" maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Stack direction="row" justifyContent="space-between" width="90%" alignItems="center" marginBottom={2}>
                    <Typography level="h4">Mais Vendidos</Typography>
                    <Button ladoIcon="direita" icon={ChevronRight} variante="ButtonLinkBlack" tamanho="sm" to="/Login">
                        Ver todos
                    </Button>
                </Stack>

                <Stack direction={{ xs: "column", sm: "row" }} gap={4} flexWrap="wrap" justifyContent="space-evenly" alignItems="center" width="95%">
                    {produtosLoading && <Typography>Carregando produtos...</Typography>}
                    {produtosError && <Typography>Erro ao carregar produtos</Typography>}
                    {produtosExibidos && produtosExibidos.length > 0 ? (
                        produtosExibidos.map(produto => (
                            <ProductCard
                                key={produto.id}
                                id={produto.id}
                                image={produto.imagem ?? "https://veja.abril.com.br/wp-content/uploads/2016/12/maconha.jpg?crop=1&resize=1212,909"}
                                name={produto.nome}
                                lugar={produto.nome}
                                descricao={produto.descricao}
                                preco={produto.preco_unit.toFixed(2)}
                                tipoCard="semLogin"
                            />
                        ))
                    ) : (!produtosLoading && <Typography>Nenhum produto cadastrado</Typography>)}
                </Stack>
            </Container>

            <Styled.Division />

            <Container
                maxWidth={"xl"}
                sx={{
                    width: '95%',
                    padding: '3% 0 4% 0',
                    p: { xs: 2, md: 4 },
                    borderRadius: '25px',
                    backgroundColor: '#d9d3d0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Stack direction="row" justifyContent='space-between' width="95%" alignItems='center' marginBottom={2}>
                    <Typography level="h4">Produtores em Destaque</Typography>

                    <Button ladoIcon="direita" icon={ChevronRight} variante="ButtonLinkBlack" to="/Login" tamanho={"sm"}>Ver todos</Button>
                </Stack>

                <Stack direction={{ xs: "column", sm: "row" }} flexWrap="wrap" gap={2.5}>
                    {hortasLoading && <Typography>Carregando hortas...</Typography>}
                    {hortasError && <Typography>Erro ao carregar hortas</Typography>}

                    {hortasExibidas && hortasExibidas.length > 0 ? (
                        hortasExibidas.map(horta =>
                            <ProductCard
                                key={horta.id}
                                id={horta.id}
                                image={horta.usuario.banner ?? "https://veja.abril.com.br/wp-content/uploads/2016/12/maconha.jpg?crop=1&resize=1212,909"}
                                name={horta.nome}               
                                lugar={horta.usuario.email}       
                                descricao={horta.usuario.nome}      
                                tipoCard="Horta"
                            />
                        )
                    ) : (
                        !hortasLoading && <Typography>Nenhum produtor cadastrado</Typography>
                    )}
                </Stack>
            </Container>

            <Styled.Division />


            {/* CTA */}
            <Styled.CTABox>
                <Typography level="h2" fontFamily={'"Anybody", "Inter", sans-serif'}>Pronto para apoiar produtores locais?</Typography>
                <Button to="/Login" variante="ButtonGreen" espacamento={14} tamanho="md">Login</Button>
            </Styled.CTABox>

            <Styled.Division />
            <Footer />
        </Container>
    );
}
