import { Button } from "../../components/Button/Button";
import { HeaderContainer } from "./Header.styled.ts";
import Stack from '@mui/material/Stack';
import { LogoCultiva } from "../../assets/index";
import { Box, Drawer, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

export const Header = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [openNav, setOpenNav] = useState<boolean>(false);

    const toggleDrawer = () => setOpenNav(!openNav);

    const navButtons = (
        <Stack alignItems="center" spacing={2} direction="column" padding={2}>
            <Button variante="ButtonLinkBlack" tamanho="sm">Início</Button>
            <Button variante="ButtonLinkBlack" tamanho="sm">Produtores</Button>
            <Button variante="ButtonLinkBlack" tamanho="sm">Produtos</Button>
            <Button variante="ButtonLinkBlack" tamanho="sm">Como Funciona</Button>
            <Button to="/Login" variante="ButtonGreen" espacamento={14} tamanho="md">Login</Button>
        </Stack>)


    return (
        <HeaderContainer className="BlueHeader">
            <Stack>
                <img src={LogoCultiva} alt="Logo Cultiva" width={120} />
            </Stack>
            {isMobile ? (
                <>
                    <IconButton onClick={toggleDrawer}>
                        <MenuIcon size={24} />
                    </IconButton>
                    <Drawer anchor="right" open={openNav} onClose={toggleDrawer}>
                        <Box
                            width={250}
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            height="100%"
                            padding={2}
                        >
                            {navButtons}
                        </Box>
                    </Drawer>
                </>
            ) : (
                <>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Button variante="ButtonLinkBlack" tamanho="sm">Início</Button>
                        <Button variante="ButtonLinkBlack" tamanho="sm">Produtores</Button>
                        <Button variante="ButtonLinkBlack" tamanho="sm">Produtos</Button>
                        <Button variante="ButtonLinkBlack" tamanho="sm">Como Funciona</Button>
                    </Stack>
                    <Button to="/Login" variante="ButtonGreen" espacamento={14} tamanho="md">Login</Button>
                </>
            )}
        </HeaderContainer>)
}