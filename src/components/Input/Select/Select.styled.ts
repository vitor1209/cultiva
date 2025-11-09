import { Select, styled } from "@mui/material"
import type { StyledSelectProps } from "./SelectControlado.types"

export const SelectInput = styled(Select)<
    StyledSelectProps & { isPlaceholder?: boolean; bgcolor?: string }
>(({ padding, error, ladoSeta, isPlaceholder, bgcolor }) => ({
    width: "100%",
    borderRadius: 8,
    backgroundColor: bgcolor ?? "#e9e7e7ff",
    border: "1px solid transparent",
    boxSizing: "border-box",
    overflow: "hidden",
    outline: "none",
    fontSize: "0.9rem",
    transition: "border-color 0.2s, box-shadow 0.2s",
    flexShrink: 0,

    ...(error && {
        border: "1px solid #F04438",
        backgroundColor: "#fef3f2",
    }),

    "&:hover": {
        borderColor: error ? "#F04438" : "#000",
    },

    "&.Mui-focused": {
        borderColor: error ? "#F04438" : "#000",
        boxShadow: error ? "0 0 0 2px rgba(240, 68, 56, 0.2)" : "0 0 0 2px rgba(0, 0, 0, 0.1)",
    },

    ".MuiSelect-select": {
        fontSize: 14.4,
        fontWeight: 400,
        color: isPlaceholder ? "#667085" : "#101828",
        padding: `${
            padding ?? (ladoSeta === "esquerda" ? "8px 12px 8px 40px" : "8px 40px 8px 12px")
        } !important`,
        borderRadius: 8,
    },

    // Centraliza e aumenta a seta
    "& .MuiSelect-icon": {
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "1.4rem",
        color: "#101828",
        pointerEvents: "none",

        ...(ladoSeta === "esquerda"
            ? {
                  left: "10px !important",
                  right: "auto !important",
              }
            : {
                  right: "10px !important",
                  left: "auto !important",
              }),
    },

    ".MuiOutlinedInput-notchedOutline": {
        border: "none !important",
    },

    "& .MuiList-root": {
        padding: "4px 0",
    },

    // Bordas inferiores no estilo do InputForm
    "&.MuiInput-root::before": {
        borderBottom: "1px solid #000",
    },

    "&.MuiInput-root::after": {
        borderBottom: "2px solid #000",
    },

    "&:hover:not(.Mui-disabled, .Mui-error):before": {
        borderBottom: "1px solid #000",
    },

    "& .MuiMenuItem-root": {
        fontSize: 14,
        borderRadius: 6,
        transition: "background 0.2s ease",
        "&:hover": {
            backgroundColor: "rgb(246, 247, 248)",
        },
        "&.Mui-selected": {
            backgroundColor: "rgb(246, 247, 248) !important",
        },
    },
}))

export const SpanHelperText = styled("span")(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.secondary.main,
    marginTop: theme.spacing(0.5),
}))

export const SpanErro = styled("span")(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.error.main,
    marginTop: theme.spacing(0.5),
}))
