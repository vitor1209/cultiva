import { Box, Container, FormControl, IconButton, MenuItem, Select, Stack, type SelectChangeEvent } from "@mui/material";
import { Header } from "../../../components/Header/Header";
import { Button } from "../../../components/Button/Button";
import { Footer } from "../../../components/Footer/Footer";
import { ArrowRight, CircleCheck, UserRound } from "lucide-react";
import SearchBar from "../../../components/barSearch/barSearch";
import * as styled from "../Pedidos.styled";
import Typography from "@mui/joy/Typography";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { PadraoModal } from "../../../components/Modal/Modal";


export type StatusType = "Preparando" | "Enviado" | "Disponível para Retirada" | "Finalizado"

type ItemPedido = {
    nome: string;
    qtd: number;
    preco: number;
    peso: string;
};

export type PedidoType = {
    img: string;
    nome: string;
    dataCompra: string;
    formaPagamento: string;
    totalCompra: number;
    status: StatusType;
    endereco: string;
    itens: ItemPedido[];
};

const pedido: PedidoType = {
    img: "data:image/jpeg;base64,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",
    nome: "Ailone sergio alves ferreira",
    dataCompra: "01/11/2025",
    formaPagamento: "Cartão de Crédito",
    totalCompra: 299.90,
    status: "Preparando",
    endereco: "Rua Exemplo, 123, São Paulo - SP",
    itens: [
        { nome: "Cenoura", qtd: 4, peso: "aprox. 200g", preco: 2.19 },
        { nome: "Cebola", qtd: 3, peso: "aprox. 80g", preco: 0.89 },
        { nome: "Batata", qtd: 6, peso: "150g", preco: 1.14 },
        { nome: "Alecrim", qtd: 1, peso: "aprox. 50g", preco: 3.00 },
    ],
};

