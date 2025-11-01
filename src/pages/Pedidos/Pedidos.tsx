import { Container, IconButton, Stack } from "@mui/material";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { ChartColumn, Package, Plus, ShoppingBag, UserRound } from "lucide-react";
import SearchBar from "../../components/barSearch/barSearch";
import CardInfo from "../../components/cardInfo/CardInfo";
import Typography from "@mui/joy/Typography";
import * as styled from "./Pedidos.styled";


export function PedidosPage() {
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

            <styled.Division />

            <Container maxWidth={"xl"} sx={{ width: '90%', padding: '2% 0 ', p: { xs: 2, md: 4 }, borderRadius: '25px', backgroundColor: '#d9d3d0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="100%" alignItems='center' marginBottom={2}>
                    <Typography level="body-lg">Resumo de desempenho</Typography>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} flexWrap="wrap" gap={2.5}>
                    <CardInfo name={"Cadastrar Produto"} valor={"Adicione novos produtos"} color={"blue"} tamanho={"md"} icon={Plus}></CardInfo>
                    <CardInfo name={"Meus Produtos"} valor={"Gerenciar produtos"} color={"green"} tamanho={"md"} icon={Package}></CardInfo>
                    <CardInfo name={"Pedidos Recebidos"} valor={"Ver novos pedidos"} color={"purple"} tamanho={"md"} icon={ShoppingBag}></CardInfo>
                    <CardInfo name={"Relatórios"} valor={"Análise de vendas"} color={"orange"} tamanho={"md"} icon={ChartColumn}></CardInfo>

                </Stack>
            </Container>

            <styled.Division />


            <Footer />
        </Container>
    );
}
