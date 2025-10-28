import { Card, styled } from "@mui/material";

export const ProductCardStyled = styled(Card)<{ tipoCard?: string }>(
    ({ tipoCard }) => ({
        height: tipoCard === "Horta" ? "21rem" : "29.25rem",
        width: 300,
        maxWidth: "100%",
        boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
        borderRadius: "1rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        justifyContent: "space-around",
        transition: "transform 0.2s ease-in-out",
        position: "relative", // para o link

        "&:hover": {
            transform: "scale(1.05, 1.05)",
        },

        ".center": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            textAlign: "center",
            margin: "0 0 7% 0",
        },
        ".cardContainer": {
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "space-evenly",
            width: "100%",
            gap: "0.5rem",
            flexWrap: "wrap",
            padding: "3% 0 8% 3%",
        },

        ".inline-item": {
            flex: 1,
            textAlign: "center",
        },
    }),
);
