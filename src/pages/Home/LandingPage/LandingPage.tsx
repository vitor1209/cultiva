import { Box, Container, Stack } from "@mui/material";
import Typography from '@mui/joy/Typography';
import { ChevronRight } from "lucide-react";
import { Header } from "../../../components/Header/Header.tsx";
import { CarouselFullScreen } from "../../../components/Carousel/Carousel.tsx";
import * as Styled from "../LandingPage.styled.ts";
import { Button } from "../../../components/Button/Button.tsx";
import ProductCard from "../../../components/Card/Card.tsx";
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
{/* 

            <Styled.Hero>
                <Typography level="h1">Conectando você ao produtor local</Typography>
                <Typography level="body-lg">
                    Produtos frescos, naturais e direto da horta para sua casa.
                </Typography>
                <Button variante="ButtonGreen" tamanho="md" to="/Cadastro">Começar Agora</Button>
            </Styled.Hero> */}

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
                    <Typography level="h4">Produtores em Destaque</Typography>
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

            {/* <Container maxWidth={"xl"} sx={{ width: '95%', padding: '3% 0 4% 0 ', p: { xs: 2, md: 4 }, borderRadius: '25px', backgroundColor: '#d9d3d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                    <Styled.Session>

                        <Typography level="h2">Contato</Typography>
                        <Typography level="body-md">
                            Caso tenha dúvidas entre em contato em:

                        </Typography>

                        <Typography level="h1">

                            cultivahortas@gmail.com
                        </Typography>


                    </Styled.Session>

            </Container>


            <Styled.Division /> */}

            <Footer />
        </Container>
    );
}
