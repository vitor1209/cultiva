import { Stack, Tab, Tabs } from "@mui/material";
import Typography from '@mui/joy/Typography';
import * as styled from "./Form.sytled";
import { Button } from "../Button/Button";
import { useState } from "react";
import { LogoCultiva } from "../../assets";
import { useSearchParams } from "react-router-dom"
import type { ContainerFormProps } from "./Form.types";

export default function ContainerForm({ children }: ContainerFormProps) {

    const tabs = [
        { value: "Consumidor", label: "Consumidor" },
        { value: "Produtor", label: "Produtor" },
    ];

    const [searchParams, setSearchParams] = useSearchParams()
    const tabParam = searchParams.get("Tab")
    const initialIndex = tabs.findIndex((tab) => tab.label.toLowerCase() === tabParam?.toLowerCase())
    const [tabIndex, setTabIndex] = useState(initialIndex >= 0 ? initialIndex : 0)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
        setSearchParams({ Tab: tabs[newValue].label });
    };

    return (
        <Stack>
            <styled.ImgStack>
                <img src={LogoCultiva} alt="Logo Cultiva" width={120} />
            </styled.ImgStack>
            <styled.FormContainer>

                <Stack padding={'0 6%'} alignSelf={'start'}><Typography level="body-lg">Bem Vindo de Volta!</Typography></Stack>

                <Tabs value={tabIndex} onChange={handleChange} aria-label="wrapped label tabs example">
                    <Tab label="Consumidor" value={0} />
                    <Tab label="Produtor" value={1} />
                </Tabs>

                <Stack component={'form'} spacing={3} sx={{ width: "90%", mt: 2 }} >
                    {children}
                </Stack>

                <Stack direction={'row'} justifyContent={"space-around"} sx={{ p: '1% 3%', width: '100%', mt: 1 }}>
                    <Button tamanho={"sm"} variante="ButtonLinkGreen">
                        Esqueci minha senha
                    </Button>
                    <Button tamanho={"sm"} variante="ButtonLinkGreen">
                        Criar uma conta
                    </Button>
                </Stack>
            </styled.FormContainer>
        </Stack>
    );
}
