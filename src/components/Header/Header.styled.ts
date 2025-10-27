import { AppBar, styled } from "@mui/material"

export const HeaderContainer = styled(AppBar)(() => ({
    top: 0,
    position: "fixed",
    minHeight: 70,
    paddingInline: "5%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    color: "#0A0A0A",
}))
