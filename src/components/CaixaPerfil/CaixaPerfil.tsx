
import { Paper, Avatar, Box, Typography, Stack, Button, IconButton } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import type { CaixaPerfilProp } from './CaixaPerfil.types';
import { LogOut } from 'lucide-react';
import { useLogout } from '../../pages/dadosPessoais/Perfil/hooks/logout.hook';

export const CaixaPerfil = (
  { nome, perfil }: CaixaPerfilProp

) => {

const { handleLogout } = useLogout()

  return (
    // a caixa branca com sombra
    <Paper
      sx={{
        p: 4,
        mt: 3,
        mb: 5,
        ml: 5,
        mr: 5,
        borderRadius: '8px',
      }}
    >

      <Stack direction="row" alignItems="center" justifyContent="space-between">

        <Stack direction="row" spacing={2} alignItems="center">

          {/* O Avatar/Ícone de Perfil */}
          <Avatar sx={{ bgcolor: 'rgba(56, 142, 60, 0.1)', color: 'success.main', width: 48, height: 48 }}>
            <PersonOutlineIcon />
          </Avatar>


          <Box>
            <Typography variant="h6" component="div" fontFamily={'"Anybody", "Inter", sans-serif'} sx={{ fontWeight: 600, lineHeight: 1.2 }}>
              {nome}
            </Typography>
            <Typography variant="body2" color="text.secondary" textAlign={"start"}>
              {perfil}
            </Typography>
          </Box>
        </Stack>


        <Stack direction="row" spacing={0.5} alignItems="center">
          <IconButton onClick={handleLogout}>
            <LogOut fontSize="small" />
          </IconButton>

        </Stack>
      </Stack>
    </Paper>
  );
};

