import { Stack, Typography } from "@mui/material";

import {
    ProductCard,
    Image,
    InfoWrapper,
    Price,
    TrashButton
} from "./CardCarrinho.styled";
import { QuantidadeSelector } from "../selectQuant/QuantidadeSelector";
import { Trash2 } from "lucide-react";
import type { ProductCardComponentProps } from "./CardCarrinho.types";

export default function ProductCardComponent({
    title,
    farm,
    price,
    quantity,
    imageUrl,
    onDelete,
}: ProductCardComponentProps) {
    return (
        <ProductCard>

            <Stack direction={'row'} gap={3} alignItems={'start'}>
                <Image src={imageUrl} alt={title} />

                <InfoWrapper textAlign={'start'}>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="body2" color="gray">{farm}</Typography>
                    <Price variant="h6">R$ {price.toFixed(2)}</Price>
                </InfoWrapper>
            </Stack>

            <Stack sx={{
                alignItems: { sm: "center", md: "end" },
            }} spacing={1} >
                <TrashButton onClick={onDelete}>
                    <Trash2 />
                </TrashButton>

                <QuantidadeSelector txt={null} />

                <Typography fontWeight={600}>
                    Subtotal: R$ {(price * quantity).toFixed(2)}
                </Typography>
            </Stack>
        </ProductCard>
    );
}
