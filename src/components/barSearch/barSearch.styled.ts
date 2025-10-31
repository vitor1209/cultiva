import { styled } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"

export const Search = styled("div")(() => ({
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2%",
    borderRadius: "8px",
    padding: "0 2% 0 2%",
    backgroundColor: "#f2f2f5",
    "&:hover": {
        filter: "brightness(80%)",
    },
    marginLeft: 0,
    transition: "ease-in-out 0.3s",
    width: "100%",
}))

export const SearchIconWrapper = styled("div")(() => ({
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        transition: theme.transitions.create("width"),
    },
}))
