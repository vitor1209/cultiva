import { Input } from "@mui/material"
import { styled } from "@mui/material/styles"

export const InputForm = styled(Input)(() => ({
    width: "100%",
    padding: "8px 10px",
    borderRadius: "8px",
    backgroundColor: "#d3d3d3ff",
    border: "1px solid rgba(0, 0, 0, 0)",
    boxSizing: "border-box",
    overflow: "hidden",
    outline: "none",
    fontSize: "0.9rem",
    flexShrink: 0,
    alignItems: "flex-start",
    transition: "border-color 0.2s, box-shadow 0.2s",

    "&:focus": {
        borderColor: "#000",
        boxShadow: "0 0 0 1px #000",
    },
}))
