import { Container, IconButton, Stack, Typography } from "@mui/material";
import { ShoppingCart, UserRound } from "lucide-react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import { Button } from "../../../components/Button/Button";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchBar from "../../../components/barSearch/barSearch";

export function CarrinhoVazioPage() {
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
                        <IconButton aria-label="delete" size="large" href="/DadosConsumidor">
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
                    <Button variante="ButtonLinkBlack" to="/HomeConsumidor#produtos" tamanho="sm">Produtos</Button>

                    <Button variante="ButtonLinkBlack" to="/HomeConsumidor#produtores" tamanho="sm">Produtores</Button>
                    <Button variante="ButtonLinkBlack" to="/Sobre" tamanho="sm">Sobre</Button>
                </>
            </Header>
            <Stack p={"5% 0"} />

            <Stack
                sx={{
                    width: "100%",
                    height: "50vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Stack spacing={2} alignItems="center">
                    <ShoppingBagOutlinedIcon sx={{ fontSize: "110px", color: "#868697ff" }} />

                    <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
                        Seu carrinho está vazio
                    </Typography>

                    <Typography sx={{ color: "#7a7a7a", fontSize: "16px" }}>
                        Adicione produtos ao carrinho para continuar
                    </Typography>

                    <Button tamanho="md" to="/HomeConsumidor"
                        sx={{
                            width: "250px",
                            marginTop: "0.5rem"
                        }}
                    >
                        Continuar comprando
                    </Button>
                </Stack>

            </Stack>

            <Stack p={"5% 0"} />
            <Footer />
        </Container>
    );
}

