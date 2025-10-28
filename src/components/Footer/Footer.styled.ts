import { Box, styled } from "@mui/material"

export const ContainerFooter = styled(Box)(() => ({
    backgroundColor: "#ebebf0",
    padding: "3% 0 5% 0",
    width: "100%",
    textAlign: "start",
    margin: "0",
    overflow: "hidden",

    "& .MuiTypography-root": {
        lineHeight: 2,
        color: "#555",
    },
    "& hr": {
        width: "100%",
        border: "1px solid #dcdcdc",
        margin: "1.5% 0",
    },
}))
