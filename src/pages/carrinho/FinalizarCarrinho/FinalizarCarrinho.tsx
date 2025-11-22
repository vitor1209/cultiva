import { Container, IconButton, Stack } from "@mui/material";
import { ShoppingCart, UserRound } from "lucide-react";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";
import SearchBar from "../../../components/barSearch/barSearch";
import { Button } from "../../../components/Button/Button";
import ProductCardComponent from "../../../components/CardCarrinho/CardCarrinho";
import Typography from "@mui/joy/Typography";
import { useState, useEffect } from "react";
import { ResumoCompra } from "../../../components/ResumoCompra/ResumoCompra";
import { useGetCarrinho } from "../../../controllers/carrinho.controller"; 
import type { CarrinhoGet } from "../../../models/carrinho.types";

export function FinalizarCarrinhoPage() {
  const [opcaoEntrega, setOpcaoEntrega] = useState<"residencia" | "horta">("residencia");
  const { data: carrinhoItemsOriginal, isLoading } = useGetCarrinho();

  // Estado local do carrinho
  const [carrinhoItems, setCarrinhoItems] = useState<CarrinhoGet.Item[]>([]);

  // Atualiza o estado local quando os dados do backend chegam
  useEffect(() => {
    if (carrinhoItemsOriginal) setCarrinhoItems(carrinhoItemsOriginal);
  }, [carrinhoItemsOriginal]);

  // Funções de aumentar/diminuir quantidade
  const aumentarQuantidade = (id: number) => {
    setCarrinhoItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantidade_item_total: item.quantidade_item_total + 1 }
          : item
      )
    );
  };

  const diminuirQuantidade = (id: number) => {
    setCarrinhoItems(prev =>
      prev.map(item =>
        item.id === id && item.quantidade_item_total > 1
          ? { ...item, quantidade_item_total: item.quantidade_item_total - 1 }
          : item
      )
    );
  };

  // Calcular subtotal e total com base no estado local
  const entrega = opcaoEntrega === "horta" ? 0 : 8.0;
  const subtotal = carrinhoItems.reduce((acc, item) => acc + item.preco_item_total, 0);
  const total = subtotal + entrega;

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ backgroundColor: "#fff8f0", textAlign: "center", marginTop: 8, padding: 0 }}
    >
      <Header
        end={
          <Stack direction={'row'} gap={3}>
            <IconButton aria-label="carrinho" size="large">
              <ShoppingCart />
            </IconButton>
            <IconButton aria-label="usuario" size="large">
              <UserRound />
            </IconButton>
          </Stack>
        }
        start={
          <Stack flex={1} minWidth="250px" maxWidth="400px">
            <SearchBar />
          </Stack>
        }
      >
        <>
          <Button variante="ButtonLinkBlack" tamanho="sm">Início</Button>
          <Button variante="ButtonLinkBlack" tamanho="sm">Produtores</Button>
          <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">Produtos</Button>
          <Button variante="ButtonLinkBlack" tamanho="sm">Como Funciona</Button>
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
              price={item.preco_item_total} 
              quantity={item.quantidade_item_total}
              imageUrl={
                item.produto.imagens[0]?.caminho
                  ? `http://127.0.0.1:8000/storage/${item.produto.imagens[0].caminho}`
                  : "https://veja.abril.com.br/wp-content/uploads/2016/12/maconha.jpg?crop=1&resize=1212,909"
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
            total={total}
            opcaoEntrega={opcaoEntrega}
            onChangeEntrega={setOpcaoEntrega}
            onFinalizar={() => console.log("Finalizou!")}
            onContinuar={() => console.log("Continuar!")}
            page="Confirmar"
          />
        </Stack>
      </Stack>

      <Stack p={"3% 0"} />
      <Footer />
    </Container>
  );
}
