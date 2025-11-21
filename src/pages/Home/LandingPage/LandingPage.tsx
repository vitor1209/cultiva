import { Box, Container, Stack } from "@mui/material";
import Typography from '@mui/joy/Typography';
import { ChevronRight } from "lucide-react";
import { Header } from "../../../components/Header/Header.tsx";
import { CarouselFullScreen } from "../../../components/Carousel/Carousel.tsx";
import * as Styled from "../LandingPage.styled.ts";
import { Button } from "../../../components/Button/Button.tsx";
import { Footer } from "../../../components/Footer/Footer.tsx";


const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
        const yOffset = -100;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};

export function HomePage() {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ backgroundColor: "#fff8f0", textAlign: "center", marginTop: 8, padding: 0 }}
        >
            <Header
                end={
                    <Button
                        to="/Login"
                        variante="ButtonGreen"
                        espacamento={14}
                        tamanho="md"
                    >
                        Login
                    </Button>
                }
            >
                <>
                    <Button variante="ButtonLinkBlack" onClick={() => scrollToSection('inicio')} tamanho="sm"
                    >Início</Button>


                    <Button to="" variante="ButtonLinkBlack" onClick={() => scrollToSection('sobre')} tamanho="sm">Sobre</Button>
                </>
            </Header>

            <Styled.HeroContainer>
                <Stack
                    direction={{ xs: "column-reverse", md: "row" }}
                    spacing={{ xs: 6, md: 10 }}
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ width: "100%", maxWidth: 1200, mx: "auto" }}
                >
                    {/* ===== COLUNA TEXTO ===== */}
                    <Box
                        sx={{
                            flex: 1,
                            textAlign: "left",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            maxWidth: 520, // Mantém tudo alinhado e bonito
                            width: "100%",
                        }}
                    >
                        <Typography
                            level="h1"
                            sx={{
                                fontWeight: 700,
                                fontSize: { xs: "2rem", md: "3rem" },
                                color: "#1B3A28",
                                lineHeight: 1.2,
                            }}
                        >
                            Conectando você ao Produtor Local
                        </Typography>

                        <Typography
                            level="body-lg"
                            sx={{
                                mt: 2,
                                color: "#3A4D3D",
                                fontSize: "1.15rem",
                            }}
                        >
                            Produtos frescos, naturais e direto da terra para sua casa,
                            com qualidade e transparência.
                        </Typography>

                        <Stack
                            direction="row"
                            spacing={3}
                            sx={{ mt: 6 }}
                        >
                            <Button variante="ButtonGreen" tamanho="xl" to="/Cadastro" espacamento={14}>
                                Começar Agora
                            </Button>

                            <Button variante="ButtonLinkBlack" tamanho="xl" to="/Sobre">
                                Veja Como Funciona
                            </Button>
                        </Stack>

                        {/* ÍCONES ALINHADOS */}
                        <Stack
                        direction={"row"}
                        gap={4}
                        justifyContent={"space-evenly"}
                        flexWrap={"wrap"}
                        mt={8}
                        >
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



            <Styled.Division />
            <CarouselFullScreen tamanho={"full"}>
                <Box sx={{ background: "#1976d2", height: 324 }}></Box>
                <Box sx={{ background: "#9c27b0", height: 324 }}></Box>
                <Box sx={{ background: "#2e7d32", height: 324 }}></Box>
            </CarouselFullScreen>
            <Styled.Division />




            <Container id="inicio" maxWidth={"xl"} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="90%" alignItems='center' marginBottom={2}>
                    <Typography level="h4">Mais Vendidos</Typography>
                    <Button ladoIcon="direita" icon={ChevronRight} variante="ButtonLinkBlack" tamanho={"sm"}>Ver todos</Button>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} gap={2} flexWrap="wrap" justifyContent="space-evenly" alignItems="center" width="95%"    >
                    
                </Stack>
            </Container>

            <Styled.Division />

            <Container maxWidth={"xl"} sx={{ width: '95%', padding: '3% 0 4% 0 ', p: { xs: 2, md: 4 }, borderRadius: '25px', backgroundColor: '#d9d3d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="95%" alignItems='center' marginBottom={2}>
                    <Typography level="h4">Produtores em Destaque</Typography>
                    <Button ladoIcon="direita" icon={ChevronRight} variante="ButtonLinkBlack" tamanho={"sm"}>Ver todos</Button>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} flexWrap="wrap" gap={2.5}>

                </Stack>
            </Container>


            <Styled.Division />


            <Styled.ContainerFull id="sobre">
                <Styled.Session>

                    <Typography level="h2">Sobre Cultiva+</Typography>
                    <Typography level="body-md">
                        O Cultiva+ é uma plataforma dedicada a conectar pequenos produtores locais a consumidores que buscam produtos naturais, frescos e de qualidade. Nosso objetivo é facilitar o comércio direto, promovendo uma relação mais próxima entre quem produz e quem consome, incentivando hábitos de consumo sustentáveis e conscientes.

                    </Typography>

                    <Typography level="body-md">

                        Com o Cultiva+, os consumidores podem navegar facilmente pelo catálogo de produtos, visualizar detalhes como fotos, preço, validade, adicionar itens ao carrinho e finalizar suas compras de forma prática.
                    </Typography>

                    <Typography level="body-md">

                        Para os produtores, o Cultiva+ oferece um painel completo de gestão, permitindo cadastrar e gerenciar produtos. A plataforma proporciona mais praticidade e eficiência, tornando o processo de venda mais lucrativo e organizado.

                        Nosso compromisso é criar uma comunidade que valoriza a produção local, a transparência e o consumo consciente, conectando pessoas e fortalecendo a economia sustentável.
                    </Typography>

                </Styled.Session>
            </Styled.ContainerFull>
            <Styled.Division />

            <Styled.CTABox>
                <Typography level="h2">Pronto para apoiar produtores locais?</Typography>
                <Button
                    to="/Login"
                    variante="ButtonGreen"
                    espacamento={14}
                    tamanho="md"
                >
                    Login
                </Button>

            </Styled.CTABox>

            <Styled.Division />



            <Footer />
        </Container>
    );
}
