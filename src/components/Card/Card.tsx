import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import * as Styled from "./Card.styled.ts";
import { Button } from "../../components/Button/Button";
import { Star, ShoppingCart, MapPin, Trash2, Pencil } from 'lucide-react';
import type { CardProps } from "./Card.types.ts";
import { Box, Stack } from '@mui/material';

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
                    <Box className="center">
                        <Button variante="ButtonLinkBlack" espacamento={70} tamanho="sm" sx={{ border: '1px solid', borderColor: 'grey.300' }}>
                            Ver produtos
                        </Button>
                    </Box>
                );
            case "Produtor":
                return (
                    <Box className="center" gap={1}>
                        <Button variante="ButtonGreen" espacamento={60} tamanho="md" icon={Pencil}>
                            Editar
                        </Button>
                        <Button variante='ButtonLinkRed' icon={Trash2} tamanho={'xl'}></Button>
                    </Box>
                );
            case "Produto":
                return (
                    <Box className="center">
                        <Button variante="ButtonGreen" espacamento={70} tamanho="md" icon={ShoppingCart}>
                            Adicionar
                        </Button>
                    </Box>
                );
            default:
                return null;
        }
    };

    return (
        <Styled.ProductCardStyled tipoCard={tipoCard}>
            <CardOverflow sx={{ height: '50%', width: '100%' }}>
                <Stack height="100%" width="100%">
                    <img
                        src={image}
                        alt=""
                        loading="lazy"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Stack>
            </CardOverflow>
            <CardContent className="cardContainer">
                <div className="inline-item">
                    <Link href="#product-card" color="neutral" textColor="text.primary" >
                        {name}
                    </Link>
                </div>

                {tipoCard === "Produto" || tipoCard === "Produtor" ?
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

                {tipoCard === "Produto" || tipoCard === "Produtor" ?
                    <div className="inline-item">
                        <Chip size='lg' color="success">
                            R${preco}
                        </Chip>
                    </div> : <></>}

            </CardContent>

            <>{renderByType()}</>

        </Styled.ProductCardStyled>
    );
}


