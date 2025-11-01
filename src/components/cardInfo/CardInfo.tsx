import { Stack } from "@mui/material";
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
        <>
            {tamanho === "lg" ? (
                <styled.CardInfo tamanho={tamanho}>
                    <Stack justifyContent="space-between" direction="column">
                        <Typography level="body-sm">{name}</Typography>

                        <Stack alignSelf="start" textAlign="start">
                            <Typography fontSize="1.5rem">{valor}</Typography>
                            <Typography fontSize="0.875rem" level="body-sm" color="success">
                                {acrescimo}
                            </Typography>
                        </Stack>
                    </Stack>

                    {/* Ícone à direita */}
                    <styled.StackIcon colorKey={color}>
                        <Icon stroke={color} size={24} />
                    </styled.StackIcon>
                </styled.CardInfo>
            ) : (
                <styled.CardInfo tamanho={tamanho}>

                    <styled.StackIcon colorKey={color} sx={{ alignSelf: "center" }}>
                        <Icon stroke={color} size={24} />
                    </styled.StackIcon>

                    <Stack justifyContent="space-evenly" direction="column">
                        <Typography fontSize="1rem" level="body-sm" sx={{ color: "#000" }}>{name}</Typography>
                        <Typography level="body-sm" fontSize="0.875rem">{valor}</Typography>
                    </Stack>
                </styled.CardInfo >
            )
            }
        </>
    );
}
