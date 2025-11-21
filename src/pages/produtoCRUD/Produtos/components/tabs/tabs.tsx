import { useState } from "react";
import { Tabs, Tab, Stack } from "@mui/material";
import * as Styled from "./TabsProduto.styled";
import Typography from "@mui/joy/Typography";

export default function TabsProduto() {
    const [value, setValue] = useState(0);

    const handleChange = (
        _event: React.SyntheticEvent,
        newValue: number
    ) => {
        setValue(newValue);
    };

    return (
        <Styled.Container>
            {/* Abas */}
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                sx={{
                    minHeight: 48,
                    "& .MuiTabs-flexContainer": {
                        borderBottom: "1px solid #eee",
                        borderRadius: "12px 12px 0 0",
                        overflow: "hidden",
                    },
                }}
            >
                <Tab label="Descrição Detalhada" />
                <Tab label="Sobre o Produtor" />

            </Tabs>

            {/* Conteúdo */}
            <Styled.ContentBox>
                {value === 0 && (
                    <Stack spacing={2} textAlign="start">

                        <Typography level="title-md" fontWeight={600}>
                            Alface orgânica cultivada sem agrotóxicos, fresca e crocante.
                        </Typography>

                        <Typography level="body-md">
                            Cultivado de forma orgânica, sem uso de agrotóxicos.
                            Colhido no ponto ideal de maturação para garantir máximo sabor e frescor.
                        </Typography>

                        <Typography level="title-sm" fontWeight={600}>
                            Modo de conservação:
                        </Typography>

                        <Typography level="body-md">
                            Mantenha refrigerado. Consumir em até 5 dias após a compra.
                        </Typography>

                    </Stack>
                )}

                {value === 1 && (
                    <p>Informações sobre o produtor…</p>
                )}

            </Styled.ContentBox>
        </Styled.Container>
    );
}
