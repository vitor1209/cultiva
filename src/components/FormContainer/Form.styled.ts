import { Stack, styled } from "@mui/material"

export const FormContainer = styled(Stack)<{ acao: string }>(({ theme, acao }) => ({
    width: acao === "Login" ? "28rem" : "60rem",
    height: acao === "Login" ? "28rem" : "34rem",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderBottomLeftRadius: "30px",
    borderBottomRightRadius: "30px",
    backgroundColor: "rgba(236, 236, 240, 0.5)",
    textAlign: "left",
    fontSize: "14px",
    color: "#0a0a0a",
    fontFamily: "Arimo",
    justifyItems: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    overflow: "hidden",
    transition: "all 0.3s ease",

    [theme.breakpoints.down("md")]: {
        width: acao === "Login" ? "22rem" : "40rem",
        height: acao === "Login" ? "26rem" : "32rem",
    },
    [theme.breakpoints.down("sm")]: {
        width: "95%",
        height: "auto",
        borderRadius: "20px",
        paddingBottom: "1rem",
    },
}))

export const ImgStack = styled(Stack)<{ acao: string }>(({ theme, acao }) => ({
    width: "96%",
    padding: "0 0 0 4%",
    alignItems: acao === "Login" ? "center" : "start",
    justifyContent: "center",
    height: "3.5rem",
    backgroundColor: "#cac5c1ff",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    boxShadow: "inset 0px -1px 2px rgba(0,0,0,0.05)",
    transition: "all 0.3s ease",

    [theme.breakpoints.down("sm")]: {
        alignItems: "center",
        padding: 0,
        height: "3rem",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",

        "& img": {
            width: 100,
        },
    },
}))
