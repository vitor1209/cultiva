import { ButtonBase, styled } from "@mui/material";

export const ButtonVariants = styled(ButtonBase, {
    shouldForwardProp: prop =>
        prop !== "tamanho" && prop !== "espacamento" && prop !== "variante",
})<{
    tamanho: "sm" | "md" | "lg" | "xl";
    espacamento: number;
    variante: "ButtonGreen" | "ButtonLinkBlack";
}>(({ tamanho, espacamento, variante }) => {
    const sizeMap = {
        sm: { height: 30, fontSize: 14 },
        md: { height: 37, fontSize: 17 },
        lg: { height: 44, fontSize: 10.6 },
        xl: { height: 51, fontSize: 24.2 },
    };

    const { height, fontSize } = sizeMap[tamanho] || sizeMap["md"];

    return {
        width: "auto",
        height,
        paddingInline: espacamento,
        fontSize,
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
        }),
        ...(variante === "ButtonLinkBlack" && {
            background: "transparent",
            color: "Black",
            "&:hover": { opacity: 0.5 },
        }),
    };
});
