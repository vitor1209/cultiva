import { Typography, Stack,  useTheme, useMediaQuery } from '@mui/material';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DadosPessoaisSchema } from './DadosPessoaisP.schema';
import { MASCARAS } from '../../../masks';
import { InputImagem } from '../../../components/Input/BoxImg/BoxImg';


export const DadosPessoais = () => {
    const { control } = useForm({
        resolver: zodResolver(DadosPessoaisSchema),
        defaultValues: {
            Email: '',
            celular: '',
            dataNasci: '',
            foto: '',
            banner: '',
            nome_horta: '',
            frete: '',
        },
    });


    const theme = useTheme();

    // true se tela for md ou maior
    const isMdUp = useMediaQuery(theme.breakpoints.up("lg"));

    const l = isMdUp ? 40 : 18;

    return (
        <Stack spacing={4} p={{ xs: 2, md: 6 }} marginBottom={"40px"}>

            {/* Título + Botão */}
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                spacing={2}
                padding={{ xs: "0 0.01rem", md: "0 2rem" }}
                width="95%"
            >
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    fontFamily={'"Anybody", "Inter", sans-serif'}
                >
                    Dados Pessoais
                </Typography>

                <Button tamanho="md" espacamento={10}>
                    Salvar
                </Button>
            </Stack>

            {/* —— 2 COLUNAS COM 3 INPUTS —— */}
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={6}
                textAlign={'start'}
                width="90%"
                alignSelf="center"
            >
                <Stack spacing={3} flex={1}>
                    <Input name="Email" placeholder="Email" control={control} label="Email:" />
                    <Input mask={MASCARAS.celular} name="celular" placeholder="Celular" control={control} label="Celular:" />
                    <Input name="dataNasci" placeholder="Data de Nascimento" mask={MASCARAS.data} control={control} label="Data de Nascimento:" />
                </Stack>

                <Stack spacing={3} flex={1}>
                    <Input name="nome_horta" placeholder="Nome da Horta" control={control} label="Nome da Horta:" />
                    <Input mask={MASCARAS.real} name="frete" placeholder="Frete" control={control} label="Frete:" />
                </Stack>
            </Stack>

            {/* —— INPUTS DE FOTO (SEMPRE ABAIXO DAS 2 COLUNAS) —— */}
            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={6}
                width="90%"
                alignSelf="center"
                marginTop={2}
            >
                <Stack flex={1} alignItems="center">
                    <InputImagem
                        name="foto"
                        control={control}
                        label="Foto de perfil:"
                        height={18}
                        width={18}
                    />
                </Stack>

                <Stack flex={1} alignItems="center" width="100%">

                        <InputImagem
                            name="banner"
                            control={control}
                            label="Banner (Foto da horta):"
                            height={20}
                            width={l}
                        />
                </Stack>
            </Stack>

        </Stack>
    );
};