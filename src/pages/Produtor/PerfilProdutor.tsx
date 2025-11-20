
import { Container, ListItemButton, ListItemIcon } from "@mui/material";
import { Header } from "../../components/Header/Header.tsx";
import { Button } from "../../components/Button/Button.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";
import Box from '../../components/CaixaPerfil/BoxPerfil';
import ProfileTabsContainer from "../../components/FormContainer/FormContainerPerfil.tsx"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';



function PerfilProdutor() {
    return (
        <>
            <Container
                disableGutters
                maxWidth={false}
                sx={{ textAlign: "center", marginTop: 12, padding: 0 }}
            >
                <Header>
                    <>
                        <Button variante="ButtonLinkBlack" tamanho="sm">Início</Button>
                        <Button variante="ButtonLinkBlack" tamanho="sm">Produtores</Button>
                        <Button variante="ButtonLinkBlack" tamanho="sm">Produtos</Button>
                        <Button variante="ButtonLinkBlack" tamanho="sm">Como Funciona</Button>
                        <ListItemButton>
                            <ListItemIcon>
                                <PersonOutlineIcon />
                            </ListItemIcon>
                        </ListItemButton>
                    </>
                </Header>

                <Box />


                <ProfileTabsContainer />

               



                <Footer />
            </Container>


        </>



    )

}
export default PerfilProdutor


