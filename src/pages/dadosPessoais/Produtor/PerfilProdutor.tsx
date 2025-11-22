
import { Header } from "../../../components/Header/Header.tsx";
import { Button } from "../../../components/Button/Button.tsx";
import { Footer } from "../../../components/Footer/Footer.tsx";
import ProfileTabsContainer from "../Perfil/FormContainerPerfil.tsx"
import { CaixaPerfil } from "../../../components/CaixaPerfil/CaixaPerfil.tsx";

import { Container, Stack, IconButton } from "@mui/material";
import SearchBar from "../../../components/barSearch/barSearch.tsx";
import { Link } from "react-router-dom";

import { UserRound } from "lucide-react";


export function DadosProdutor() {
    return (
        <>
            <Container
                disableGutters
                maxWidth={false}
                sx={{ textAlign: "center", marginTop: 12, padding: 0 }}
            >
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
                    <Button variante="ButtonLinkBlack" to="/HomeProdutor" tamanho="sm">Seus Produtos</Button>
                    <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">Pedidos</Button>
                    <Button variante="ButtonLinkBlack" to="/HomeProdutor" tamanho="sm">Como Funciona</Button>
                </>
            </Header>

                <CaixaPerfil nome="Sítio Verde" perfil="Produtor"/>


                <ProfileTabsContainer />





                <Footer />
            </Container>


        </>



    )

}


