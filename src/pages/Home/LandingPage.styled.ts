import { Stack, Box, styled } from "@mui/material"

export const boxName = styled(Box)(() => ({
    width: "100%",
    height: "6rem",
    position: "relative",
    background: "#00a63e",
    textAlign: "left",
    fontSize: "1rem",
    color: "#fff",
    fontFamily: "Arimo",
    padding: "0 0 2.5rem 0",
    gap: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "end",
}))

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
    padding: "5% 0",
    alignItems: "center",
    justifyContent: "center",
    "& h2": {
        lineHeight: "1.5rem",
        fontFamily: "Anybody",
        color: "#0a0a0a",
        textAlign: "center",
        display: "inline-block",
        marginBottom: "2rem"
    },
    "& p": {
        lineHeight: "1.5rem",
        fontFamily: "Arimo",
        color: "#717182",
        textAlign: "center",
        display: "inline-block",
        marginBottom: "2rem"

    },
}))


export const Hero = styled(Stack)(() => ({
    padding: "4rem 1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #d6ffcb 0%, #a4e6b7 100%)",
    textAlign: "center",
    height: "25rem"
}));


export const CTABox = styled(Stack)(() => ({
    padding: "4rem 1rem",
    background: "linear-gradient(135deg, #deffd4ff 5%, #50b66dff 100%)",
    color: "#fff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
}));