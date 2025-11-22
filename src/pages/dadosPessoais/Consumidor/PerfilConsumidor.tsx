
import { Header } from "../../../components/Header/Header.tsx";
import { Button } from "../../../components/Button/Button.tsx";
import { Footer } from "../../../components/Footer/Footer.tsx";
import { CaixaPerfil } from "../../../components/CaixaPerfil/CaixaPerfil.tsx";

import { Container, Stack, IconButton } from "@mui/material";
import SearchBar from "../../../components/barSearch/barSearch.tsx";

import { ProfileTabsContainerC } from "../Perfil/FormContainerCon.tsx";
import { CarrinhoButton } from "../../carrinho/carrinho.hook.tsx";
import { UserRound } from "lucide-react";


export function DadosConsumidor() {
    return (
        <>
            <Container
                disableGutters
                maxWidth={false}
                sx={{ textAlign: "center", marginTop: 12, padding: 0 }}
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
                            <SearchBar />
                        </Stack>
                    }
                >
                    <>
                        <Button variante="ButtonLinkBlack" tamanho="sm" to="/HomeConsumidor">Início</Button>
                        <Button variante="ButtonLinkBlack" to="/HomeConsumidor#produtos" tamanho="sm">Produtos</Button>

                        <Button variante="ButtonLinkBlack" to="/HomeConsumidor#produtores" tamanho="sm">Produtores</Button>
                        <Button variante="ButtonLinkBlack" to="/HomeConsumidor#sobre" tamanho="sm">Sobre</Button>
                    </>
                </Header>

                <CaixaPerfil nome="Vitor Lopez" perfil="Consumidor" />


                <ProfileTabsContainerC />





                <Footer />
            </Container>


        </>



    )

}