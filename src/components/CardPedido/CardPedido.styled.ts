import { styled } from "@mui/material/styles"
import { Stack } from "@mui/material"

export const ContainerCardPedido = styled(Stack)(({ theme }) => ({
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderRadius: "25px",
    padding: "1.25rem 1.5rem",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    textAlign: "start",
    gap: "1rem",

    // Responsividade
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "1rem",
        width: "95%",
    },
    [theme.breakpoints.down("sm")]: {
        padding: "1rem 0.5rem",
        width: "92%",
    },
}))

export const ContainerInfos = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    gap: "1rem",

    [theme.breakpoints.down("md")]: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
    },
}))

export const ContainerBtn = styled(Stack)(({ theme }) => ({
    justifyContent: "space-around",
    alignItems: "flex-start",
    gap: "1rem",

    [theme.breakpoints.down("md")]: {
        width: "100%",
        alignItems: "center",
    },
}))
