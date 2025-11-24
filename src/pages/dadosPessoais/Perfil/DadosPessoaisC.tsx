import { Typography, Stack } from '@mui/material';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { MASCARAS } from '../../../masks';
import { InputImagem } from '../../../components/Input/BoxImg/BoxImg';
import { useUserForm } from './hooks/user.hook';
import { PadraoModal } from '../../../components/Modal/Modal';
import { CheckCircle } from 'lucide-react';

export const DadosPessoaisC = () => {

    const { form, onSubmit, modalOpen, setModalOpen, modalMessage } = useUserForm();
    const { control, handleSubmit } = form;

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4} p={{ xs: 2, md: 6 }} marginBottom={"40px"}>

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
                            fontFamily={"Anybody"}
                        >
                            Dados Pessoais
                        </Typography>

                        <Button tamanho="md" espacamento={10} type="submit">
                            Salvar
                        </Button>
                    </Stack>

                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={8}
                        width="90%"
                        marginRight="auto"
                        marginLeft="auto"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Stack flex={1} alignItems="center">
                            <InputImagem
                                name="foto"
                                control={control}
                                label="Foto de perfil:"
                                height={20}
                                width={20}
                            />
                        </Stack>

                        <Stack flex={1} spacing={3} width="100%" textAlign={'start'}>

                            <Input
                                name="email"
                                placeholder="Email"
                                control={control}
                                label="Email:"
                            />

                            <Input
                                mask={MASCARAS.celular}
                                name="telefone"
                                placeholder="Celular"
                                control={control}
                                label="Celular:"
                            />

                            <Input
                                name="datanasc"
                                placeholder="Data de Nascimento"
                                mask={MASCARAS.data}
                                control={control}
                                label="Data de Nascimento:"
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </form>

            <PadraoModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Atualizado"
                to='/DadosConsumidor'
                description={modalMessage ?? ""}
                buttonText="Concluir"
                Icon={CheckCircle}
            />
        </>
    );
};
