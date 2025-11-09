import Typography from "@mui/joy/Typography"
import { Box, FormControl, MenuItem, Select, Stack, type SelectChangeEvent } from "@mui/material"
import { Button } from "../Button/Button"
import type { CardPedidoPros, StatusType } from "./CardPedido.type"
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { theme } from "../../lib/theme/theme";

import * as styled from "./CardPedido.styled";

export const CardPedido = ({
    img,
    nome,
    id,
    data,
    formaPagamento,
    totalCompra,
    status,
}: CardPedidoPros) => {
    const [statusAtivo, setstatusAtivo] = useState<StatusType>(status);
    const [colorAtivo, setscolorAtivo] = useState<string>('#6796FF');

    const setColor = (status: StatusType) => {
        switch (status) {
            case 'Disponível para Retirada':
                setscolorAtivo("#DE96FA")
                break;
            case 'Enviado':
                setscolorAtivo("#DE96FA")
                break;
            case 'Finalizado':
                setscolorAtivo("#A0E393")
                break;
            case 'Preparando':
                setscolorAtivo("#6796FF")
                break;

            default:
                setscolorAtivo("#6796FF")
                break;
        }
    }

    const handleStatusChange = (event: SelectChangeEvent) => {
        const newStatus = event.target.value as StatusType;
        setColor(newStatus);
        setstatusAtivo(newStatus);
    };
    return (
        <styled.ContainerCardPedido>
            <styled.ContainerInfos>
                <Box
                    component="img"
                    src={img}
                    sx={{
                        width: '7.6rem',
                        height: '7.6rem',
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.2)',
                    }}
                />
                <Stack sx={{
                    marginLeft: '3.5%', width: '100%', [theme.breakpoints.down('md')]: {
                        alignItems: 'center',
                        textAlign: 'center',
                        marginLeft: 0,
                    }
                }}
                >
                    <Typography level="body-lg" >{nome}</Typography>
                    <Typography level="body-lg" >Pedido: #{id}</Typography>
                    <Stack direction={{ sm: "column", md: "row" }} alignItems={'center'} gap={0.5}>
                        <Typography>Data da Compra: </Typography>
                        <Typography level="body-sm">{data}</Typography>
                    </Stack>
                    <Stack direction={{ sm: "column", md: "row" }} alignItems={'center'} gap={0.5}>
                        <Typography>Forma de Pagamento: </Typography>
                        <Typography level="body-sm">{formaPagamento}</Typography>
                    </Stack>
                    <Stack direction={{ sm: "column", md: "row" }} alignItems={'center'} gap={0.5}>
                        <Typography>Total Compra: </Typography>
                        <Typography level="body-sm">R$ {totalCompra}</Typography>
                    </Stack>
                </Stack>
            </styled.ContainerInfos>

            <styled.ContainerBtn>
                <Typography>Atualizar Status:</Typography>
                <FormControl size="small" sx={{ minWidth: '16.25rem', backgroundColor: colorAtivo, borderRadius: '10px' }}>
                    <Select value={statusAtivo} onChange={handleStatusChange} IconComponent={KeyboardArrowDownIcon} sx={{
                        color: 'white', borderRadius: '10px', border: '1px solid #000',
                        "& .MuiSelect-icon": {
                            color: "white",
                        }
                    }}>
                        <MenuItem value="Preparando">Preparando</MenuItem>
                        <MenuItem value="Enviado">Enviado</MenuItem>
                        <MenuItem value="Disponível para Retirada">Disponível para Retirada</MenuItem>
                        <MenuItem value="Finalizado">Finalizado</MenuItem>
                    </Select>
                </FormControl>
                <Button to={`/Pedidos/${id}`} espacamento={70} tamanho="md">Ver Detalhes</Button>
            </styled.ContainerBtn>
        </styled.ContainerCardPedido>
    )
}