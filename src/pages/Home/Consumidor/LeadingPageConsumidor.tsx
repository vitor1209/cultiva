import { Container, IconButton, Stack, Box } from "@mui/material";
import { UserRound, ChevronRight } from "lucide-react";
import { Header } from "../../../components/Header/Header.tsx";
import { Footer } from "../../../components/Footer/Footer.tsx";
import SearchBar from "../../../components/barSearch/barSearch.tsx";
import { Button } from "../../../components/Button/Button.tsx";
import Typography from '@mui/joy/Typography';
import { CarouselFullScreen } from "../../../components/Carousel/Carousel.tsx";
import * as Styled from "../LandingPage.styled.ts";
import { CardPedidos } from "../../../components/CardPedidos/CardPedidos.tsx";
import { useGetProdutosGeral } from "../../../controllers/produto.controller.ts";
import { useEffect, useState } from "react";
import ProductCard from "../../../components/Card/Card.tsx";
import { CarrinhoButton } from "../../carrinho/carrinho.hook.tsx";
import { useLocation } from "react-router-dom";
import { useGetProdutosPesquisa } from "../../../controllers/pesquisa.controller.ts";
import type { Produto } from "../../../types/Produto.ts";




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

    const {
        data: produtos,
        isLoading,
        error,
    } = useGetProdutosGeral();

    const produtosExibidos = mostrarTodos
        ? produtos
        : produtos?.slice(0, 8);

    const usuario = localStorage.getItem("usuarioLogado")
        ? JSON.parse(localStorage.getItem("usuarioLogado")!)
        : null;


    const [search, setSearch] = useState("");
    const {
        data: produtosBusca,
        isLoading: isLoadingBusca,
        error: errorBusca,
    } = useGetProdutosPesquisa({ nome: search });

    const listaFinal = search.trim() === "" ? produtos : produtosBusca;

    const produtosExibidosBusca = mostrarTodos
        ? listaFinal
        : listaFinal?.slice(0, 8);

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ backgroundColor: "", textAlign: "center", marginTop: 8, padding: 0 }}
        >
            <Header
                end={
                    <Stack direction={'row'} gap={3}>
                        <CarrinhoButton />
                        <IconButton href="/DadosConsumidor" aria-label="perfil" size="large">
                            <UserRound />
                        </IconButton>
                    </Stack>
                }
                start={
                    <Stack flex={1} minWidth="250px" maxWidth="400px">
                        <SearchBar onSearchChange={(v) => setSearch(v)} />
                    </Stack>
                }
            >
                <>
                    <Button variante="ButtonLinkBlack" tamanho="sm" to="/HomeConsumidor">Início</Button>
                    <Button variante="ButtonLinkBlack" onClick={() => scrollToSection('produtos')} tamanho="sm">Produtos</Button>

                    <Button variante="ButtonLinkBlack" onClick={() => scrollToSection('produtores')} tamanho="sm">Produtores</Button>
                    <Button variante="ButtonLinkBlack" onClick={() => scrollToSection('sobre')} tamanho="sm">Sobre</Button>
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
                    <Box sx={{ background: "#1976d2", height: { xs: '10rem', sm: '20.25rem' }, borderRadius: '30px' }}></Box>
                    <Box sx={{ background: "#9c27b0", height: { xs: '10rem', sm: '20.25rem' }, borderRadius: '30px' }}></Box>
                    <Box sx={{ background: "#2e7d32", height: { xs: '10rem', sm: '20.25rem' }, borderRadius: '30px' }}></Box>
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
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    gap={4}
                    flexWrap="wrap"
                    justifyContent="space-evenly"
                    alignItems="center"
                    width="95%"
                >
                    {isLoading && <Typography>Carregando produtos...</Typography>}
                    {error && <Typography>Erro ao carregar produtos</Typography>}

                    {search.trim() !== "" ? (
                        // 🔎 Resultados da busca
                        produtosBusca?.length ? (
                            produtosBusca.map((produto: Produto) => (
                                <ProductCard
                                    key={produto.id}
                                    id={produto.id}
                                    image={produto.imagem ?? "https://via.placeholder.com/300"}
                                    name={produto.nome}
                                    lugar={usuario?.nome}
                                    descricao={produto.descricao}
                                    preco={produto.preco_unit.toFixed(2)}
                                    tipoCard="Produto"
                                />
                            ))
                        ) : (
                            <Typography>Nenhum produto encontrado</Typography>
                        )
                    ) : (
                        // 🧃 Lista normal (produtos gerais)
                        produtosExibidos && produtosExibidos.length > 0 ? (
                            produtosExibidos.map(produto => (
                                <ProductCard
                                    key={produto.id}
                                    id={produto.id}
                                    image={produto.imagem ?? "https://via.placeholder.com/300"} name={produto.nome}
                                    lugar={usuario?.nome}
                                    descricao={produto.descricao}
                                    preco={produto.preco_unit.toFixed(2)}
                                    tipoCard="Produto"
                                />
                            ))
                        ) : (
                            !isLoading && <Typography>Nenhum produto cadastrado</Typography>
                        )
                    )}
                </Stack>
            </Container>

            <Styled.Division />

            <Container id="produtores" maxWidth={"xl"} sx={{ width: '95%', padding: '3% 0 4% 0 ', p: { xs: 2, md: 4 }, borderRadius: '25px', backgroundColor: '#d9d3d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="95%" alignItems='center' marginBottom={2}>
                    <Typography level="body-lg">Produtores em Destaque</Typography>
                    <Button ladoIcon="direita" icon={ChevronRight} variante="ButtonLinkBlack" tamanho={"sm"}>Ver todos</Button>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} flexWrap="wrap" gap={2.5}>

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


            <Stack p={"3% 0"} />
            <Footer />
        </Container>
    );
}

