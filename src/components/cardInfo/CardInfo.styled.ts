import { Card, Stack, styled } from "@mui/material"

export const CardInfo = styled(Card, {
    shouldForwardProp: (prop) => prop !== "tamanho",
})<{
    tamanho: "md" | "lg"
}>(({ theme, tamanho }) => {
    const sizeMap = {
        md: { height: "9.5rem", width: "18rem" },
        lg: { height: "10rem", width: "19rem" },
    }

    const { height, width } = sizeMap[tamanho]

    return {
        width,
        height,
        padding: "2% 2%",
        display: "flex",
        flex: "1",
        position: "relative",
        borderRadius: "14px",
        backgroundColor: "#fff",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        boxSizing: "border-box",
        flexDirection: tamanho === "lg" ? "row" : "column",
        cursor: "pointer",
        textAlign: "center",
        fontSize: "1rem",
        color: "#0a0a0a",
        justifyContent: "space-between",
        transition: "transform 0.2s ease-in-out",

        "&:hover": {
            transform: "scale(1.05, 1.05)",
        },

        [theme.breakpoints.down("sm")]: {
            width: tamanho === "md" ? "14rem" : "15rem",
            height: tamanho === "md" ? "7rem" : "8rem",
            fontSize: "0.9rem",
            padding: "1rem",
        },
    }
})

export const StackIcon = styled(Stack, {
    shouldForwardProp: (prop) => prop !== "colorKey",
})<{
    colorKey: "blue" | "green" | "purple" | "orange"
}>(({ theme, colorKey }) => {
    const colorMap = {
        blue: { backgroundColor: "#DBEAFE" },
        green: { backgroundColor: "#DCFCE7" },
        purple: { backgroundColor: "#F3E8FF" },
        orange: { backgroundColor: "#FFEDD5" },
    }

    return {
        backgroundColor: colorMap[colorKey].backgroundColor,
        borderRadius: "50%",
        padding: "0.5rem",
        height: "2.25rem",
        width: "2.25rem",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",

        [theme.breakpoints.down("sm")]: {
            height: "1.8rem",
            width: "1.8rem",
            padding: "0.4rem",
        },
    }
})
