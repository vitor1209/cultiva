
import { Box, Typography, Paper } from "@mui/material";

interface Pedido {
  id: string;
  data: string;
  status: "Finalizado" | "Em preparo";
  valor: string;
}

const pedidos: Pedido[] = [
  { id: "001", data: "19/10/2025", status: "Finalizado", valor: "R$ 45,50" },
  { id: "002", data: "15/10/2025", status: "Em preparo", valor: "R$ 32,00" },
  { id: "003", data: "10/10/2025", status: "Finalizado", valor: "R$ 28,90" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Finalizado":
      return "success.main";
    case "Em preparo":
      return "warning.main";
    default:
      return "text.secondary";
  }
};

const Historico = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        mt: 3,
        mb: 5,
        mx: 5,
        borderRadius: "12px",
        boxShadow: "none",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        sx={{ mb: 3, textAlign: "left" }}
        fontFamily={'"Anybody", "Inter", sans-serif'}
      > 
        Histórico de Pedidos
      </Typography>

      {pedidos.map((pedido) => (
        <Paper
          key={pedido.id}
          elevation={0}
          sx={{
            p: 3,
            mb: 2,
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* ESQUERDA */}
          <Box>
            <Typography variant="subtitle1" fontWeight={600} fontFamily={'"Anybody", "Inter", sans-serif'}>
              Pedido #{pedido.id}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mt: 0.5 }}
            >
              Data: {pedido.data}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: getStatusColor(pedido.status),
                fontWeight: 600,
              }}
            >
              {pedido.status}
            </Typography>
          </Box>

          {/* DIREITA */}
          <Box textAlign="right">
            <Typography variant="subtitle1" fontWeight={600}>
              {pedido.valor}
            </Typography>

            
          </Box>
        </Paper>
      ))}
    </Paper>
  );
};

export default Historico;
