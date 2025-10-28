import { Stack, styled } from "@mui/material"

export const Container = styled(Stack)(() => ({
    minHeight: "100vh",
    overflowX: "hidden",
}))

export const Division = styled(Stack)(() => ({
    padding: "3% 0",
}))

export const ContainerFull = styled(Stack)(() => ({
    minHeight: "16.875rem",
    width: "100%",
    overflowX: "hidden",
    backgroundColor: "#d8d3d0ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))

export const Session = styled(Stack)(() => ({
    width: "60%", // largura interna padrão
    display: "flex",
    padding: "8% 0",
    alignItems: "center",
    justifyContent: "center",
    "& h1": {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        fontFamily: "Arimo",
        color: "#0a0a0a",
        textAlign: "center",
        display: "inline-block",
    },
    "& p": {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        fontFamily: "Arimo",
        color: "#717182",
        textAlign: "center",
        display: "inline-block",
    },
}))
