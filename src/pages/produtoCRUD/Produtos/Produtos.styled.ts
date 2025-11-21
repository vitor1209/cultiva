import { Stack, styled } from "@mui/material"

export const Division = styled(Stack)(() => ({
    padding: "3% 0",
}))

export const Produto = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "start",
    gap: "2rem",

    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        textAlign: "center",
        gap: "1.5rem",
    },
}))

export const imagem = styled(Stack)(({ theme }) => ({
    flex: 3,
    marginRight: "8%",
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("md")]: {
        marginRight: 0,
        width: "auto",
    },
}))

export const texto = styled(Stack)(({ theme }) => ({
    flex: 4,
    width: "100%",
    gap: "1rem",

    [theme.breakpoints.down("md")]: {
        alignItems: "center",
        textAlign: "center",
    },
}))
