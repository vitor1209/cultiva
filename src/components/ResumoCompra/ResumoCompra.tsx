import { Radio, Stack, Typography } from "@mui/material";
import {
    BotaoFinalizar,
    BotaoSecundario,
    CardResumo,
    Linha,
    LinhaTotal,
    RowValor,
} from "./ResumoCompra.styled";

import type { ResumoCompraProps } from "./ResumoCompra.types";

export const ResumoCompra = ({
    subtotal,
    entrega,
    total,
    opcaoEntrega,
    page,
    onChangeEntrega,
    onFinalizar,
    onContinuar,
    onConfirmar,
}: ResumoCompraProps) => {
    return (
        <CardResumo>
            <Stack spacing={2}>
                <Typography variant="h6" fontWeight={600}>
                    Resumo da compra
                </Typography>

                <Stack spacing={1}>
                    <Typography fontWeight={600}>
                        Opção de entrega
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Radio
                            checked={opcaoEntrega === "residencia"}
                            onChange={() => onChangeEntrega("residencia")}
                        />
                        <Typography>
                            Entrega na residência (R$ {entrega.toFixed(2)})
                        </Typography>
                    </Stack>

                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Radio
                            checked={opcaoEntrega === "horta"}
                            onChange={() => onChangeEntrega("horta")}
                        />
                        <Typography>
                            Retirar na horta (Grátis)
                        </Typography>
                    </Stack>
                </Stack>

                <Linha />

                <Stack spacing={1}>
                    <RowValor>
                        <Typography color="#9ca3af">Subtotal:</Typography>
                        <Typography>R$ {subtotal.toFixed(2)}</Typography>
                    </RowValor>

                    <RowValor>
                        <Typography color="#9ca3af">Entrega:</Typography>
                        <Typography>
                            R$ {opcaoEntrega === "horta" ? "0.00" : entrega.toFixed(2)}
                        </Typography>
                    </RowValor>
                </Stack>

                <LinhaTotal />

                <RowValor>
                    <Typography fontSize="1.2rem" fontWeight={700}>
                        Total:
                    </Typography>

                    <Typography
                        fontSize="1.2rem"
                        fontWeight={700}
                        color="#16A34A"
                    >
                        R$ {total.toFixed(2)}
                    </Typography>
                </RowValor>

                {page === 'Confirmar'
                    ? <Stack spacing={1} mt={1}>
                        <BotaoFinalizar fullWidth onClick={onFinalizar}>
                            Finalizar compra
                        </BotaoFinalizar>

                        <BotaoSecundario fullWidth onClick={onContinuar}>
                            Continuar comprando
                        </BotaoSecundario>
                    </Stack>
                    : <Stack spacing={1} mt={1}>
                        <BotaoFinalizar fullWidth onClick={onConfirmar}>
                            Confirmar Compra
                        </BotaoFinalizar>
                    </Stack>
                }

            </Stack>
        </CardResumo>
    );
};
