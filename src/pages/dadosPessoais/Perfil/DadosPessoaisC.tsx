import { Typography, Stack } from '@mui/material';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DadosPessoaisSchemaC } from './DadosPessoaisC.schema';
import { MASCARAS } from '../../../masks';
import { InputImagem } from '../../../components/Input/BoxImg/BoxImg';

export const DadosPessoaisC = () => {
    const { control } = useForm({
        resolver: zodResolver(DadosPessoaisSchemaC),
        defaultValues: {
            NomeCompletocon: '',
            Emailcon: '',
            celularcon: '',
            dataNascicon: '',
            fotocon: '',
        },
    });

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

            {/* ——— FOTO (ESQ) • INPUTS (DIR) ——— */}
           <Stack
    direction={{ xs: "column", md: "row" }}
    spacing={8}
    width="90%"
    marginRight="auto"
    marginLeft="auto"
    alignItems="center"
    justifyContent="center"
>
                {/* Coluna da IMAGEM */}
                <Stack flex={1} alignItems="center">
                    <InputImagem
                        name="fotocon"
                        control={control}
                        label="Foto de perfil:"
                        height={20}
                        width={20}
                    />
                </Stack>

                {/* Coluna dos INPUTS */}
                <Stack
                    flex={1}
                    spacing={3}
                    width="100%"
                    textAlign={'start'}
                >
                    <Input
                        name="NomeCompletocon"
                        placeholder="Nome Completo"
                        control={control}
                        label="Nome Completo:"
                    />

                    <Input
                        name="Emailcon"
                        placeholder="Email"
                        control={control}
                        label="Email:"
                    />

                    <Input
                        mask={MASCARAS.celular}
                        name="celularcon"
                        placeholder="Celular"
                        control={control}
                        label="Celular:"
                    />

                    <Input
                        name="dataNascicon"
                        placeholder="Data de Nascimento"
                        mask={MASCARAS.data}
                        control={control}
                        label="Data de Nascimento:"
                    />
                </Stack>
            </Stack>

        </Stack>
    );
};
