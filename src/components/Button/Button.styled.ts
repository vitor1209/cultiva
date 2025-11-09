import { ButtonBase, styled } from "@mui/material"

export const ButtonVariants = styled(ButtonBase, {
    shouldForwardProp: (prop) => prop !== "tamanho" && prop !== "espacamento" && prop !== "variante",
})<{
    tamanho: "sm" | "md" | "lg" | "xl"
    espacamento: number
    variante:
        | "ButtonGreen"
        | "ButtonLinkBlack"
        | "ButtonLinkGreen"
        | "ButtonOrange"
        | "ButtonRed"
        | "ButtonLinkRed"
}>(({ tamanho, espacamento, variante }) => {
    const sizeMap = {
        sm: { height: 30, fontSize: 14 },
        md: { height: 37, fontSize: 17 },
        lg: { height: 44, fontSize: 10.6 },
        xl: { height: 51, fontSize: 24.2 },
    }

    const { height, fontSize } = sizeMap[tamanho] || sizeMap["md"]

    return {
        width: "auto",
        minHeight: height,
        paddingInline: espacamento,
        fontSize,
        overflow: "hidden",
        fontFamily: '"Anybody", "Inter", sans-serif',
        borderRadius: 8,
        fontWeight: 500,
        alignItems: "center",
        gap: 10,
        transition: "opacity 0.5s",
        textDecoration: "none",
        color: "inherit",
        "&:hover": { filter: "brightness(80%)" },
        "&:disabled, &.disabled": {
            opacity: 0.8,
            background: "grey !important",
            color: "white !important",
            cursor: "not-allowed",
            pointerEvents: "none",
        },
        ...(variante === "ButtonGreen" && {
            backgroundColor: "#00A63E",
            color: "#FFFFFF",
            transition: " 0.5s",
        }),
        ...(variante === "ButtonLinkBlack" && {
            background: "transparent",
            color: "Black",
            "&:hover": { opacity: 0.5 },
        }),
        ...(variante === "ButtonLinkGreen" && {
            background: "transparent",
            color: "#00A63E",
            "&:hover": { opacity: 0.5 },
        }),

        ...(variante === "ButtonOrange" && {
            backgroundColor: "#F54900",
            color: "#FFFFFF",
            transition: " 0.5s",
        }),
        ...(variante === "ButtonRed" && {
            backgroundColor: "#D4183D",
            color: "#FFFFFF",
            transition: " 0.5s",
        }),
        ...(variante === "ButtonLinkRed" && {
            background: "transparent",
            color: "#D4183D",
            "&:hover": { opacity: 0.5 },
        }),
    }
})
