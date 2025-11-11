import { Stack, styled } from "@mui/material"

export const Division = styled(Stack)(() => ({
    padding: "3% 0",
}))

export const Produto = styled(Stack)(() => ({
    flexDirection: "row",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "space-between",
}))

export const imagem = styled(Stack)(() => ({
    flex: "3",
    marginRight: "8%",
}))

export const texto = styled(Stack)(() => ({
    flex: "4",
    gap: "3",
    width: "100%",
}))
