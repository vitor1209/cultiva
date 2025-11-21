import { useEffect, useState } from "react";
import { Container, Stack, IconButton, Box } from "@mui/material";
import Typography from "@mui/joy/Typography";
import { ChevronRight, UserRound, ShoppingBag, TrendingUp, Package, Star, Plus, ChartColumn } from "lucide-react";
import { Header } from "../../../components/Header/Header.tsx";
import { CarouselFullScreen } from "../../../components/Carousel/Carousel.tsx";
import * as Styled from "../LandingPage.styled.ts";
import { Button } from "../../../components/Button/Button.tsx";
import ProductCard from "../../../components/Card/Card.tsx";
import { Footer } from "../../../components/Footer/Footer.tsx";
import SearchBar from "../../../components/barSearch/barSearch.tsx";
import CardInfo from "../../../components/cardInfo/CardInfo.tsx";
import { Link } from "react-router-dom";
import { getProdutosByProdutor } from "../../../controllers/produto.controller";
import { useLocation } from "react-router-dom";


type Produto = {
    id: number;
    nome: string;
    descricao?: string;
    preco: number;
    imagem?: string;
    unidadeMedida: string;
    quantidadeEstoque: number;
    quantidadeMedida: number;
    dataColheita: string;
    dataValidade: string;
    avaliacao?: number;
    horta?: { id: number; nome: string };
};
const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
        const yOffset = -100;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};




export function HomePageProdutor() {
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


    const [produtos, setProdutos] = useState<Produto[]>([]);
    const usuario = localStorage.getItem("usuarioLogado")
        ? JSON.parse(localStorage.getItem("usuarioLogado")!)
        : null;

    useEffect(() => {
        if (usuario) {
            getProdutosByProdutor(usuario.id)
                .then((res) => setProdutos(res))
                .catch((err) => console.error(err));
        }
    }, [usuario]);

    return (
        <Container disableGutters maxWidth={false} sx={{ backgroundColor: "#fff8f0", textAlign: "center", marginTop: 8, padding: 0 }}>
            {/* Header */}
            <Header
                end={
                    <IconButton component={Link} to="/ProdutorPrivatePage" aria-label="perfil" size="large">
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
                    <Button variante="ButtonLinkBlack" to="/HomeProdutor" tamanho="sm">Início</Button>
                    <Button variante="ButtonLinkBlack" onClick={() => scrollToSection('produtos')} tamanho="sm">Seus Produtos</Button>
                    <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">Pedidos</Button>
                    <Button variante="ButtonLinkBlack" onClick={() => scrollToSection('sobre')} tamanho="sm">Sobre</Button>
                </>
            </Header>

            {/* Banner com nome do usuário */}
            <Styled.boxName>
                <Typography p={'0 3%'} level="inherit" sx={{ color: '#fff' }}>
                    Olá, {usuario?.nome ?? "Usuário"}
                </Typography>
                <Typography p={'0 3%'} level="inherit" sx={{ color: '#fff' }}>
                    Gerencie seus produtos e acompanhe suas vendas
                </Typography>
            </Styled.boxName>

            <Styled.Division />

            {/* Resumo de desempenho */}
            <Container maxWidth={"xl"} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Stack direction="row" justifyContent='space-between' width="94%" marginBottom={2}>
                    <Typography level="body-lg">Resumo de desempenho</Typography>
                </Stack>
                <Stack justifyContent={'space-evenly'} direction={{ xs: "column", sm: "row" }} gap={3} p={'0 3%'}>
                    <CardInfo name={"Pedidos do Mês"} acrescimo="+12%" valor={"45"} color={"blue"} tamanho={"lg"} icon={ShoppingBag} />
                    <CardInfo name={"Receita Total"} acrescimo="+8%" valor={"R$ 3.240"} color={"green"} tamanho={"lg"} icon={TrendingUp} />
                    <CardInfo name={"Produtos Ativos"} acrescimo="+2" valor={"12"} color={"purple"} tamanho={"lg"} icon={Package} />
                    <CardInfo name={"Avaliação Média"} acrescimo="+0.2" valor={"4.8"} color={"orange"} tamanho={"lg"} icon={Star} />
                </Stack>
            </Container>

            <Styled.Division />

            {/* Carrossel */}
            <Stack justifyContent={'center'} alignItems={'center'}>
                <CarouselFullScreen tamanho="xl">
                    <Box sx={{ background: "#1976d2", height: { xs: '10rem', sm: '20.25rem' }, borderRadius: '30px' }} />
                    <Box sx={{ background: "#9c27b0", height: { xs: '10rem', sm: '20.25rem' }, borderRadius: '30px' }} />
                    <Box sx={{ background: "#2e7d32", height: { xs: '10rem', sm: '20.25rem' }, borderRadius: '30px' }} />
                </CarouselFullScreen>
            </Stack>

            <Styled.Division />

            {/* Ações rápidas */}
            <Container maxWidth={"xl"} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Stack direction="row" justifyContent='space-between' width="94%" marginBottom={2}>
                    <Typography level="body-lg">Suas Ações Rápidas</Typography>
                </Stack>
                <Stack justifyContent={'space-evenly'} direction={{ xs: "column", sm: "row" }} gap={3} p={'0 4.5%'}>
                    <CardInfo to="/Cadastrar" name={"Cadastrar Produto"} valor={"Adicione novos produtos"} color={"blue"} tamanho={"md"} icon={Plus} />
                    <CardInfo to="/PerfilProdutor" name={"Meus Produtos"} valor={"Gerenciar produtos"} color={"green"} tamanho={"md"} icon={Package} />
                    <CardInfo name={"Pedidos Recebidos"} valor={"Ver novos pedidos"} color={"purple"} tamanho={"md"} icon={ShoppingBag} />
                    <CardInfo name={"Relatórios"} valor={"Análise de vendas"} color={"orange"} tamanho={"md"} icon={ChartColumn} />
                </Stack>
            </Container>

            <Styled.Division />

            {/* Produtos do produtor */}
            <Container id="produtos" maxWidth={"xl"} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Stack direction="row" justifyContent='space-between' width="90%" marginBottom={2}>
                    <Typography level="body-lg">Seus Produtos</Typography>
                    <Button ladoIcon="direita" icon={ChevronRight} variante="ButtonLinkBlack" tamanho={"sm"}>Ver todos</Button>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} gap={3} flexWrap="wrap" justifyContent="space-evenly" alignItems="center" width="95%">
                    {produtos.length > 0 ? (
                        produtos.map((produto) => (
                            <ProductCard
                                key={produto.id}
                                image={produto.imagem ?? "https://via.placeholder.com/150"}
                                name={produto.nome}
                                lugar={produto.horta?.nome ?? "Horta do produtor"}
                                avaliacao={produto.avaliacao ?? 0}
                                preco={produto.preco.toFixed(2)}
                                tipoCard={"Produtor"}
                            />
                        ))
                    ) : (
                        <Typography>Nenhum produto cadastrado</Typography>
                    )}
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
            <Footer />
        </Container>
    );
}
