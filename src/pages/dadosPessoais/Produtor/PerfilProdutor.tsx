
import { Header } from "../../../components/Header/Header.tsx";
import { Button } from "../../../components/Button/Button.tsx";
import { Footer } from "../../../components/Footer/Footer.tsx";
import ProfileTabsContainer from "../Perfil/FormContainerProd.tsx"
import { CaixaPerfil } from "../../../components/CaixaPerfil/CaixaPerfil.tsx";

import { Container, IconButton } from "@mui/material";
import { Link } from "react-router";
import { UserRound } from "lucide-react";

export function DadosProdutor() {
     const usuario = localStorage.getItem("usuarioLogado")
        ? JSON.parse(localStorage.getItem("usuarioLogado")!)
        : null;

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
            >
                <>
                    <Button variante="ButtonLinkBlack" to="/HomeProdutor" tamanho="sm">Início</Button>
                    <Button variante="ButtonLinkBlack" to="/HomeProdutor#produtos" tamanho="sm">Seus Produtos</Button>
                    <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">Pedidos</Button>
                    <Button variante="ButtonLinkBlack" to="/Sobre" tamanho="sm">Sobre</Button>
                </>
            </Header>

                <CaixaPerfil nome={usuario?.nome ?? "Produtor"} perfil="Produtor"/>

                <ProfileTabsContainer />

                <Footer />
            </Container>
        </>
    )
}
