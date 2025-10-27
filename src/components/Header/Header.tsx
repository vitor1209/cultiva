import { Button } from "../../components/Button/Button";
import { HeaderContainer } from "./Header.styled.ts";
import Stack from '@mui/material/Stack';
import { LogoCultiva } from "../../assets/index";

export const Header = () => {
    return (
        <HeaderContainer className="BlueHeader">
            <Stack>
                <img src={LogoCultiva} alt="Logo Cultiva" width={120} />
            </Stack>
            <Stack direction="row" spacing={2}>
                <Button variante="ButtonLinkBlack" tamanho={"sm"}>Início</Button>
                <Button variante="ButtonLinkBlack" tamanho={"sm"}>Produtores</Button>
                <Button variante="ButtonLinkBlack" tamanho={"sm"}>Produtos</Button>
                <Button variante="ButtonLinkBlack" tamanho={"sm"}>Como Funciona</Button>
            </Stack>
            <Button variante="ButtonGreen" espacamento={14} tamanho={"md"}>Login</Button>
        </HeaderContainer>)
}