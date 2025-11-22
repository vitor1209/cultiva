import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Relatorio: React.FC = () => {
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
      {/* Título */}
      <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
        Relatórios de Vendas
      </Typography>

      {/* Cards superiores */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 3,
          mb: 5,
        }}
      >
        {/* CARD 1 */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
            textAlign: "center",
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            Faturamento
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            R$ 3.240,00
          </Typography>
        </Paper>

        {/* CARD 2 */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
            textAlign: "center",
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            Pedidos do Mês
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            45
          </Typography>
        </Paper>

        {/* CARD 3 */}
        {/* <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: "12px",
            border: "1px solid #e0e0e0",
            textAlign: "center",
          }}
        >
          <Typography variant="subtitle2" color="text.secondary">
            Avaliação Média
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5 }}>
            <Typography variant="h6" fontWeight="bold">
              4.8
            </Typography>
            <StarIcon sx={{ color: "#f7c600" }} />
          </Box>
        </Paper> */}
      </Box>

      {/* Produtos Mais Vendidos */}
      <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
        Produtos Mais Vendidos
      </Typography>

      <Box sx={{ pl: 1 }}>
        {/* Item 1 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1.5,
          }}
        >
          <Typography>1. Alface Orgânica</Typography>
          <Typography color="text.secondary">39 vendas</Typography>
        </Box>

        {/* Item 2 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 1.5,
          }}
        >
          <Typography>2. Tomate Cereja</Typography>
          <Typography color="text.secondary">45 vendas</Typography>
        </Box>

        {/* Item 3 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>3. Cenoura Orgânica</Typography>
          <Typography color="text.secondary">37 vendas</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default Relatorio;
