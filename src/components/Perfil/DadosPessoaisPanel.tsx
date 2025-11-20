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

            <Box
                sx={{
                    backgroundColor: '#F7F7F7',
                    borderRadius: '8px',
                    px: 2,
                    py: 1.5,
                }}
            >
                <Typography
                    variant="body1"
                    color="text.primary"
                    sx={{ fontWeight: 500 }}
                >
                    {value}
                </Typography>
            </Box>
        </Box>
    </Grid>
);

const DadosPessoais = () => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 4,
                mt: 3,
                mb: 5,
                mx: 5,
                borderRadius: '12px',
                boxShadow: 'none',
            }}
        >
            {/* Cabeçalho */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 4
                }}
            >
                <Typography variant="h5" fontWeight="bold">
                    Dados Pessoais
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

            {/* Grid dos campos */}
            <Grid container spacing={4}>
                <DataField label="Nome" value="Exemplo: Horta da Aline" />
                <DataField label="Estado" value="São Paulo" />

                <DataField label="Telefone" value="123.456.789-00" />
                <DataField label="CEP" value="13045-230" />

                <DataField label="CEP" value="13045-230" />
                <DataField
                    label="Endereço"
                    value="Rua Bélgica, 55, Ribeirão Pires - SP"
                />
            </Grid>
        </Paper>
    );
};

export default DadosPessoais;
