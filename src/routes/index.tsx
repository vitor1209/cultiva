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
    // ProdutoDetalhePage,
    FinalizarCarrinhoPage,
    FinalizarEnderecoPage,
    ProdutorPrivatePage,
    PerfilProdutorPage,
    EditarProdutoPage,
    ResetSenhaPage,
    ResetTokenPage,
    HomeConsumidorPage,
} from "./pages";


export default function AppRoutes() {
    return (
        <Routes>
            {/* Rotas públicas */}
            <Route element={<PublicRoute />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/HomeConsumidor" element={<HomeConsumidorPage />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/ResetSenha" element={<ResetSenhaPage />} />
                <Route path="/Cadastro" element={<CadastroPage />} />
                {/* <Route path="/ProdutoDetalhe" element={<ProdutoDetalhePage />} /> */}
                <Route path="/FinalizarCarrinho" element={<FinalizarCarrinhoPage />} />
                <Route path="/FinalizarEndereco" element={<FinalizarEnderecoPage />} />
                <Route path="/PerfilProdutorPage" element={<PerfilProdutorPage />} />
                <Route path="/ResetTokenPage" element={<ResetTokenPage />} />
                
            </Route>

            {/* Rotas privadas */}
            <Route element={<PrivateRoute />}>
                <Route path="/HomeProdutor" element={<HomePageProdutor />} />
                <Route path="/Pedidos" element={<PedidosPage />} />
                <Route path="/Pedidos/:id" element={<PedidoDetalhe />} />
                <Route path="/Cadastrar" element={<CadastrarProdutoPage />} />
                <Route path="/ProdutorPrivatePage" element={<ProdutorPrivatePage />} />
                <Route path="/EditarProdutoPage/:id" element={<EditarProdutoPage />} />
            </Route>
        </Routes>
    );
}
