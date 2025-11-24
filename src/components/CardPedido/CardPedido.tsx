import Typography from "@mui/joy/Typography";
import { Box, Stack } from "@mui/material";
import { Button } from "../Button/Button";
import type { CardPedidoPros, StatusType } from "./CardPedido.type";
import { useState } from "react";
import { theme } from "../../lib/theme/theme";
import * as styled from "./CardPedido.styled";
import { useNavigate } from "react-router";

export const CardPedido = ({
    img,
    nome,
    id,
    data,
    formaPagamento,
    totalCompra,
    status,
}: CardPedidoPros) => {
    const [statusAtivo] = useState<StatusType>(status);

    const navigate = useNavigate();

    const irParaPedido = () => {
        navigate(`/Pedidos/${id}`);
    };

    const formatDate = (datetime: string) => {
        const date = new Date(datetime);
        return (
            date.toLocaleDateString("pt-BR") +
            " " +
            date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
        );
    };

    const formatCurrency = (value: string | number) => {
        const numberValue = typeof value === "string" ? parseFloat(value) : value;
        return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(numberValue);
    };

    const getStatusColor = (status: StatusType) => {
        switch (status) {
            case "Preparando":
                return "#6796FF";
            case "Enviado":
            case "Disponível para Retirada":
                return "#DE96FA";
            case "Finalizado":
                return "#A0E393";
            case "Cancelado":
                return "#e26262ff";
            default:
                return "#6796FF";
        }
    };

    return (
        <styled.ContainerCardPedido>
            <styled.ContainerInfos>
                <Box
                    component="img"
                    src={img}
                    sx={{
                        width: "7.6rem",
                        height: "7.6rem",
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.2)",
                    }}
                />
                <Stack
                    sx={{
                        marginLeft: "3.5%",
                        width: "100%",
                        [theme.breakpoints.down("md")]: {
                            alignItems: "center",
                            textAlign: "center",
                            marginLeft: 0,
                        },
                    }}
                >
                    <Typography level="body-lg">{nome}</Typography>
                    <Typography level="body-lg">Pedido: #{id}</Typography>
                    <Stack direction={{ sm: "column", md: "row" }} alignItems="center" gap={0.5}>
                        <Typography>Data da Compra: </Typography>
                        <Typography level="body-sm">{formatDate(data)}</Typography>
                    </Stack>
                    <Stack direction={{ sm: "column", md: "row" }} alignItems="center" gap={0.5}>
                        <Typography>Forma de Pagamento: </Typography>
                        <Typography level="body-sm">{formaPagamento}</Typography>
                    </Stack>
                    <Stack direction={{ sm: "column", md: "row" }} alignItems="center" gap={0.5}>
                        <Typography>Total Compra: </Typography>
                        <Typography level="body-sm">{formatCurrency(totalCompra)}</Typography>
                    </Stack>
                </Stack>
            </styled.ContainerInfos>

            <styled.ContainerBtn>
                <Typography>Atualizar Status:</Typography>
                <Box
                    sx={{
                        backgroundColor: getStatusColor(statusAtivo),
                        color: "#fff",
                        padding: "0.6rem 0rem",
                        borderRadius: "12px",
                        width: '100%',
                        fontWeight: 600,
                        textAlign: "center",
                    }}
                >
                    {statusAtivo}
                </Box>

                <Button onClick={irParaPedido} espacamento={70} tamanho="md">
                    Ver Detalhes
                </Button>
            </styled.ContainerBtn>
        </styled.ContainerCardPedido>
    );
};
