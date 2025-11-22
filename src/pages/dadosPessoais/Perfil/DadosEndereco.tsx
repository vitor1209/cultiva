import { Typography, Stack } from '@mui/material';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EnderecoSchema } from '../Perfil/DadosEndereco.schema';


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
        <Stack spacing={4} p={3}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h5" fontWeight="bold">Dados da Horta</Typography>
                <Button tamanho='md' espacamento={10} onClick={()=>{}}>Salvar</Button>
            </Stack>


            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
                <Stack spacing={2} flex={1}>
                    <Input name="rua" placeholder="Rua" control={control} label='onvxcoi' />
                    <Input name="numero" placeholder="Número" control={control}  />
                    <Input name="bairro" placeholder="Bairro" control={control}  />
                    <Input name="cidade" placeholder="Cidade" control={control}  />
                </Stack>


                <Stack spacing={2} flex={1}>
                    <Input name="estado" placeholder="Estado (UF)" control={control}  />
                    <Input name="cep" placeholder="CEP" control={control}  />
                    <Input name="complemento" placeholder="Complemento" control={control}  />
                </Stack>
            </Stack>
        </Stack>
    );
};