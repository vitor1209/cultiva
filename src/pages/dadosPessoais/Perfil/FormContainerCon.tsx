import { useState, useEffect } from 'react';
import { Box, Tabs, Tab, Paper } from '@mui/material';
import { DadosPessoaisC } from "./DadosPessoaisC";
import Historico from './Historico';
import { DadosEndereco } from './DadosEndereco';

export const ProfileTabsContainerC = () => {

    const [activeTab, setActiveTab] = useState<number>(() => {
        const saved = localStorage.getItem("profile_active_tab_c");
        return saved ? Number(saved) : 0;
    });

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
        localStorage.setItem("profile_active_tab_c", String(newValue)); // ⬅ salva
    };

    useEffect(() => {
        const saved = localStorage.getItem("profile_active_tab_c");
        if (saved !== null) {
            setActiveTab(Number(saved));
        }
    }, []);

    const renderTabContent = () => {
        switch (activeTab) {
            case 0: return <DadosPessoaisC />;
            case 1: return <DadosEndereco />;
            case 2: return <Historico />;
            default: return null;
        }
    };

    return (
        <Box sx={{ width: '100%', px: { xs: 1, md: 0 } }}>
            <Box
                sx={{
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
                    variant="fullWidth"
                    TabIndicatorProps={{ style: { display: 'none' } }}
                    sx={{
                        width: '100%',
                        minHeight: 'auto',
                        '.MuiTabs-flexContainer': {
                            display: 'flex',
                            gap: { xs: 1, md: 2 },
                        },
                    }}
                >
                    {['Dados Pessoais', 'Dados do Endereço', 'Histórico'].map((label, index) => (
                        <Tab
                            key={index}
                            label={label}
                            disableRipple
                            sx={{
                                flex: 1,
                                minHeight: 'auto',
                                minWidth: 'auto',
                                borderRadius: 50,
                                textTransform: 'none',
                                px: { xs: 1, md: 3 },
                                py: { xs: 1, md: 1.5 },
                                fontFamily: '"Anybody", "Inter", sans-serif',
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
