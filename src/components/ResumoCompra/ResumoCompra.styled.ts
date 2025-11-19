import { Card, Stack, styled, Divider, Button } from "@mui/material"

export const CardResumo = styled(Card)(() => ({
    padding: "1.5rem",
    borderRadius: "18px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    width: "85%",
    maxWidth: "420px",
    margin: "0 auto",
}))

export const Linha = styled(Divider)(() => ({
    margin: "1rem 0",
    backgroundColor: "#e5e7eb",
}))

export const LinhaTotal = styled(Divider)(() => ({
    margin: "1rem 0",
    backgroundColor: "#e5e7eb",
}))

export const RowValor = styled(Stack)(() => ({
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
}))

export const BotaoFinalizar = styled(Button)(() => ({
    backgroundColor: "#16A34A",
    color: "#fff",
    padding: "0.8rem",
    borderRadius: "10px",
    fontWeight: 600,
    "&:hover": {
        backgroundColor: "#15803D",
    },
}))

export const BotaoSecundario = styled(Button)(() => ({
    backgroundColor: "#fff",
    border: "1px solid #e5e7eb",
    padding: "0.8rem",
    borderRadius: "10px",
    fontWeight: 500,
    color: "#404040",
}))
