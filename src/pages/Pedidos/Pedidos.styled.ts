import { styled } from "@mui/material/styles"
import { Stack } from "@mui/material"

export const ContainerPedidoDetalhado = styled(Stack)(({ theme }) => ({
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#fff",
    textAlign: "start",
    width: "97%",
    padding: "2%",
    borderRadius: "25px",
    gap: "2rem",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        width: "80%",
        padding: "4%",
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
    },
}))

export const ContainerDados = styled(Stack)(({ theme }) => ({
    justifyContent: "space-between",
    width: "55%",
    [theme.breakpoints.down("md")]: {
        width: "100%",
        textAlign: "center",
    },
}))

export const ContainerItens = styled(Stack)(({ theme }) => ({
    justifyContent: "space-between",
    padding: "0 1rem 0 2rem",
    width: "45%",
    [theme.breakpoints.down("md")]: {
        width: "100%",
        padding: "1rem 0 0 0",
    },
}))

export const texto = styled(Stack)(({ theme }) => ({
    gap: "5%",
    marginBottom: "3%",
    [theme.breakpoints.down("md")]: {
        gap: "2%",
        alignItems: "center",
    },
}))

export const Division = styled(Stack)(() => ({
    padding: "3% 0",
}))
