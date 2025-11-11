import { Stack } from "@mui/material"
import Typography from "@mui/joy/Typography"
import { Minus, Plus } from "lucide-react"
import { Button } from "../../components/Button/Button"
import { useProduto } from "./Produtos.hooks"

export const QuantidadeSelector = () => {
    const { Quantidade, acrescento, decremento } = useProduto()

    return (
        <Stack direction="row" alignItems="center" gap={2}>
            <Button onClick={decremento} icon={Minus} tamanho="lg" variante="ButtonWhite" />
            <Typography>{Quantidade}</Typography>
            <Button onClick={acrescento} icon={Plus} tamanho="lg" variante="ButtonWhite" />
        </Stack>
    )
}
