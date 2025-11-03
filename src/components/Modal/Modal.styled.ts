import { Box, IconButton, Stack } from "@mui/material"
import { styled } from "@mui/system"

export const Container = styled(Box)(({ theme }) => ({
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
    borderRadius: "16px",
    padding: theme.spacing(4),
    width: "90%",
    maxWidth: "420px",
    textAlign: "center",
    zIndex: 1300,

    [theme.breakpoints.down("sm")]: {
        width: "70%",
    },
}))

export const CloseButton = styled(IconButton)({
    position: "absolute",
    top: 12,
    right: 12,
})

export const SuccessIconWrapper = styled(Stack)({
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
})
