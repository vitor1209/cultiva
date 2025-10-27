import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import * as Styled from "./Card.styled.ts";
import { Button } from "../../components/Button/Button";
import { Star, ShoppingCart } from 'lucide-react';
import type { CardProps } from "./Card.types.ts";


export default function ProductCard({ image,
    name,
    horta,
    avaliacao,
    preco,
}: CardProps) {
    return (
        <Styled.ProductCardStyled>
            <CardOverflow>
                <AspectRatio sx={{ minWidth: '130%' }}>
                    <img
                        src={image}
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent className="cardContainer">
                <div className="inline-item">
                    <Link href="#product-card" color="neutral" textColor="text.primary" overlay>
                        {name}
                    </Link>
                </div>

                <div className="inline-item">
                    <Typography level="body-sm">{horta}</Typography>
                </div>

                <div className="inline-item">
                    <Typography startDecorator={<Star color='#fcc600' fill="#fcc600" height={20} />} level="body-sm">
                        {avaliacao}
                    </Typography>
                </div>

                <div className="inline-item">
                    <Chip color="success">
                        R${preco}
                    </Chip>
                </div>
            </CardContent>

            <div className="center">
                <Button variante="ButtonGreen" espacamento={80} tamanho="md" icon={ShoppingCart}>
                    Adicionar
                </Button>
            </div>

        </Styled.ProductCardStyled>
    );
}
