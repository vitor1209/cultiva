import { HeaderContainer } from "./Header.styled.ts";
import Stack from '@mui/material/Stack';
import { LogoCultiva } from "../../assets/index";
import { Box, Drawer, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import type { HeaderProps } from "./Header.types.ts";

export const Header: React.FC<HeaderProps> = ({ children, end, start }) => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const [openNav, setOpenNav] = useState<boolean>(false);

    const toggleDrawer = () => setOpenNav(!openNav);

    const navButtons = (
        <Stack alignItems="center" spacing={2} direction="column" padding={2}>
            {children}
            <>{end}</>
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
                    <>{start}</>
                    <Stack direction="row" spacing={2} alignItems="center">
                        {children}
                    </Stack>
                    <>{end}</>
                </>
            )}
        </HeaderContainer>)
}