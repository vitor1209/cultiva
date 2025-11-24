import { Box, Typography, Paper, CircularProgress } from "@mui/material";
import { useGetPedidosConsumidor } from "../../../controllers/pedido.controller";

type StatusType =
  | "Preparando"
  | "Enviado"
  | "Disponível para Retirada"
  | "Finalizado"
  | "Cancelado";

const mapStatus = (statusNumber: number): StatusType => {
  switch (statusNumber) {
    case 1:
      return "Preparando";
    case 2:
      return "Enviado";
    case 3:
      return "Disponível para Retirada";
    case 4:
      return "Finalizado";
    case 5:
      return "Cancelado";
    default:
      return "Preparando";
  }
};

const getStatusColor = (status: StatusType) => {
  switch (status) {
    case "Finalizado":
      return "success.main";
    case "Preparando":
    case "Enviado":
    case "Disponível para Retirada":
      return "warning.main";
    case "Cancelado":
      return "error.main";
    default:
      return "text.secondary";
  }
};

const Historico = () => {
  const { data, isLoading, isError } = useGetPedidosConsumidor();

  if (isLoading) return <CircularProgress />;

  if (isError)
    return <Typography color="error">Erro ao carregar pedidos</Typography>;

  const pedidos = data?.pedidos ?? [];

  if (pedidos.length === 0)
    return <Typography sx={{ mt: 3 }}>Nenhum pedido encontrado.</Typography>;

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
        mb={4}
        sx={{ mb: 3, textAlign: "center" }}
        fontFamily={"Anybody"}
      >
        Histórico de Pedidos
      </Typography>

      {[...pedidos].reverse().map((pedido) => {
        const statusText = mapStatus(pedido.status);

        const dataFormatada = new Date(pedido.data_hora).toLocaleDateString(
          "pt-BR",
          { day: "2-digit", month: "2-digit", year: "numeric" }
        )

        return (
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
            <Box>
              <Typography
                variant="subtitle1"
                fontWeight={600}
                fontFamily={'"Anybody", "Inter", sans-serif"'}
              >
                Pedido #{pedido.id}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                Data: {dataFormatada}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  color: getStatusColor(statusText),
                  fontWeight: 600,
                }}
              >
                {statusText}
              </Typography>
            </Box>

            <Box textAlign="right">
              <Typography variant="subtitle1" fontWeight={600}>
                R$ {pedido.preco_final != null ? pedido.preco_final.toFixed(2) : "-"}
              </Typography>
            </Box>
          </Paper>
        );
      })}
    </Paper>
  );
};

export default Historico;