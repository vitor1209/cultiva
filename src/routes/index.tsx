import { Routes, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./utils";
import {
  HomePage,
  LoginPage,
  CadastroPage,
  HomePageProdutor,
  PedidosPage,
  PedidoDetalhe,
  CadastrarProdutoPage,
  ProdutoDetalhePage,
  FinalizarCarrinhoPage,
  FinalizarEnderecoPage,
} from "./pages";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route element={<PublicRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Cadastro" element={<CadastroPage />} />
        <Route path="/ProdutoDetalhe" element={<ProdutoDetalhePage />} />
        <Route path="/FinalizarCarrinho" element={<FinalizarCarrinhoPage />} />
        <Route path="/FinalizarEndereco" element={<FinalizarEnderecoPage />} />
      </Route>

      {/* Rotas privadas */}
      <Route element={<PrivateRoute />}>
        <Route path="/HomeProdutor" element={<HomePageProdutor />} />
        <Route path="/Pedidos" element={<PedidosPage />} />
        <Route path="/Pedidos/:id" element={<PedidoDetalhe />} />
        <Route path="/Cadastrar" element={<CadastrarProdutoPage />} />
      </Route>
    </Routes>
  );
}
