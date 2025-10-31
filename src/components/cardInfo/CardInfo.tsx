import { Box, Stack } from "@mui/material";
import * as styled from "./CardInfo.styled";
import type { CardInfoProps } from "./CardInfo.types";
import Typography from "@mui/joy/Typography";

export default function CardInfo({
    name,
    valor,
    color,
    acrescimo,
    tamanho,
    icon: Icon,
}: CardInfoProps) {
    return (
        <styled.CardInfo tamanho={tamanho}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
            >
                {/* Texto à esquerda */}
                <Stack>
                    <Typography level="body-sm" color="neutral">
                        {name}
                    </Typography>
                    <Typography level="h3">{valor}</Typography>
                    <Typography level="body-xs" color="success">
                        {acrescimo}
                    </Typography>
                </Stack>

                {/* Ícone à direita */}
                <Box
                    sx={{
                        backgroundColor: "rgba(0, 122, 255, 0.1)",
                        borderRadius: "50%",
                        padding: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Icon stroke={color} size={24} />
                </Box>
            </Stack>
        </styled.CardInfo>
    );
}
