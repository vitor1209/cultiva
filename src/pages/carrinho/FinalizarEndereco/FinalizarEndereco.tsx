import { Container, IconButton, Stack, } from "@mui/material";
import { ShoppingCart, UserRound } from "lucide-react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import SearchBar from "../../../components/barSearch/barSearch";
import { Button } from "../../../components/Button/Button";
import type { OpcaoEntrega } from "../../../components/ResumoCompra/ResumoCompra.types";
import { useState } from "react";
import { ResumoCompra } from "../../../components/ResumoCompra/ResumoCompra";
import { ResumoPedido } from "../../../components/ResumoPedido/ResumoPedido";
import { EnderecoEntrega } from "./EnderecoEntrega";

export function FinalizarEnderecoPage() {
    const [opcaoEntrega, setOpcaoEntrega] = useState<OpcaoEntrega>("residencia");

    const entrega = opcaoEntrega === "horta" ? 0 : 8.0;
    const subtotal = 21.30;
    const total = subtotal + entrega;

    return (
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

            <Stack p={"3% 0"} />

            <Stack direction={{
                md: "column",
                lg: "row",
            }}>

                <Stack gap={2} alignItems={'center'} flex={5} >
                    <ResumoPedido
                        produtos={[
                            {
                                id: "1",
                                nome: "Cenoura Orgânica",
                                produtor: "Sítio Verde",
                                quantidade: 1,
                                preco: 5.5,
                            },
                            {
                                id: "2",
                                nome: "Tomate Cereja",
                                produtor: "Horta da Família",
                                quantidade: 2,
                                preco: 17.8,
                            },
                        ]}
                    />

                    <EnderecoEntrega />

                </Stack>

                <Stack p={"3% 0"} />

                <Stack flex={3} >

                    <ResumoCompra
                        subtotal={subtotal}
                        entrega={8.0}
                        total={total}
                        opcaoEntrega={opcaoEntrega}
                        onChangeEntrega={setOpcaoEntrega}
                        onConfirmar={() => console.log("Finalizou!")}
                        page="Finalizar"
                    />

                </Stack>

            </Stack>

            <Stack p={"3% 0"} />
            <Footer />
        </Container>
    );
}

