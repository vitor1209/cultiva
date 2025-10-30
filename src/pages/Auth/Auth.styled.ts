import { Container, styled } from "@mui/material";
import { LoginBackground } from "../../assets"; 

export const ContainerAuth = styled(Container)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  width: '100%',
  overflow: "hidden",
  position: "relative",
  backgroundImage: `url(${LoginBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  ".fundo": {
    flexDirection: "row",
    justifyContent: "end",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    pointerEvents: "none",
  },
}));
