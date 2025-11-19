import { styled, Box } from "@mui/material"

export const Container = styled(Box)(() => ({
    width: "90%",
    margin: "0px auto",
    borderRadius: "16px",
    backgroundColor: "#f7f7fb",
    paddingTop: "4px",

    ".MuiTab-root": {
        textTransform: "none",
        fontSize: "0.95rem",
        color: "#555",
        minHeight: "46px",
        "&.Mui-selected": {
            backgroundColor: "#ffffff",
            fontWeight: 600,
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
            color: "#000",
        },
    },
}))

export const ContentBox = styled(Box)(() => ({
    backgroundColor: "#ffffff",
    padding: "25px 30px",
    borderRadius: "0 0 16px 16px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
    minHeight: "160px",
}))
