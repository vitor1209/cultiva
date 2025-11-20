import { Card, CardContent, Box, Typography } from "@mui/material";
import type { CardPedidosProps } from "./CardPedidos.types";


export function CardPedidos({ image, nome, data, status }: CardPedidosProps) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        width: "290px",
        borderRadius: "12px",
        padding: "12px",
        boxShadow: "none",
        border: "1px solid #eee",
      }}
    >
      <Box
        component="img"
        src={image}
        alt={nome}
        sx={{
          width: 60,
          height: 60,
          borderRadius: "8px",
          objectFit: "cover",
          mr: 2,
        }}
      />

      <CardContent sx={{ padding: "0 !important" }}>
        <Typography fontSize={16} fontWeight={600}>
          {nome}
        </Typography>
        <Typography fontSize={14} color="#666">
          {data}
        </Typography>
        <Typography fontSize={14} color="green" fontWeight={600}>
          {status}
        </Typography>
      </CardContent>
    </Card>
  );
}
