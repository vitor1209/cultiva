import { tabClasses } from "@mui/material/Tab";

export const tabsStyles = () => ({
  root: {
    backgroundColor: "#ECECF0",
    borderRadius: "30px",
    display: "flex",
    justifyContent: "center",
  },
  flexContainer: {
    position: "relative",
    zIndex: 1,
  },
  indicator: {
    borderRadius: "30px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "all 1s ease",
  },
});

export const tabItemStyles = () => ({
  root: {
    fontWeight: 500,
    minWidth: "50%",
    borderRadius: "30px",
    opacity: 0.7,
    color: '#000',
    textTransform: "none",
    fontSize: "0.9rem",
    transition: "all 0.5s ease",
    "&:hover": {
      opacity: 1,
      backgroundColor: "rgba(0,0,0,0.04)",
    },
    [`&.${tabClasses.selected}`]: {
      opacity: 1,
      color: '#000',
      backgroundColor: "#fff",
    },
    
  },
});
