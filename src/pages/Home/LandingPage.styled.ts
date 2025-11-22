import { Stack, Box, styled, keyframes } from "@mui/material"

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




const moverGradiente = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const CTABox = styled(Stack)(() => ({
    padding: "4rem 1rem",
    background: "linear-gradient(135deg, #E8F5E9 0%, #bde6aaff 50%, #daffa3ff 100%)",
    backgroundSize: "300% 300%",
    animation: `${moverGradiente} 4s ease infinite`,
    color: "#fff",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    "& h2": {

        marginBottom: "2rem"
    }

}));


export const HeroContainer = styled(Box)(() => ({
    padding: "6rem 2rem",
    background: "linear-gradient(135deg, #E8F5E9 0%, #bde6aaff 50%, #daffa3ff 100%)",
    backgroundSize: "300% 300%",
    animation: `${moverGradiente} 5s ease infinite`,
    display: "flex",
    justifyContent: "center",
    height: "auto",

    "@media (min-width: 900px)": {
        height: "45rem"
    }
}));