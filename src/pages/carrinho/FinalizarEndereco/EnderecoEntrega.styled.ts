import { Card, Stack, styled, Typography, RadioGroup } from "@mui/material"

export const CardEntrega = styled(Card)(({ theme }) => ({
    width: "80%",
    padding: "2.5rem",
    borderRadius: "14px",
    background: "#fff",
    boxShadow: "0px 1px 3px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
    textAlign: "start",

    [theme.breakpoints.down("sm")]: {
        padding: "1.5rem",
        gap: "2rem",
    },
}))

export const Title = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    fontWeight: 600,
    color: "#000",

    [theme.breakpoints.down("sm")]: {
        fontSize: "1.2rem",
    },
}))

export const RadioContainer = styled(RadioGroup)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
}))

export const GridForm = styled(Stack)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",

    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "1fr",
    },
}))

export const Collapse = styled("div")<{ open: boolean }>(({ open }) => ({
    overflow: "hidden",
    maxHeight: open ? "1000px" : "0px",
    opacity: open ? 1 : 0,
    transition: "all 0.35s ease",
}))

export const Col = styled(Stack)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
}))
