import { Box, Container, Stack } from "@mui/material";
import Typography from '@mui/joy/Typography';
import { ChevronRight } from "lucide-react";
import { Header } from "../../components/Header/Header";
import { CarouselFullScreen } from "../../components/Carousel/Carousel";
import * as Styled from "./HomePage.styled.ts";
import { Button } from "../../components/Button/Button";
import ProductCard from "../../components/Card/Card";

export function HomePage() {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ backgroundColor: "#fff8f0", textAlign: "center", marginTop: 8, padding: 0 }}
        >
            <Header />
            <Styled.Division />
            <CarouselFullScreen>
                <Box sx={{ background: "#1976d2", height: 324 }}></Box>
                <Box sx={{ background: "#9c27b0", height: 324 }}></Box>
                <Box sx={{ background: "#2e7d32", height: 324 }}></Box>
            </CarouselFullScreen>
            <Styled.Division />

            <Styled.ContainerFull>
                <Styled.Session>
                    <h1>Conectando quem planta com quem consome</h1>
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
                    <Typography level="body-lg">Mais Vendidos</Typography>
                    <Button ladoIcon="direita" icon={ChevronRight} variante="ButtonLinkBlack" tamanho={"sm"}>Ver todos</Button>
                </Stack>

                <Stack direction="row" justifyContent="space-evenly" alignItems="center" width="95%"    >

                    <ProductCard
                        image={"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"}
                        name={"Alface Orgânica"}
                        horta={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={3.50} />
                    <ProductCard
                        image={"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"}
                        name={"Alface Orgânica"}
                        horta={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={3.50} />
                    <ProductCard
                        image={"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"}
                        name={"Alface Orgânica"}
                        horta={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={3.50} />
                    <ProductCard
                        image={"https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"}
                        name={"Alface Orgânica"}
                        horta={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={3.50} />
                </Stack>
            </Container>
            <Styled.Division />

        </Container>
    );
}
