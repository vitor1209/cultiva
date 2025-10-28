import { Container, styled } from "@mui/material";
import { LoginBackground } from "../../assets/index";

export const ContainerAuth = styled(Container)(() => ({
  backgroundImage: `url(${LoginBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
