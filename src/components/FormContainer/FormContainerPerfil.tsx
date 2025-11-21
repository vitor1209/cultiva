import { useState } from 'react';
import { Box, Tabs, Tab, Paper } from '@mui/material';
import DadosPessoais from "../../components/Perfil/DadosPessoaisPanel"; 
import DadosHorta from '../../components/Perfil/DadosHorta';
import Historico from '../../components/Perfil/Historico';
import Relatorio from '../../components/Perfil/Relatorio';

const ProfileTabsContainer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0: return <DadosPessoais />;
      case 1: return <DadosHorta />;
      case 2: return <Historico />;
      case 3: return <Relatorio />;
      default: return null;
    }
  };

  return (
    <Box sx={{ width: '100%', px: { xs: 1, md: 0 } }}>
      
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          p: 0.5,
          borderRadius: 5,
          backgroundColor: '#f5f5f5',
          marginTop: '20px',
          mb: 5,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleChange}
          variant="fullWidth"   // ← OCUPAR TODA A LARGURA
          TabIndicatorProps={{ style: { display: 'none' } }}
          sx={{
            width: '100%',
            minHeight: 'auto',
            '.MuiTabs-flexContainer': {
              width: '100%',
              display: 'flex',
              gap: { xs: 1, md: 2 },
            },
          }}
        >
          {['Dados Pessoais', 'Dados da Horta', 'Histórico', 'Relatório'].map((label, index) => (
            <Tab
              key={index}
              label={label}
              disableRipple
              sx={{
                flex: 1,                 // ← CADA BOTÃO CRESCE IGUAL
                minHeight: 'auto',
                minWidth: 'auto',
                borderRadius: 50,
                textTransform: 'none',
                px: { xs: 1, md: 3 },
                py: { xs: 1, md: 1.5 },

                '&.Mui-selected': {
                  color: 'text.primary',
                  backgroundColor: 'white',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
                },
                '&:not(.Mui-selected)': {
                  color: 'text.secondary',
                  backgroundColor: 'transparent',
                },
              }}
            />
          ))}
        </Tabs>
      </Box>

      <Paper elevation={0} sx={{ borderTop: 1, borderColor: 'divider' }}>
        {renderTabContent()}
      </Paper>
    </Box>
  );
};

export default ProfileTabsContainer;
