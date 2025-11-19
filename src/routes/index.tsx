import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "./utils";
import { HomePage } from "../pages/Home/LandingPage/LandingPage";
import { 
    CadastrarProdutoPage, 
    CadastroPage, 
    FinalizarCarrinhoPage, 
    FinalizarEnderecoPage, 
    HomePageProdutor, 
    LoginPage, 
    PedidoDetalhe, 
    PedidosPage, 
    ProdutoDetalhePage 
} from "./pages";

import { PerfilProdutorPage } from "../pages/PerfilProdutor/PerfilProdutorPublico";
import { ProdutorPrivatePage } from "../pages/PerfilProdutor/PerfilProdutorPrivado";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Rota privada */}
            <Route element={<PublicRoute />}>
                <Route path="/Home" element={<HomePage />} />
            </Route>

            <Route element={<PublicRoute />}>
                <Route path="/Login" element={<LoginPage />} />
            </Route>

            <Route element={<PublicRoute />}>
                <Route path="/Cadastro" element={<CadastroPage />} />
            </Route>

            <Route element={<PublicRoute />}>
                <Route path="/HomeProdutor" element={<HomePageProdutor />} />
            </Route>

            <Route element={<PublicRoute />}>
                <Route path="/Pedidos" element={<PedidosPage />} />
            </Route>

            <Route element={<PublicRoute />}>
                <Route path="/Pedidos/:id" element={<PedidoDetalhe />} />
            </Route>

            <Route element={<PublicRoute />}>
                <Route path="/Cadastrar" element={<CadastrarProdutoPage />} />
            </Route>

            <Route element={<PublicRoute />}>
<Route element={<PublicRoute />}>
    <Route path="/Perfil" element={<PerfilProdutorPage />} />
</Route>

<Route element={<PublicRoute />}>
    <Route path="/PerfilProdutor" element={<ProdutorPrivatePage />} />
</Route>

<Route element={<PublicRoute />}>
    <Route path="/ProdutoDetalhe" element={<ProdutoDetalhePage />} />
</Route>

<Route element={<PublicRoute />}>
    <Route path="/FinalizarCarrinho" element={<FinalizarCarrinhoPage />} />
</Route>

<Route element={<PublicRoute />}>
    <Route path="/FinalizarEndereco" element={<FinalizarEnderecoPage />} />
</Route>


            {/* Rota padrão (Home sem login) */}
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}
