import { Card, Stack, Typography, styled } from "@mui/material"

export const ContainerResumo = styled(Card)(({ theme }) => ({
    width: "90%",
    padding: "2rem",
    borderRadius: "18px",
    boxSizing: "border-box",
    background: "#fff",
    border: "1px solid rgba(0,0,0,0.1)",

    [theme.breakpoints.down("sm")]: {
        padding: "1.5rem",
    },
}))

export const LinhaProduto = styled(Stack)(({ theme }) => ({
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 0",

    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.3rem",
    },
}))

export const NomeProduto = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: 500,

    [theme.breakpoints.down("sm")]: {
        fontSize: "0.95rem",
    },
}))

export const SubtituloProdutor = styled(Typography)(({ theme }) => ({
    fontSize: "0.9rem",
    color: "#7c7c90",

    [theme.breakpoints.down("sm")]: {
        fontSize: "0.85rem",
    },
}))

export const ValorProduto = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: 500,

    [theme.breakpoints.down("sm")]: {
        alignSelf: "flex-end",
    },
}))

export const Separador = styled("div")({
    width: "100%",
    height: "1px",
    background: "#e5e7eb",
    margin: "1rem 0",
})

export const LabelResumo = styled(Typography)({
    fontSize: "1.2rem",
    fontWeight: 600,
})

export const TotalValor = styled(Typography)({
    fontSize: "1.2rem",
    fontWeight: 600,
})
