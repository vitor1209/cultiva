import { Container, IconButton, Stack } from "@mui/material";
import { ShoppingCart, UserRound } from "lucide-react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import SearchBar from "../../../components/barSearch/barSearch";
import { Button } from "../../../components/Button/Button";
import { ResumoCompra } from "../../../components/ResumoCompra/ResumoCompra";
import { ResumoPedido } from "../../../components/ResumoPedido/ResumoPedido";
import { EnderecoEntrega } from "./EnderecoEntrega";
import { useFinalizarEndereco } from "./finalizarEndereco.hook";

export function FinalizarEnderecoPage() {

    const {
        produtosResumo,
        subtotal,
        freteTotal,
        entrega,
        total,
        opcaoEntrega,
        setOpcaoEntrega,
        isLoading,
        OpcaoPagamento,
        setOpcaoPagamento,
    } = useFinalizarEndereco();

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ backgroundColor: "#fff8f0", textAlign: "center", marginTop: 8, padding: 0 }}
        >

            <Header
                end={
                    <Stack direction={'row'} gap={3}>
                        <IconButton aria-label="carrinho" size="large">
                            <ShoppingCart />
                        </IconButton>

                        <IconButton aria-label="usuario" size="large">
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

            <Stack direction={{ md: "column", lg: "row" }}>

                {/* ESQUERDA */}
                <Stack gap={2} alignItems={'center'} flex={5}>
                    {isLoading ? (
                        <p>Carregando produtos...</p>
                    ) : (
                        <ResumoPedido produtos={produtosResumo} />
                    )}

                    <EnderecoEntrega />
                </Stack>

                <Stack p={"3% 0"} />

                {/* DIREITA */}
                <Stack flex={3}>
                    <ResumoCompra
                        subtotal={subtotal}
                        freteTotal={freteTotal}
                        entrega={entrega}
                        total={total}
                        formaPagamento={true}

                        pagamento={OpcaoPagamento}
                        onChangePagamento={setOpcaoPagamento}

                        opcaoEntrega={opcaoEntrega}
                        onChangeEntrega={setOpcaoEntrega}

                        page="Confirmar"
                        onConfirmar={()=>{}}
                    />
                </Stack>

            </Stack>

            <Stack p={"3% 0"} />
            <Footer />

        </Container>
    );
}
