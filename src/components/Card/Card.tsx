import AspectRatio from '@mui/joy/AspectRatio';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import * as Styled from "./Card.styled.ts";
import { Button } from "../../components/Button/Button";
import { Star, ShoppingCart, MapPin, Trash2 } from 'lucide-react';
import type { CardProps } from "./Card.types.ts";

export default function ProductCard({ image,
    name,
    lugar,
    avaliacao,
    preco,
    tipoCard,
}: CardProps) {

    const renderByType = () => {
        switch (tipoCard) {
            case "Horta":
                return (
                    <div className="center">
                        <Button variante="ButtonLinkBlack" espacamento={70} tamanho="sm" sx={{ border: '1px solid', borderColor: 'grey.300' }}>
                            Ver produtos
                        </Button>
                    </div>
                );
            case "Produtor":
                return (
                    <div className="center">
                        <Button variante="ButtonGreen" espacamento={70} tamanho="md" icon={ShoppingCart}>
                            Adicionar
                        </Button>
                        <Trash2 stroke='red' />
                    </div>
                );
            case "Produto":
                return (
                    <div className="center">
                        <Button variante="ButtonGreen" espacamento={70} tamanho="md" icon={ShoppingCart}>
                            Adicionar
                        </Button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <Styled.ProductCardStyled tipoCard={tipoCard}>
            <CardOverflow>
                <AspectRatio sx={tipoCard === "Produto" ? { minWidth: '130%' } : { minWidth: '85%' }}>
                    <img
                        src={image}
                        loading="lazy"
                    />
                </AspectRatio>
            </CardOverflow>
            <CardContent className="cardContainer">
                <div className="inline-item">
                    <Link href="#product-card" color="neutral" textColor="text.primary" overlay>
                        {name}
                    </Link>
                </div>

                {tipoCard === "Produto" ?
                    <div >
                        <div className="inline-item">
                            <Typography level="body-sm">{lugar}</Typography>
                        </div>
                    </div>
                    : <div >
                        <div className="inline-item">
                            <Typography startDecorator={<MapPin height={18} />} level="body-sm">{lugar}</Typography>
                        </div>
                    </div>
                }

                <div className="inline-item">
                    <Typography startDecorator={<Star color='#fcc600' fill="#fcc600" height={20} />} level="body-sm">
                        {avaliacao}
                    </Typography>
                </div>

                {tipoCard === "Produto" ?
                    <div className="inline-item">
                        <Chip size='lg' color="success">
                            R${preco}
                        </Chip>
                    </div> : <></>}

            </CardContent>

            <div >{renderByType()}</div>


        </Styled.ProductCardStyled>
    );
}


