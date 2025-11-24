import { Container, IconButton, Stack } from "@mui/material";
import { Header } from "../../../components/Header/Header";
import { Button } from "../../../components/Button/Button";
import { Footer } from "../../../components/Footer/Footer";
import { ChartColumn, Package, Plus, ShoppingBag, UserRound } from "lucide-react";
import CardInfo from "../../../components/cardInfo/CardInfo";
import Typography from "@mui/joy/Typography";
import * as styled from "../Pedidos.styled";
import { FilterBar } from "../../../components/FilterBar/FilterBar";
import { CardPedido } from "../../../components/CardPedido/CardPedido";
import { Link } from "react-router-dom";
import { useGetPedidosProdutor } from "../../../controllers/pedido.controller";

export function PedidosPage() {
    const { data, isLoading, isError } = useGetPedidosProdutor();

    const handleFilterChange = (filters: { status: string; sort: string }) => {
        console.log("Filtros aplicados:", filters);
    };

    type StatusType = "Preparando" | "Enviado" | "Disponível para Retirada" | "Finalizado" | 'Cancelado'


    const mapStatus = (statusNumber: number): StatusType => {
        switch (statusNumber) {
            case 1:
                return "Preparando";
            case 2:
                return "Enviado";
            case 3:
                return "Disponível para Retirada";
            case 4:
                return "Finalizado";
            case 5:
                return "Cancelado";
            default:
                return "Preparando"; // valor padrão caso venha outro número
        }
    };

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ backgroundColor: "#fff8f0", textAlign: "center", marginTop: 8, padding: 0 }}
        >
            {/* Header */}
            <Header
                end={
                    <IconButton component={Link} to="/ProdutorPrivatePage" aria-label="perfil" size="large">
                        <UserRound />
                    </IconButton>
                }
            >
                <>
                    <Button variante="ButtonLinkBlack" to="/HomeProdutor" tamanho="sm">
                        Início
                    </Button>
                    <Button variante="ButtonLinkBlack" to="/HomeProdutor#produtos" tamanho="sm">
                        Seus Produtos
                    </Button>
                    <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">
                        Pedidos
                    </Button>
                    <Button variante="ButtonLinkBlack" to="/Sobre" tamanho="sm">
                        Sobre
                    </Button>
                </>
            </Header>

            <styled.Division />

            {/* Resumo de desempenho */}
            <Container
                maxWidth={"xl"}
                sx={{
                    width: "90%",
                    padding: "2% 0",
                    p: { xs: 2, md: 4 },
                    borderRadius: "25px",
                    backgroundColor: "#d9d3d0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center" marginBottom={2}>
                    <Typography level="body-lg">Resumo de desempenho</Typography>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} flexWrap="wrap" gap={2.5}>
                    <CardInfo to="/Cadastrar" name={"Cadastrar Produto"} valor={"Adicione novos produtos"} color={"blue"} tamanho={"md"} icon={Plus} />
                    <CardInfo to="/ProdutorPrivatePage" name={"Meus Produtos"} valor={"Gerenciar produtos"} color={"green"} tamanho={"md"} icon={Package} />
                    <CardInfo name={"Pedidos Recebidos"} valor={"Ver novos pedidos"} color={"purple"} tamanho={"md"} icon={ShoppingBag} />
                    <CardInfo name={"Relatórios"} valor={"Análise de vendas"} color={"orange"} tamanho={"md"} icon={ChartColumn} />
                </Stack>
            </Container>

            <styled.Division />

            {/* Lista de Pedidos */}
            <Container
                maxWidth={"xl"}
                sx={{
                    width: { sm: "100%", md: "90%" },
                    padding: "2% 0",
                    p: { xs: 2, md: 4 },
                    borderRadius: "25px",
                    backgroundColor: "#d9d3d0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <Stack direction="row" justifyContent="space-between" width="100%" alignItems="center" marginBottom={2}>
                    <Typography level="body-lg">Pedidos</Typography>
                </Stack>

                {isLoading ? (
                    <Typography>Carregando pedidos...</Typography>
                ) : isError ? (
                    <Typography>Erro ao carregar pedidos.</Typography>
                ) : (
                    <Stack direction={{ xs: "column", sm: "row" }} width="100%" flexWrap="wrap" gap={2.5}>
                        <FilterBar onFilterChange={handleFilterChange} />

                        {data?.pedidos?.length ? (
                            data.pedidos.map((pedido) => (
                                <CardPedido
                                    key={pedido.id}
                                    img={pedido.usuario.foto ?? ''}
                                    nome={pedido.usuario.nome}
                                    id={pedido.id}
                                    data={pedido.data_hora}
                                    formaPagamento={pedido.forma_pagamento ?? 'PIX'}
                                    totalCompra={pedido.preco_final}
                                    status={mapStatus(pedido.status)}
                                />
                            ))
                        ) : (
                            <Typography>Nenhum pedido encontrado.</Typography>
                        )}
                    </Stack>
                )}
            </Container>

            <styled.Division />

            <Footer />
        </Container>
    );
}
