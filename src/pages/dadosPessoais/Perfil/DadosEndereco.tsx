import { Typography, Stack, MenuItem } from '@mui/material';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { SelectControlado } from '../../../components/Input/Select/Select';
import { Asterisk, CheckCircle } from 'lucide-react';
import { MASCARAS } from '../../../masks';
import { LISTA_UF } from "../../../lib/Uf";
import { useFinalizarEnderecoForm } from './hooks/endereco.hook';
import { PadraoModal } from '../../../components/Modal/Modal';

export const DadosEndereco = () => {

    const { form, onSubmit,modalOpen,setModalOpen } = useFinalizarEnderecoForm();
    const { control, handleSubmit } = form;

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={4} p={{ xs: 2, md: 6 }} marginBottom={"40px"}>

                    {/* TÍTULO + BOTÃO SALVAR */}
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
                            fontFamily={'"Anybody", "Inter", sans-serif"'}
                        >
                            Dados do Endereço
                        </Typography>

                        <Button tamanho="md" espacamento={10} type="submit">
                            Salvar
                        </Button>
                    </Stack>

                    {/* FORMULÁRIO */}
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={4}
                        textAlign={"start"}
                        width={"90%"}
                        alignSelf="center"
                    >
                        {/* COLUNA 1 */}
                        <Stack spacing={4} flex={1}>
                            <Input Icon={Asterisk} name="rua" placeholder="Rua" control={control} label="Rua:" />
                            <Input Icon={Asterisk} name="numero" placeholder="Número" control={control} label="Número:" />
                            <Input Icon={Asterisk} name="bairro" placeholder="Bairro" control={control} label="Bairro:" />
                            <Input Icon={Asterisk} name="cidade" placeholder="Cidade" control={control} label="Cidade:" />
                        </Stack>

                        {/* COLUNA 2 */}
                        <Stack spacing={4} flex={1}>
                            <Stack sx={{ width: { md: "90%", lg: "100%" } }}>
                                <Typography variant="subtitle1" fontWeight={500} color="#0A0A0A">
                                    Estado (UF):
                                </Typography>

                                <SelectControlado
                                    control={control}
                                    name="estado"
                                    placeholder="Selecione o estado"
                                    sx={{
                                        height: 48,
                                        "& .MuiSelect-select": {
                                            padding: "12px 14px",
                                        }
                                    }}
                                >
                                    {LISTA_UF.map((uf) => (
                                        <MenuItem key={uf} value={uf}>
                                            {uf}
                                        </MenuItem>
                                    ))}
                                </SelectControlado>
                            </Stack>

                            <Input
                                mask={MASCARAS.cep}
                                name="cep"
                                placeholder="CEP"
                                Icon={Asterisk}
                                control={control}
                                label="CEP:"
                            />

                            <Input
                                name="complemento"
                                placeholder="Complemento"
                                control={control}
                                label="Complemento:"
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </form>
            
            <PadraoModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Carrinho"
                // description={modalMessage ?? ""}
                buttonText="Concluir"
                Icon={CheckCircle}
            />
        </>

    );
};
