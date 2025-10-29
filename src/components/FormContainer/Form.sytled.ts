import { Stack, styled } from "@mui/material"

export const FormContainer = styled(Stack)(() => ({
    width: "28rem",
    height: "28rem",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderBottomLeftRadius: "30px",
    borderBottomRightRadius: "30px",
    backgroundColor: "rgba(236, 236, 240, 0.5)",
    textAlign: "left",
    fontSize: "14px",
    color: "#0a0a0a",
    fontFamily: "Arimo",
    justifyItems: 'center',
    alignItems: "center",
    justifyContent: "space-evenly",
    overflow: "hidden",
}))

export const ImgStack = styled(Stack)(() => ({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "3.5rem",
    backgroundColor: "#cac5c1ff",
    borderTopLeftRadius: "30px",
    borderTopRightRadius: "30px",
    boxShadow: "inset 0px -1px 2px rgba(0,0,0,0.05)",
}))
