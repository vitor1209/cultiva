import { Container, IconButton, Stack, Box } from "@mui/material";
import {  UserRound, ChevronRight } from "lucide-react";
import { Header } from "../../../components/Header/Header.tsx";
import { Footer } from "../../../components/Footer/Footer.tsx";
import SearchBar from "../../../components/barSearch/barSearch.tsx";
import { Button } from "../../../components/Button/Button.tsx";
import Typography from '@mui/joy/Typography';
import { CarouselFullScreen } from "../../../components/Carousel/Carousel.tsx";
import * as Styled from "../LandingPage.styled.ts";
import { useGetProdutosGeral } from "../../../controllers/produto.controller.ts";
import { useEffect, useState } from "react";
import ProductCard from "../../../components/Card/Card.tsx";
import { CarrinhoButton } from "../../carrinho/carrinho.hook.tsx";
import banner1 from "../../../assets/images/banner/3.svg"
import banner2 from "../../../assets/images/banner/4.svg"
import banner3 from "../../../assets/images/banner/5.svg"
import { useLocation } from "react-router"
import { useGetHorta } from "../../../controllers/horta.controller.ts";

const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
        const yOffset = -100;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};

export function HomeConsumidorPage() {

    const location = useLocation();
    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);

            if (element) {
                const yOffset = -100; 
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });
            }
        }
    }, [location]);


     const [mostrarTodos, setMostrarTodos] = useState(false);
        const [mostrarHortas, setMostrarHortas] = useState(false);
        const { data: produtos, isLoading, error } = useGetProdutosGeral();
        const { data: hortas, isLoading: hortasLoading, error: hortasError } = useGetHorta();
        const produtosExibidos = mostrarTodos ? produtos : produtos?.slice(0, 8);
        const hortasExibidas = mostrarHortas ? hortas : hortas?.slice(0, 8);

    const usuario = localStorage.getItem("usuarioLogado")
        ? JSON.parse(localStorage.getItem("usuarioLogado")!)
        : null;

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ backgroundColor: "", textAlign: "center", marginTop: 8, padding: 0 }}
        >
            <Header
                end={
                    <Stack direction={'row'} gap={3}>
                        <CarrinhoButton/>
                        <IconButton href="/DadosConsumidor" aria-label="perfil" size="large">
                            <UserRound />
                        </IconButton>
                    </Stack>
                }
                start={
                    <Stack flex={1} minWidth="250px" maxWidth="400px" zIndex={"300000"}>
                        <SearchBar />
                    </Stack>
                }
            >
                <>
                    <Button variante="ButtonLinkBlack" tamanho="sm" to="/HomeConsumidor">Início</Button>
                    <Button variante="ButtonLinkBlack" onClick={() => scrollToSection('produtos')} tamanho="sm">Produtos</Button>

                    <Button variante="ButtonLinkBlack" onClick={() => scrollToSection('produtores')}  tamanho="sm">Produtores</Button>
                    <Button variante="ButtonLinkBlack" to="/Sobre"  tamanho="sm">Sobre</Button>
                </>
            </Header>

            <Styled.boxName>
                <Typography p={'0 3%'} level="inherit" sx={{ color: '#fff' }}>
                    Olá, {usuario?.nome ?? "Usuário"}
                </Typography>
                <Typography p={'0 3%'} level="inherit" sx={{ color: '#fff' }}>
                    Selecione produtos para comprar
                </Typography>
            </Styled.boxName>

            <Styled.Division />

            <Stack justifyContent={'center'} alignItems={'center'}>
                <CarouselFullScreen tamanho="xl"  >
                    <Box component="img" src={banner1} sx={{ width: "100%", objectFit: "cover" }} />
                    <Box component="img" src={banner2} sx={{ width: "100%", objectFit: "cover" }} />
                    <Box component="img" src={banner3} sx={{ width: "100%", objectFit: "cover" }} />
                </CarouselFullScreen>
            </Stack>


            <Styled.Division />

            {/* <FilterBar onFilterChange={handleFilterChange} /> */}

            <Container id="produtos" maxWidth={"xl"} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="90%" alignItems='center' marginBottom={2}>
                    <Typography level="h4">Para você</Typography>
                    <Button
                        ladoIcon="direita"
                        icon={ChevronRight}
                        variante="ButtonLinkBlack"
                        tamanho="sm"
                        onClick={() => setMostrarTodos(true)}
                    >
                        Ver todos
                    </Button>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} gap={4} flexWrap="wrap" justifyContent="space-evenly" alignItems="center" width="95%"    >
                  {isLoading && <Typography>Carregando produtos...</Typography>}
                    {error && <Typography>Erro ao carregar produtos</Typography>}

                    {produtosExibidos && produtosExibidos.length > 0 ? (
                        produtosExibidos.map(produto =>
                            <ProductCard
                                key={produto.id}
                                id={produto.id} 
                                image={produto.imagem ?? "https://veja.abril.com.br/wp-content/uploads/2016/12/maconha.jpg?crop=1&resize=1212,909"}
                                name={produto.nome}
                                lugar={usuario?.nome}
                                descricao={produto.descricao}
                                preco={produto.preco_unit.toFixed(2)}
                                tipoCard="Produto"
                            />
                        )
                    ) : (
                        !isLoading && <Typography>Nenhum produto cadastrado</Typography>
                    )}
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

                    <Button ladoIcon="direita" icon={ChevronRight} variante="ButtonLinkBlack" onClick={() => setMostrarHortas(true)} tamanho={"sm"}>Ver todos</Button>
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

            <Stack p={"3% 0"} />
            <Footer />
        </Container>
    );
}

