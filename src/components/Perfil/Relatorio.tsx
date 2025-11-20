import React from 'react';
import { Box, Typography, Grid, Button, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

// 1. Tipagem para o DataField (props do componente auxiliar)
interface DataFieldProps {
    label: string;
    value: string;
}

// Componente para um Campo Individual de Visualização de Dados (Tipado)
const DataField: React.FC<DataFieldProps> = ({ label, value }) => (
    // Solução do Erro: Adicionar item={true} explicitamente se o TypeScript
    // estiver falhando em inferir que a presença de 'xs' ou 'sm' implica 'item'.
    <Grid size={{ xs: 12, sm: 6 }}>
        <Box sx={{ mb: 2 }}>
            {/* Rótulo (ex: Nome completo) */}
            <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ mb: 0.5 }}
            >
                {label}
            </Typography>

            {/* Valor (ex: Usuário Exemplo) */}
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
const Relatorio: React.FC = () => {
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

            {/* 1. Cabeçalho com Título e Botão Editar */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 4
                }}
            >
                <Typography variant="h5" fontWeight="bold">
                    Relatório
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

            {/* 2. Conteúdo em Layout de Grid (Duas Colunas) */}
            {/* Adicionar a propriedade container={true} é sempre uma boa prática */}
            <Grid container spacing={4}>

                {/* Linha 1 */}
                <DataField label="Nome completo" value="Usuário Exemplo" />
                <DataField label="E-mail" value="tyr@fr" />

                {/* Linha 2 */}
                <DataField label="CPF" value="123.456.789-00" />
                <DataField label="CEP" value="12345-678" />

                {/* Linha 3 */}
                <DataField label="Telefone" value="(11) 98765-4321" />
                <DataField label="Endereço" value="Rua das Hortas, 123" />

            </Grid>

        </Paper>
    );
};

export default Relatorio;