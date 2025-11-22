
import { Paper, Avatar, Box, Typography, Stack } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'; 
import type { CaixaPerfilProp } from './CaixaPerfil.types';

export const CaixaPerfil = (
  {nome,perfil}:CaixaPerfilProp

) => {
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
            <Typography variant="h6" component="div" sx={{ fontWeight: 600, lineHeight: 1.2 }}>
              {nome}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {perfil}
            </Typography>
          </Box>
        </Stack>


        {/* <Stack direction="row" spacing={0.5} alignItems="center">
          

          <Typography variant="h6" component="span" sx={{ fontWeight: 500, lineHeight: 1.2 }}>
            4.8
          </Typography>
          

          <StarIcon sx={{ color: '#ffb300', fontSize: '1rem' }} /> 
          

          <Typography variant="caption" display="block" color="text.secondary" sx={{ ml: 1, textAlign: 'right' }}>
            (1.218 avaliações)
          </Typography>
        </Stack> */}
      </Stack>
    </Paper>
  );
};