export const PedidoDetalhe = () => {

    const [statusAtivo, setstatusAtivo] = useState<StatusType>(pedido.status);
    const [colorAtivo, setscolorAtivo] = useState<string>('#6796FF');

    const setColor = (status: StatusType) => {
        switch (status) {
            case 'Disponível para Retirada':
                setscolorAtivo("#DE96FA")
                break;
            case 'Enviado':
                setscolorAtivo("#DE96FA")
                break;
            case 'Finalizado':
                setscolorAtivo("#A0E393")
                break;
            case 'Preparando':
                setscolorAtivo("#6796FF")
                break;

            default:
                setscolorAtivo("#6796FF")
                break;
        }
    }

    const handleStatusChange = (event: SelectChangeEvent) => {
        const newStatus = event.target.value as StatusType;
        setColor(newStatus);
        setstatusAtivo(newStatus);
    };
    const formatarReal = (valor: number) =>
        valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    const { id } = useParams<{ id: string }>();

    const [openModal, setOpenModal] = useState(false);
    const [openModalCancel, setopenModalCancel] = useState(false);

    const handleCancelar = () => {
        setopenModalCancel(true);
    };


    const handleAtualizar = () => {
        setOpenModal(true);
    };

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ backgroundColor: "#fff8f0", textAlign: "center", marginTop: 8, padding: 0 }}
        >
            <Header
                end={
                    <IconButton  component={Link} to="/ProdutorPrivatePage" aria-label="delete" size="large">
                        <UserRound />
                    </IconButton>
                }
                start={
                    <Stack flex={1} minWidth="250px" maxWidth="400px">
                        <SearchBar />
                    </Stack>
                }
            >
                <>
                    <Button variante="ButtonLinkBlack" to="/HomeProdutor" tamanho="sm">Início</Button>
                    <Button variante="ButtonLinkBlack" to="/HomeProdutor#produtos" tamanho="sm">Seus Produtos</Button>
                    <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">Pedidos</Button>
                    <Button variante="ButtonLinkBlack" to="/HomeProdutor#sobre" tamanho="sm">Sobre</Button>
                </>
            </Header>

            <styled.Division />

            <Container
                maxWidth={"xl"}
                sx={{
                    position: 'relative',
                    width: { sm: "100%", md: "90%" },
                    padding: '2% 0',
                    p: { xs: 2, md: 4 },
                    borderRadius: '25px',
                    backgroundColor: '#d9d3d0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Button icon={ArrowRight} sx={{
                    position: { md: "relative", lg: "absolute" },
                    right: '3%',
                    top: '-8.5%',
                    zIndex: 10,

                }} tamanho={"sm"} to="/Pedidos" ladoIcon="direita" variante="ButtonLinkBlack">Voltar</Button>

                <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center" width="95%" marginBottom={2}>
                    <Typography level="body-lg">Pedido: #{id}</Typography>
                </Stack>


                <styled.ContainerPedidoDetalhado>
                    <styled.ContainerDados>
                        <styled.texto direction={{ md: "column", lg: "row" }}
                        >
                            <Box
                                component="img"
                                src={pedido.img}
                                sx={{
                                    width: '7.6rem',
                                    height: '7.6rem',
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.2)',
                                }}
                            />
                            <Stack>
                                <Typography level="body-lg" mb={'5%'}>{pedido.nome}</Typography>

                                <Stack direction={{ sm: "column", md: "row" }} alignItems={'center'} gap={0.5}>
                                    <Typography>Data da Compra: </Typography>
                                    <Typography level="body-sm">{pedido.dataCompra}</Typography>
                                </Stack>
                                <Stack direction={{ sm: "column", md: "row" }} alignItems={'center'} gap={0.5}>
                                    <Typography>Forma de Pagamento: </Typography>
                                    <Typography level="body-sm">{pedido.formaPagamento}</Typography>
                                </Stack>
                                <Stack direction={{ sm: "column", md: "row" }} alignItems={'center'} gap={0.5}>
                                    <Typography>Total Compra: </Typography>
                                    <Typography level="body-sm">R$ {pedido.totalCompra}</Typography>
                                </Stack>
                            </Stack>
                        </styled.texto>
                        <Stack>
                            <Stack direction={{ md: "column", lg: "row" }} justifyContent="space-between" alignItems={{ md: "center", lg: "end" }}>

                                <Stack
                                    width={{ xs: "100%", md: "auto" }}
                                    marginBottom={{ xs: 2, md: 0 }}
                                    justifyContent={{ xs: "center", md: "center", lg: "flex-start" }}
                                    alignItems={{ xs: "center", md: "center", lg: "flex-start" }}
                                >
                                    <Typography>Atualizar Status:</Typography>

                                    <FormControl
                                        size="small"
                                        sx={{
                                            minWidth: "16.25rem",
                                            maxWidth: "16.25rem",
                                            backgroundColor: colorAtivo,
                                            borderRadius: "10px",
                                        }}
                                    >
                                        <Select
                                            value={statusAtivo}
                                            onChange={handleStatusChange}
                                            IconComponent={KeyboardArrowDownIcon}
                                            sx={{
                                                color: "white",
                                                borderRadius: "10px",
                                                border: "1px solid #000",
                                                "& .MuiSelect-icon": {
                                                    color: "white",
                                                },
                                            }}
                                        >
                                            <MenuItem value="Preparando">Preparando</MenuItem>
                                            <MenuItem value="Enviado">Enviado</MenuItem>
                                            <MenuItem value="Disponível para Retirada">Disponível para Retirada</MenuItem>
                                            <MenuItem value="Finalizado">Finalizado</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>


                                <Stack paddingRight={'2rem'} width={{ xs: "100%", md: "auto" }}>
                                    <Typography>Entrega no endereço:</Typography>
                                    <Typography>Rua Bélgica, 55, Ribeirão Pires-SP</Typography>
                                </Stack>

                            </Stack>
                        </Stack>
                    </styled.ContainerDados>
                    <hr />
                    <styled.ContainerItens>
                        <Stack spacing={1}>
                            <Typography level="body-lg" fontWeight="bold">Itens:</Typography>

                            {pedido.itens.map((item, index) => (
                                <Stack
                                    key={index}
                                    direction="row"
                                    sx={{ padding: "0.2rem 0" }}
                                >
                                    <Typography sx={{ width: "40%" }}>{item.nome}</Typography>
                                    <Typography sx={{ width: "15%", textAlign: "center" }}>{item.qtd}</Typography>
                                    <Typography sx={{ width: "25%", textAlign: "center" }}>{item.peso}</Typography>
                                    <Typography sx={{ width: "20%", textAlign: "right" }}>
                                        {formatarReal(item.preco)}
                                    </Typography>
                                </Stack>
                            ))}

                            <Stack direction="row" justifyContent="space-between" sx={{ marginTop: "1.5rem", fontWeight: "bold" }}>
                                <Typography>Total Itens: {pedido.itens.reduce((acc, item) => acc + item.qtd, 0)}</Typography>
                                <Typography>
                                    Total Compra: R$
                                    {pedido.itens
                                        .reduce((acc, item) => acc + item.preco, 0)
                                        .toFixed(2)}
                                </Typography>
                            </Stack>
                        </Stack>

                        <Stack direction={{ md: "column", lg: "row" }} gap={2} marginTop={3}>
                            <Button tamanho="md" onClick={handleCancelar} variante="ButtonOrange" espacamento={40} >Cancelar Pedido</Button>
                            <Button tamanho="md" onClick={handleAtualizar} espacamento={75} >Atualizar</Button>
                        </Stack>

                        <PadraoModal
                            open={openModal}
                            onClose={() => setOpenModal(false)}
                            title="Status atualizado com sucesso!"
                            Icon={CircleCheck}
                            description="O comprador já será notificado."
                            onConfirm={() => {
                                console.log("Pedido atualizado!");
                                setOpenModal(false);
                            }}
                        />

                        <PadraoModal
                            open={openModalCancel}
                            onClose={() => setopenModalCancel(false)}
                            title="Tem certeza que deseja cancelar essa venda?"
                            Icon={CircleCheck}
                            color="#FF2222"
                            buttonText='Voltar'
                            description="Caso prossiga, o comprador será notificado."
                            btnTwo={true}
                            onConfirm={() => {
                                console.log("Pedido atualizado!");
                                setopenModalCancel(false);
                            }}
                        />
                    </styled.ContainerItens>

                </styled.ContainerPedidoDetalhado>
            </Container>

            <styled.Division />
            <Footer />
        </Container >
    );
}
