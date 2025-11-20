import { useState } from 'react';
import { Box, Tabs, Tab, Paper, Typography } from '@mui/material';
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
      case 0:
        return <DadosPessoais />;
      case 1:
        return <DadosHorta />;
      case 2:
        return <Historico/>;
      case 3:
        return <Relatorio />;
      default:
        return null;
    }
  };


  return (
    <Box sx={{ width: '100%' }}>

      <Box
        sx={{
          
          display: 'inline-flex',
          p: 0.5,
          borderRadius: 50,
          backgroundColor: '#f5f5f5',
          marginTop: '20px',
          mb: 5,
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: 'none' } }}
          sx={{ 
            minHeight: 'auto',
            '.MuiTabs-flexContainer': { gap: '4px' } 
          }}
        >
         
          {['Dados Pessoais', 'Dados da Horta', 'Histórico', 'Relatório'].map((label, index) => (
            <Tab
              key={index}
              label={label}
              disableRipple
              sx={{
                minHeight: 'auto',
                minWidth: 'auto',
                borderRadius: 50,
                textTransform: 'none',
                px: 3,
                py: 1.5,

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

      {/* 4. AQUI É ONDE A "TELA" É TROCADA */}
      <Paper elevation={0} sx={{ borderTop: 1, borderColor: 'divider' }}>
        {renderTabContent()}
      </Paper>
    </Box>
  );
};

export default ProfileTabsContainer;