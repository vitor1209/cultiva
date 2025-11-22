import { Stack, Typography } from "@mui/material";
import { CheckCircle, Trash2 } from "lucide-react";

import {
    ProductCard,
    Image,
    InfoWrapper,
    Price,
    TrashButton
} from "./CardCarrinho.styled";
import { QuantidadeSelector } from "../selectQuant/QuantidadeSelector";
import type { ProductCardComponentProps } from "./CardCarrinho.types";
import { useDelCarrinho } from "../../pages/carrinho/carrinho.hook";
import { PadraoModal } from "../Modal/Modal";

export default function ProductCardComponent({
    id,
    title,
    farm,
    price,
    quantity,
    imageUrl,
    onIncrease,
    onDecrease,
}: ProductCardComponentProps) {
    const { handleDel, modalMessageDel, modalOpenDel, setModalOpenDel } = useDelCarrinho();

    const handleDeleteCarrinho = () => {
        handleDel(id);
    };

    return (
        <>
            <ProductCard>
                <Stack direction="row" gap={3} alignItems="start">
                    <Image src={imageUrl} alt={title} />
                    <InfoWrapper textAlign="start">
                        <Typography variant="h6">{title}</Typography>
                        <Typography
                            variant="body2"
                            color="gray"
                            sx={{
                                maxWidth: 450,
                                whiteSpace: "wrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}
                        >
                            {farm}
                        </Typography>
                        <Price variant="h6">R$ {price.toFixed(2)}</Price>
                    </InfoWrapper>
                </Stack>

                <Stack sx={{ alignItems: { sm: "center", md: "end" } }} spacing={1}>
                    <TrashButton onClick={handleDeleteCarrinho}>
                        <Trash2 />
                    </TrashButton>

                    <QuantidadeSelector
                        txt={null}
                        quantidade={quantity}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                    />

                    <Typography fontWeight={600}>
                        Subtotal: R$ {(price * quantity).toFixed(2)}
                    </Typography>
                </Stack>
            </ProductCard>

            <PadraoModal
                open={modalOpenDel}
                onClose={() => setModalOpenDel(false)}
                title="Item removido!"
                description={modalMessageDel ?? ""}
                buttonText="Concluir"
                color="#dc2626"
                to="/FinalizarCarrinho"
                Icon={CheckCircle}
            />
        </>
    );
}
