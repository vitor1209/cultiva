import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import * as Styled from "./Card.styled.ts";
import { Button } from "../../components/Button/Button";
import { ShoppingCart, MapPin, Trash2, Pencil, CheckCircle } from 'lucide-react';
import type { CardProps } from "./Card.types.ts";
import { Box, Stack } from '@mui/material';
import { useDeleteProduto } from '../../controllers/produto.controller.ts';
import { useState } from 'react';
import { PadraoModal } from '../Modal/Modal.tsx';
import { useNavigate } from 'react-router-dom';
import { useAddCarrinho } from '../../pages/carrinho/carrinho.hook.tsx';

export default function ProductCard({
    image,
    id,
    name,
    lugar,
    descricao,
    validade,
    preco,
    tipoCard,
}: CardProps) {
    const navigate = useNavigate();

    const { handleAdd, modalMessage, modalOpen, setModalOpen } = useAddCarrinho();

    const handleAdicionarCarrinho = () => {
        handleAdd({
            produto_id: id,
            quantidade: 1,
        });
    };

    const handleEdit = () => {
        navigate(`/EditarProdutoPage/${id}`);
    };

    const [openModal, setOpenModal] = useState(false);
    const deleteMutation = useDeleteProduto();

    function handleDelete() {
        deleteMutation.mutate(id, {
            onSuccess: () => {
                setOpenModal(true);
            },
            onError: () => {
                setOpenModal(true);
            }
        });
    }

    const renderByType = () => {
        switch (tipoCard) {
            case "Horta":
                return (
                    <Box className="center">
                        <Button
                            variante="ButtonLinkBlack"
                            espacamento={70}
                            tamanho="sm"
                            sx={{ border: '1px solid', borderColor: 'grey.300' }}
                            onClick={() => navigate(`/PerfilProdutor/${id}`)}
                        >
                            Ver produtos
                        </Button>
                    </Box>
                );
            case "Produtor":
                return (
                    <Box className="center" gap={1}>
                        <Button onClick={handleEdit} variante="ButtonGreen" espacamento={60} tamanho="md" icon={Pencil}>
                            Editar
                        </Button>
                        <Button
                            variante="ButtonLinkRed"
                            icon={Trash2}
                            tamanho="xl"
                            onClick={handleDelete}
                        />
                    </Box>
                );
            case "Produto":
                return (
                    <Box className="center">
                        <Button
                            variante="ButtonGreen"
                            espacamento={70}
                            tamanho="md"
                            icon={ShoppingCart}
                            onClick={handleAdicionarCarrinho}
                        >
                            Adicionar
                        </Button>
                    </Box>
                );

            case "semLogin":
                return (
                    <Box className="center">
                        <Button
                            variante="ButtonGreen"
                            espacamento={70}
                            tamanho="md"
                            icon={ShoppingCart}
                            to='/Login'
                        >
                            Adicionar
                        </Button>
                    </Box>
                );
            default:
                return null;
        }
    };

    return (
        <>

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
                        <Link color="neutral" textColor="text.primary">
                            {name}
                        </Link>
                    </div>

                    <div>
                        <div className="inline-item">
                            <Typography startDecorator={<MapPin height={18} />} level="body-sm">
                                {lugar}
                            </Typography>
                        </div>
                    </div>

                    {/* Descrição curta */}
                    {descricao && (
                        <div className="inline-item">
                            <Typography sx={{
                                textAlign: 'start',
                                whiteSpace: 'wrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }} level="body-sm">
                                {descricao}
                            </Typography>
                        </div>
                    )}

                    {/* Validade */}
                    {validade && (
                        <div className="inline-item">
                            <Typography level="body-xs" sx={{ opacity: 0.7 }}>
                                Validade: {validade}
                            </Typography>
                        </div>
                    )}

                    {(tipoCard === "Produto" || tipoCard === "Produtor") && (
                        <div className="inline-item">
                            <Chip size="lg" color="success">
                                R${preco}
                            </Chip>
                        </div>
                    )}
                </CardContent>

                {renderByType()}
            </Styled.ProductCardStyled>
            <PadraoModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                title="Produto removido!"
                description="Seu produto foi deletado com sucesso."
                buttonText="Concluir"
                Icon={CheckCircle}
                to="/HomeProdutor"
                color="#dc2626"
            />

            <PadraoModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title="Carrinho"
                description={modalMessage ?? ""}
                buttonText="Concluir"
                to="/HomeConsumidor"
                Icon={CheckCircle}
            />
        </>
    );
}
