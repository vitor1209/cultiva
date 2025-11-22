import { Box, Stack } from "@mui/material";
import Typography from "@mui/joy/Typography";
import * as styled from "./HeaderProdutor.styled";
import { theme } from "../../lib/theme/theme";
import { Button } from "../Button/Button";
import type { ProdutorPrivado } from "../../pages/PerfilProdutor/PerfilProdutor.types";

type HeaderProdutorProps = ProdutorPrivado;

export function HeaderProdutor({
  nome,
  endereco,
  telefone,
  descricao,
  logo,
  desde,
  beditar,
}: HeaderProdutorProps) {
    return (
        <styled.ContainerHeader
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                [theme.breakpoints.down("md")]: {
                flexWrap: "wrap", // só quebra a partir de telas médias pra baixo
                },
            }}
        >
        
            {logo && (
                <Box
                component="img"
                src={logo}
                sx={{
                    width: '7.6rem',
                    height: '7.6rem',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.2)',
                    marginRight: '1rem',
                }}
                />
            )}
        
            <Stack
                gap={0.5}
                sx={{
                flexGrow: 1,
                minWidth: 0, // ajuda quando o conteúdo for longo
                [theme.breakpoints.down('md')]: {
                    order: 2,      // desce abaixo no mobile
                    width: '100%', // ocupa a linha inteira
                    marginTop: '1rem',
                },
                }}
            >
                <Typography level="h4">{nome}</Typography>
                <Typography level="body-sm">Na plataforma desde {desde}</Typography>
                <Typography level="body-sm" sx={{ color: '#000000ff' }}>{descricao}</Typography>
                <Typography level="body-sm" sx={{ color: '#000000ff' }}>Localizado na {endereco}</Typography>
                <Typography level="body-sm" sx={{ color: '#009a05ff' }}>Telefone: {telefone}</Typography>
            </Stack>
        
            <Stack
                textAlign="right"
                gap={0.5}
                sx={{
                    [theme.breakpoints.down('md')]: {
                        order: 1,        // sobe acima das infos no mobile
                        width: 'auto',
                        alignSelf: 'center',
                        marginLeft: 'auto',
                    },
                }}
            >

                {beditar && (
                    <Button tamanho={"sm"} sx={{ alignSelf: "flex-end", marginTop: "30px", width: "100px"}}
                    to="/AindaNaoExiste:(">Editar</Button>
                )}

            </Stack>
        </styled.ContainerHeader>

    );
}
