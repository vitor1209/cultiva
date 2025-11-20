import React from 'react';
import { Box, Typography, Grid, Button, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

interface DataFieldProps {
  label: string;
  value: string;
}

const DataField: React.FC<DataFieldProps> = ({ label, value }) => (
  <Grid size={{ xs: 12, sm: 6 }}>

    <Box sx={{ mb: 2 }}>

      <Typography
        variant="subtitle2"
        color="text.secondary"
        sx={{ mb: 0.5 }}
      >
        {label}
      </Typography>

      <Typography
        variant="body1"
        color="text.primary"
        sx={{ fontWeight: 500 }}
      >
        {value}
      </Typography>
    </Box>
  </Grid>
);


// 2. Tipagem para o componente principal (Props vazias, mas tipado)
const Historico = () => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        mt: 3,
        mb: 5,
        ml: 5,
        mr: 5,
        borderRadius: '8px',
        boxShadow: 'none',

      }}
    >

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Histórico
        </Typography>

        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            py: 1,
            px: 2,
            borderColor: 'primary.main',
            color: 'primary.main',
          }}
        >
          Editar
        </Button>
      </Box>

      <Grid container spacing={4}>

        <DataField label="Nome completo" value="Usuário Exemplo" />
        <DataField label="E-mail" value="tyr@fr" />

        <DataField label="CPF" value="123.456.789-00" />
        <DataField label="CEP" value="12345-678" />

        <DataField label="Telefone" value="(11) 98765-4321" />
        <DataField label="Endereço" value="Rua das Hortas, 123" />

      </Grid>

    </Paper>
  );
};

export default Historico;