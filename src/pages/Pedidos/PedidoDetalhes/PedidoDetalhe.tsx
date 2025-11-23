import { Box, Container, FormControl, IconButton, MenuItem, Select, Stack } from "@mui/material";
import { Header } from "../../../components/Header/Header";
import { Button } from "../../../components/Button/Button";
import { Footer } from "../../../components/Footer/Footer";
import { ArrowRight, CircleCheck, UserRound } from "lucide-react";
import SearchBar from "../../../components/barSearch/barSearch";
import * as styled from "../Pedidos.styled";
import Typography from "@mui/joy/Typography";
import { Link, useParams } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { PadraoModal } from "../../../components/Modal/Modal";
import { usePedidoDetalhe } from "./pedidoDetalhe.hook";

export const PedidoDetalhePage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    pedido,
    statusAtivo,
    colorAtivo,
    handleStatusChange,
    openModal,
    setOpenModal,
    openModalCancel,
    setOpenModalCancel,
    handleCancelar,
    handleAtualizar,
    formatarReal,
    isLoading,
    isError,
    formatDate,
    pedidoNotFound,
  } = usePedidoDetalhe();

  const unidades: Record<number, string> = {
    1: 'kg',
    2: 'g',
    3: 'l',
    4: 'ml',
    5: 'und',
    6: 'dz',
    7: 'cm'
  };


  // Tratamento de loading, erro e pedido não encontrado
  if (isLoading) return <Typography>Carregando...</Typography>;
  if (isError) return <Typography>Erro ao carregar pedido</Typography>;
  if (pedidoNotFound || !pedido) return <Typography>Pedido não encontrado</Typography>;

  return (
    <Container disableGutters maxWidth={false} sx={{ backgroundColor: "#fff8f0", textAlign: "center", marginTop: 8, padding: 0 }}>

      {/* Header */}
      <Header
        start={
          <Stack flex={1} minWidth="250px" maxWidth="400px">
            <SearchBar />
          </Stack>
        }
        end={
          <IconButton component={Link} to="/ProdutorPrivatePage" size="large">
            <UserRound />
          </IconButton>
        }
      >
        <Button variante="ButtonLinkBlack" to="/HomeProdutor" tamanho="sm">Início</Button>
        <Button variante="ButtonLinkBlack" to="/HomeProdutor#produtos" tamanho="sm">Seus Produtos</Button>
        <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">Pedidos</Button>
        <Button variante="ButtonLinkBlack" to="/HomeProdutor#sobre" tamanho="sm">Sobre</Button>
      </Header>

      <styled.Division />

      {/* Container Principal */}
      <Container
        maxWidth="xl"
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
        <Button
          icon={ArrowRight}
          sx={{ position: { md: "relative", lg: "absolute" }, right: '3%', top: '-8.5%', zIndex: 10 }}
          tamanho="sm"
          to="/Pedidos"
          ladoIcon="direita"
          variante="ButtonLinkBlack"
        >
          Voltar
        </Button>

        <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center" width="95%" mb={2}>
          <Typography level="body-lg">Pedido: #{id}</Typography>
        </Stack>

        {/* Detalhes do Pedido */}
        <styled.ContainerPedidoDetalhado>
          <styled.ContainerDados>
            <styled.texto direction={{ md: "column", lg: "row" }}>
              <Box
                component="img"
                src={pedido.img}
                sx={{
                  width: '7.6rem',
                  height: '7.6rem',
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: '0px 4px 4px rgba(0,0,0,0.2)',
                }}
              />
              <Stack>
                <Typography level="body-lg" mb="5%">{pedido.nome}</Typography>

                <Stack direction={{ sm: "column", md: "row" }} alignItems="center" gap={0.5}>
                  <Typography>Data da Compra: </Typography>
                  <Typography level="body-sm">{formatDate(pedido.dataCompra)}</Typography>
                </Stack>

                <Stack direction={{ sm: "column", md: "row" }} alignItems="center" gap={0.5}>
                  <Typography>Forma de Pagamento: </Typography>
                  <Typography level="body-sm">{pedido.formaPagamento}</Typography>
                </Stack>
                {/* 
                <Stack direction={{ sm: "column", md: "row" }} alignItems="center" gap={0.5}>
                  <Typography>Total Compra: </Typography>
                  <Typography level="body-sm">{formatarReal(pedido.totalCompra)}</Typography>
                </Stack> */}
              </Stack>
            </styled.texto>

            <Stack direction={{ md: "column", lg: "row" }} justifyContent="space-between" alignItems={{ md: "center", lg: "end" }} mt={2}>
              <Stack width={{ xs: "100%", md: "auto" }} mb={{ xs: 2, md: 0 }}>
                <Typography>Atualizar Status:</Typography>
                <FormControl
                  size="small"
                  sx={{ minWidth: "16.25rem", maxWidth: "16.25rem", backgroundColor: colorAtivo, borderRadius: "10px" }}
                >
                  <Select
                    value={statusAtivo}
                    onChange={handleStatusChange}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{ color: "white" }}
                  >
                    <MenuItem value={1}>Preparando</MenuItem>
                    <MenuItem value={2}>Enviado</MenuItem>
                    <MenuItem value={3}>Disponível para Retirada</MenuItem>
                    <MenuItem value={4}>Finalizado</MenuItem>
                    <MenuItem disabled value={5}>Cancelado</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Stack pr="2rem" width={{ xs: "100%", md: "auto" }}>
                <Typography>Entrega no endereço:</Typography>
                <Typography>{pedido.endereco}</Typography>
              </Stack>
            </Stack>
          </styled.ContainerDados>

          <hr />

          {/* Itens do Pedido */}
          <styled.ContainerItens>
            <Stack spacing={1}>
              <Typography level="body-lg" fontWeight="bold">Itens:</Typography>
              {pedido.itens.map((item, index) => (
                <Stack key={index} direction="row" sx={{ py: "0.2rem" }}>
                  <Typography sx={{ width: "40%" }}>{item.produto.nome}</Typography>
                  <Typography sx={{ width: "15%", textAlign: "center" }}>{item.quantidade_item_total}</Typography>
                  <Typography sx={{ width: "15%", textAlign: "center" }}>
                    {`${item.produto.quant_unit_medida} ${unidades[item.produto.fk_unidade_medida_id] ?? ''}`}
                  </Typography>

                  <Typography sx={{ width: "20%", textAlign: "right" }}>{formatarReal(item.produto.preco_unit)}</Typography>
                </Stack>
              ))}

              <Stack direction="row" justifyContent="space-between" sx={{ mt: "1.5rem", fontWeight: "bold" }}>
                <Typography>Total Itens: {pedido.itens.reduce((acc, item) => acc + item.quantidade_item_total, 0)}</Typography>
                <Typography>Total Compra: {formatarReal(pedido.itens.reduce((acc, item) => acc + item.preco_item_total, 0))}</Typography>
              </Stack>
            </Stack>

            {/* Botões de ação */}
            <Stack direction={{ md: "column", lg: "row" }} gap={2} mt={3}>
              <Button tamanho="md" onClick={handleCancelar} variante="ButtonOrange" espacamento={40}>Cancelar Pedido</Button>
              <Button tamanho="md" onClick={handleAtualizar} espacamento={75}>Atualizar</Button>
            </Stack>

            {/* Modais */}
            <PadraoModal
              open={openModal}
              onClose={() => setOpenModal(false)}
              title="Status atualizado com sucesso!"
              Icon={CircleCheck}
              description="O comprador já será notificado."
              onConfirm={() => setOpenModal(false)}
            />
            <PadraoModal
              open={openModalCancel}
              onClose={() => setOpenModalCancel(false)}
              title="Tem certeza que deseja cancelar essa venda?"
              Icon={CircleCheck}
              color="#FF2222"
              buttonText="Voltar"
              description="Caso prossiga, o comprador será notificado."
              btnTwo
              onConfirm={() => setOpenModalCancel(false)}
            />
          </styled.ContainerItens>
        </styled.ContainerPedidoDetalhado>
      </Container>

      <styled.Division />
      <Footer />
    </Container>
  );
};
