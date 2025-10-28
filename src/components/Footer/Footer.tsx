import { Stack, Typography } from "@mui/material";
import * as styled from "./Footer.styled";
import { LogoCultiva } from "../../assets";

export const Footer = () => {
    return (
        <styled.ContainerFooter >
            <Stack direction={{ xs: "column", sm: "row" }} alignItems={{ sm: "stretch", xs: "center" }} textAlign={{ sm: "left", xs: "center" }} justifyContent="space-around" spacing={4}>
                <Stack alignItems={{ sm: "stretch", xs: "center" }}>
                    <img src={LogoCultiva} alt="Logo Cultiva" width={150} />
                    <Typography variant="body2" color="text.secondary" >
                        Conectando quem planta com quem consome.
                    </Typography>
                </Stack>

                <Stack>
                    <Typography variant="subtitle1">Contato</Typography>
                    <Typography variant="body2" color="text.secondary" >Email: cultivamais@gmail.com</Typography>
                    <Typography variant="body2" color="text.secondary" >Telefone: (19) 3456-7890</Typography>
                </Stack>

                <Stack >
                    <Typography variant="subtitle1">Links Úteis</Typography>
                    <Typography variant="body2" color="text.secondary" >Política de Privacidade</Typography>
                    <Typography variant="body2" color="text.secondary" >Termos de Uso</Typography>
                    <Typography variant="body2" color="text.secondary" >Ajuda</Typography>
                </Stack>
            </Stack>

            <hr style={{ width: "100%", margin: '1.5% 0', border: "1px solid #dcdcdc" }} />

            <Stack alignItems="center" spacing={1}>
                <Typography variant="body2" textAlign="center">
                    Projeto desenvolvido para conectar produtores e consumidores locais
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    © 2025 Cultiva+. Todos os direitos reservados.
                </Typography>
            </Stack>
        </styled.ContainerFooter >
    );
};
