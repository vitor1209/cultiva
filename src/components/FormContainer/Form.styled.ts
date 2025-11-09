import { Stack, styled } from "@mui/material"

export const FormContainer = styled(Stack)<{ acao: string }>(({ theme, acao }) => ({
    width: acao === "Login" ? "28rem" : "65rem",
    height: acao === "Login" ? "28rem" : "38.5rem",
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
        width: acao === "Login" ? "22rem" : "90%",
        height: acao === "Login" ? "auto" : "auto",
        flexDirection: "column",
    },

    [theme.breakpoints.down("sm")]: {
        width: "90%",
        height: "auto",
        padding: "1rem",
        justifyContent: "center",
        margin: "0 0 3rem 0 ",
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

    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
        alignItems: "center",
        width: acao === "Login" ? "96%" : "86%",
    },

    [theme.breakpoints.down("sm")]: {
        alignItems: "center",
        width: acao === "Login" ? "96%" : "97%",
        height: "3rem",
        margin: "3rem 0 0 0 ",

        "& img": {
            width: 100,
        },
    },
}))
