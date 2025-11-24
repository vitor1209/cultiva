import { Container, IconButton, Stack } from "@mui/material";
import { UserRound } from "lucide-react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import { Button } from "../../../components/Button/Button";
import ProductCardComponent from "../../../components/CardCarrinho/CardCarrinho";
import Typography from "@mui/joy/Typography";
import { ResumoCompra } from "../../../components/ResumoCompra/ResumoCompra";
import { CarrinhoButton } from "../carrinho.hook";
import { useFinalizarCarrinho } from "./FinalizarCarrinho.hook";
import SearchBar from "../../../components/barSearch/barSearch";

export function FinalizarCarrinhoPage() {

  const {
    carrinhoItems,
    isLoading,
    aumentarQuantidade,
    diminuirQuantidade,
    subtotal,
    freteTotal,
    entrega,
    total,
    opcaoEntrega,
    setOpcaoEntrega,
    handleFinalizar
  } = useFinalizarCarrinho();

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ backgroundColor: "#fff8f0", textAlign: "center", marginTop: 8, padding: 0 }}
    >
      <Header
        end={
          <Stack direction={'row'} gap={3}>
            <CarrinhoButton />
            <IconButton aria-label="usuario" size="large" href="/DadosConsumidor">
              <UserRound />
            </IconButton>
          </Stack>
        }
        start={
          <Stack flex={1} minWidth="250px" maxWidth="400px" zIndex={"300000"}>
            <SearchBar />
          </Stack>
        }
      >
        <>
          <Button variante="ButtonLinkBlack" tamanho="sm" to="/HomeConsumidor">Início</Button>
          <Button variante="ButtonLinkBlack" to="/HomeConsumidor#produtos" tamanho="sm">Produtos</Button>

          <Button variante="ButtonLinkBlack" to="/HomeConsumidor#produtores" tamanho="sm">Produtores</Button>
          <Button variante="ButtonLinkBlack" to="/Sobre" tamanho="sm">Sobre</Button>
        </>
      </Header>

      <Stack p={"3% 0"} />

      <Stack direction={{ md: "column", lg: "row" }}>
        <Stack gap={2} alignItems={'center'} flex={5}>
          <Typography level="h3">Carrinho de Compras</Typography>

          {isLoading && <Typography>Carregando...</Typography>}
          {!isLoading && carrinhoItems.length === 0 && (
            <Typography>Nenhum item no carrinho.</Typography>
          )}

          {!isLoading && carrinhoItems.map(item => (
            <ProductCardComponent
              key={item.id}
              id={item.id}
              title={item.produto.nome}
              farm={`Horta ${item.produto.descricao}`}
              price={item.produto.preco_unit}
              quantity={item.quantidade_item_total}
              imageUrl={
                item.produto.imagens[0]?.caminho
                  ? `http://127.0.0.1:8000/storage/${item.produto.imagens[0].caminho}`
                  : "https://via.placeholder.com/300"
              }
              onIncrease={() => aumentarQuantidade(item.id)}
              onDecrease={() => diminuirQuantidade(item.id)}
              onDelete={() => console.log("Remover")}
            />
          ))}
        </Stack>

        <Stack p={"3% 0"} />

        <Stack flex={3}>
          <ResumoCompra
            subtotal={subtotal}
            entrega={entrega}
            freteTotal={freteTotal}
            total={total}
            opcaoEntrega={opcaoEntrega}
            onChangeEntrega={setOpcaoEntrega}
            onFinalizar={handleFinalizar}
            onContinuar={() => console.log("Continuar!")}
            page="Confirmar"
            formaPagamento={false}
            onChangePagamento={() => { }} />
        </Stack>
      </Stack>

      <Stack p={"3% 0"} />
      <Footer />
    </Container>
  );
}
