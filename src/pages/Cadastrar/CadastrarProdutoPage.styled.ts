import { Stack, styled } from "@mui/material"

export const ContainerInputs = styled(Stack)(() => ({
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: "3% 0%",
    borderRadius: "30px",
    boxSizing: "border-box",
    width: "100%",
}))

export const BoxInputs = styled(Stack)(() => ({
    alignItems: "center",
    flex: 3,
    justifyContent: "space-between",
    flexDirection: "column",
    textAlign: "start",
}))

export const BoxFoto = styled(Stack)(() => ({
    alignItems: "center",
    flex: 4,
}))

export const input = styled(Stack)(() => ({
    width: "72%",
    justifyContent: "center",
    marginBottom: "1.2%",
}))
