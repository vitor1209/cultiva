import { Typography, Stack, MenuItem } from '@mui/material';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EnderecoSchema } from '../Perfil/DadosEndereco.schema';
import { MASCARAS } from '../../../masks';
import { LISTA_UF } from "../../../lib/Uf";
import { SelectControlado } from '../../../components/Input/Select/Select';


export const DadosEndereco = () => {
    const { control } = useForm({
        resolver: zodResolver(EnderecoSchema),
        defaultValues: {
            rua: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
            cep: '',
            complemento: '',
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
                    Dados do Endereço
                </Typography>

                <Button tamanho="md" espacamento={10}>
                    Salvar
                </Button>
            </Stack>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} textAlign={"start"} width={"90%"} alignSelf="center"
            >
                <Stack spacing={4} flex={1}  >
                    <Input name="rua" placeholder="Rua" control={control} label='Rua:' />
                    <Input name="numero" placeholder="Número" control={control} label='Número:' />
                    <Input name="bairro" placeholder="Bairro" control={control} label='Bairro:' />
                    <Input name="cidade" placeholder="Cidade" control={control} label='Cidade:' />
                </Stack>


                <Stack spacing={4} flex={1}   >
                    <Stack sx={{ width: { md: "90%", lg: "100%" } }}>
                        <Typography variant="subtitle1" fontWeight={500} color="#0A0A0A">
                            Estado (UF):
                        </Typography>

                        <SelectControlado
                            control={control}
                            name="estado"
                            placeholder="Selecione o estado"
                            sx={{
                                height: 48, // aumenta a altura
                                "& .MuiSelect-select": {
                                    padding: "12px 14px", // aumenta o padding interno
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
                    <Input mask={MASCARAS.cep} name="cep" placeholder="CEP" control={control} label='CEP:' />
                    <Input name="complemento" placeholder="Complemento" control={control} label='Complemento:' />
                </Stack>
            </Stack>
        </Stack>
    );
};