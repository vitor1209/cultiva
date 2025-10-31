import { Input } from "@mui/material"
import { styled } from "@mui/material/styles"

export const InputForm = styled(Input)(() => ({
    width: "100%",
    padding: "8px 10px",
    borderRadius: "8px",
    backgroundColor: "#e9e7e7ff",
    border: "1px solid transparent",
    boxSizing: "border-box",
    overflow: "hidden",
    outline: "none",
    fontSize: "0.9rem",
    flexShrink: 0,
    alignItems: "flex-start",
    transition: "border-color 0.2s, box-shadow 0.2s",

    "&.MuiInput-root::before": {
        borderBottom: "1px solid #000",
    },

    "&.MuiInput-root::after": {
        borderBottom: "2px solid #000",
    },

    "&:hover:not(.Mui-disabled, .Mui-error):before": {
        borderBottom: "1px solid #000",
    },
}))
