import { Button, Stack } from "@mui/material"
import Typography from "@mui/joy/Typography"
import { Minus, Plus } from "lucide-react"
import { useProduto } from "../../pages/Produtos/Produtos.hooks"
import type { QuantidadeSelectorProps } from "./QuantidadeSelector.types";

export const QuantidadeSelector = ({ txt }: QuantidadeSelectorProps) => {
    const { Quantidade, acrescento, decremento } = useProduto()

    const estiloBotao = {
        minWidth: 40,
        width: 40,
        height: 40,
        borderRadius: "10px",
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        color: "#333",
        "&:hover": {
            backgroundColor: "#fafafa",
            boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
        },
    }

    return (
        <Stack mt={3} mb={3} direction="row" alignItems="center" gap={3}>
            {txt
                ? <Typography level="body-lg">{txt}</Typography>
                : <></>
            }
            <Button onClick={decremento} sx={estiloBotao}>
                <Minus size={18} strokeWidth={2} />
            </Button>

            <Typography level="body-lg">{Quantidade}</Typography>

            <Button onClick={acrescento} sx={estiloBotao}>
                <Plus size={18} strokeWidth={2} />
            </Button>
        </Stack>
    )
}
