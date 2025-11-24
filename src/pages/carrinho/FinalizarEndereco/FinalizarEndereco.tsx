import { Container, IconButton, Stack } from "@mui/material";
import { CheckCircle, ShoppingCart, UserRound } from "lucide-react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import { Button } from "../../../components/Button/Button";
import { ResumoCompra } from "../../../components/ResumoCompra/ResumoCompra";
import { ResumoPedido } from "../../../components/ResumoPedido/ResumoPedido";
import { EnderecoEntrega } from "./Endereco/EnderecoEntrega";
import { useLocation } from "react-router-dom";
import { useFinalizarEnderecoForm } from "./finalizarEndereco.hook";
import { PadraoModal } from "../../../components/Modal/Modal";
import SearchBar from "../../../components/barSearch/barSearch";

export function FinalizarEnderecoPage() {
    const location = useLocation();
    const opcaoEntregaSelecionada = location.state?.opcaoEntrega ?? "residencia";


    const {
        form,
        onSubmit,
        produtosResumo,
        subtotal,
        freteTotal,
        entrega,
        total,
        opcaoEntrega,
        setOpcaoEntrega,
        isLoading,
        opcaoPagamento,
        setOpcaoPagamento,
        modalOpen,
        setModalOpen,
        modalMessage,
    } = useFinalizarEnderecoForm(opcaoEntregaSelecionada);

    return (
        <>
            <Container
                disableGutters
                maxWidth={false}
                sx={{ backgroundColor: "#fff8f0", textAlign: "center", marginTop: 8, padding: 0 }}
            >
                {/* Header e SearchBar */}
                <Header
                    end={
                        <Stack direction={'row'} gap={3}>
                            <IconButton aria-label="carrinho" size="large" >
                                <ShoppingCart />
                            </IconButton>
                            <IconButton aria-label="usuario" size="large" href="/DadosConsumidor">
                                <UserRound />
                            </IconButton>
                        </Stack>
                    }


                >
                    <>
                        <Button variante="ButtonLinkBlack" tamanho="sm" to="/HomeConsumidor">Início</Button>
                        <Button variante="ButtonLinkBlack" to="/HomeConsumidor#produtos" tamanho="sm">Produtos</Button>

                        <Button variante="ButtonLinkBlack" to="/HomeConsumidor#produtores" tamanho="sm">Produtores</Button>
                        <Button variante="ButtonLinkBlack" to="/Sobre" tamanho="sm">Sobre</Button>
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

                        {opcaoEntregaSelecionada === "residencia" && <EnderecoEntrega form={form} />}
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
                            pagamento={opcaoPagamento}
                            onChangePagamento={setOpcaoPagamento}
                            opcaoEntrega={opcaoEntrega}
                            onChangeEntrega={setOpcaoEntrega}
                            page="Finalizar"
                            onConfirmar={onSubmit}
                        />
                    </Stack>
                </Stack>

                <Stack p={"3% 0"} />
                <Footer />
            </Container>

            <PadraoModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Sucesso"
                description={modalMessage ?? ""}
                buttonText="Concluir"
                to="/HomeConsumidor"
                Icon={CheckCircle}
            />

        </>
    );
}
