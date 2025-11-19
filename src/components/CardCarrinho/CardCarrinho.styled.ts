import { Card, IconButton, Stack, Typography, styled } from "@mui/material"

export const ProductCard = styled(Card)(({ theme }) => ({
    width: "90%",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "16px",
    border: "1px solid rgba(0,0,0,0.1)",
    boxSizing: "border-box",
    gap: "1rem",
    transition: "0.2s ease",

    [theme.breakpoints.down("sm")]: {
        width: "90%",
        flexDirection: "column",
        alignItems: "center",
        padding: "0.9rem",
        gap: "0.7rem",
    },
}))

export const Image = styled("img")(({ theme }) => ({
    width: "110px",
    height: "110px",
    borderRadius: "12px",
    objectFit: "cover",

    [theme.breakpoints.down("sm")]: {
        width: "80px",
        height: "80px",
        borderRadius: "10px",
    },
}))

export const InfoWrapper = styled(Stack)(({ theme }) => ({
    flex: 1,
    gap: "0.2rem",

    [theme.breakpoints.down("sm")]: {
        gap: "0.1rem",
    },
}))

export const Price = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    color: "#21a12a",

    [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
    },
}))

export const QuantityButton = styled(IconButton)(({ theme }) => ({
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "40px",
    height: "40px",

    "& svg": {
        fontSize: "1.1rem",
    },

    [theme.breakpoints.down("sm")]: {
        width: "30px",
        height: "30px",

        "& svg": {
            fontSize: "0.95rem",
        },
    },
}))

export const TrashButton = styled(IconButton)(({ theme }) => ({
    color: "#e63946",
    marginLeft: "0.5rem",

    [theme.breakpoints.down("sm")]: {
        marginLeft: 0,
        padding: "4px",
        "& svg": {
            fontSize: "1.1rem",
        },
    },
}))
