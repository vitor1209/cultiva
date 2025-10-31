import { Card, styled } from "@mui/material"

export const CardInfo = styled(Card)<{
    tamanho: "md" | "lg"
}>(({ tamanho }) => {
    const sizeMap = {
        md: { height: "1.25rem", width: "20rem" },
        lg: { height: "1rem", width: "19.5rem" },
    }

    const { height, width } = sizeMap[tamanho]

    return {
        width: width,
        height: height,
        display: "flex",
        flex: "1",
        position: "relative",
        borderRadius: "14px",
        backgroundColor: "#fff",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        flexDirection: "column",
        alignItems: "flex-start",
        cursor: "pointer",
        textAlign: "center",
        fontSize: "1rem",
        color: "#0a0a0a",
    }
})
