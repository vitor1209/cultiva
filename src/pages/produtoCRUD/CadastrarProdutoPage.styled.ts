import { Stack, styled } from "@mui/material"

export const ContainerInputs = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: "3% 0% 3% 2%",
    borderRadius: "30px",
    boxSizing: "border-box",
    width: "100%",

    ".css-1466lf0": {
        width: "15rem",
        height: "10rem",
    },
    // Responsividade: em telas pequenas, vira coluna
    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        padding: "6% 4%",
        borderRadius: "20px",
    },
}))

export const BoxInputs = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    flex: 2,
    justifyContent: "space-between",
    flexDirection: "column",
    textAlign: "start",
    width: "100%",

    [theme.breakpoints.down("lg")]: {
        width: "100%",
        marginTop: "2rem",
    },
}))

export const BoxFoto = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    flex: 2,

    [theme.breakpoints.down("md")]: {
        justifyContent: "center",
    },
}))

export const InputWrapper = styled(Stack)(({ theme }) => ({
    width: "90%",
    justifyContent: "center",
    marginBottom: "1.2%",
    flex: 1,

    [theme.breakpoints.down("lg")]: {
        width: "90%",
        marginBottom: "1.5rem",
    },

    [theme.breakpoints.down("sm")]: {
        width: "90%",
    },
}))

export const InputRow = styled(Stack)(() => ({
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1.5rem",

    "& > *": {
        flex: 1,
    },

    "@media (max-width: 768px)": {
        flexDirection: "column",
        gap: "1rem",
        "& > *": {
            width: "100%",
        },
    },
}))
