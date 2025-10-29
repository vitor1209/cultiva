import { Container, styled } from "@mui/material"

export const ContainerAuth = styled(Container)(() => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    overflow: "hidden",

    ".fundo": {
        flexDirection: "row",
        justifyContent: "end",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
    },
}))
