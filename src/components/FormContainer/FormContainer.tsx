import { Stack } from "@mui/material";
import Typography from '@mui/joy/Typography';
import * as styled from "./Form.styled";
import { Button } from "../Button/Button";
import { useState } from "react";
import { LogoCultiva } from "../../assets";
import { useSearchParams } from "react-router-dom"
import type { ContainerFormProps } from "./Form.types";
import { TabsApple } from "./TabsApple/TabsApple";

export default function ContainerForm({ children, childrenSecund, acao }: ContainerFormProps) {

    const tabs = [
        { value: "Consumidor", label: "Consumidor" },
        { value: "Produtor", label: "Produtor" },
    ];

    const [searchParams, setSearchParams] = useSearchParams()
    const tabParam = searchParams.get("Tab")
    const initialIndex = tabs.findIndex((tab) => tab.label.toLowerCase() === tabParam?.toLowerCase())
    const [tabIndex, setTabIndex] = useState(initialIndex >= 0 ? initialIndex : 0)
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
        setSearchParams({ Tab: tabs[newValue].label });
    };

    return (
        <Stack>
            <styled.ImgStack acao={acao}>
                <img className="img" src={LogoCultiva} alt="Logo Cultiva" width={120} />
            </styled.ImgStack>
            <styled.FormContainer acao={acao}>

                {acao === 'Login' ? (
                    <>
                        <Stack padding={'0 6%'} alignSelf={'start'}><Typography level="body-lg">Bem Vindo de Volta!</Typography></Stack>

                        <TabsApple
                            value={tabIndex}
                            onChange={handleChange}
                            tabs={["Consumidor", "Produtor"]}
                            sx={{ width: "90%", alignSelf: "center" }}
                        />
                        <Stack component={'form'} spacing={3} sx={{ width: "90%", mt: 2 }} >
                            {children}
                        </Stack>
                    </>

                ) : (
                    <Stack direction={'row'} justifyContent={'center'} alignItems={'stretch'} sx={{
                        width: "100%",
                        mt: 2,
                        height: "100%",
                        flex: 1,
                    }}>
                        <Stack direction={'row'} sx={{ width: "90%", mt: 2 }} spacing={2} justifyContent={'center'} alignItems={'flex-start'} >

                            <Stack component={'form'} spacing={3} sx={{ width: "70%" }} >
                                <Stack padding={'0 6%'} alignSelf={'start'}><Typography level="body-lg">Bem Vindo de Volta!</Typography></Stack>

                                <TabsApple
                                    value={tabIndex}
                                    onChange={handleChange}
                                    tabs={["Consumidor", "Produtor"]}
                                    sx={{ width: "90%", alignSelf: "center" }}
                                />
                                {children}
                            </Stack>

                            <Stack component={'form'} spacing={3} sx={{ width: "70%" }} >
                                {childrenSecund}
                            </Stack>
                        </Stack>
                    </Stack>
                )}

                {acao === "Login" ? (
                    <Stack
                        direction="row"
                        justifyContent="space-around"
                        sx={{ p: "1% 3%", width: "100%", mt: 1 }}
                    >
                        <Button tamanho="sm" variante="ButtonLinkGreen">
                            Esqueci minha senha
                        </Button>
                        <Button tamanho="sm" variante="ButtonLinkGreen" to="/Cadastro">
                            Criar uma conta
                        </Button>
                    </Stack>
                ) : null}


            </styled.FormContainer>
        </Stack>
    );
}