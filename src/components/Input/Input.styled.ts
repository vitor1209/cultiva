import { Input } from "@mui/material"
import { styled } from "@mui/material/styles"

export const InputForm = styled(Input)(() => ({
    width: "100%",
    padding: "10px 14px",
    borderRadius: "8px",
    backgroundColor: "#f3f3f5",
    border: "1px solid rgba(0, 0, 0, 0)",
    boxSizing: "border-box",
    overflow: "hidden",
    outline: "none",
    fontSize: "0.9rem",
    transition: "border-color 0.2s, box-shadow 0.2s",

    "&:focus": {
        borderColor: "#000",
        boxShadow: "0 0 0 1px #000",
    },
}))
