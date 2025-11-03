import { Select } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledSelect = styled(Select)({
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ccc",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "#4caf50",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#4caf50",
        borderWidth: 2,
    },
})
