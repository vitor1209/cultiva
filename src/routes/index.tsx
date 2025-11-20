import { Routes, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./utils";
import PerfilProdutor from "../pages/Produtor/PerfilProdutor"

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
    ProdutorPrivatePage,
    PerfilProdutorPage,
    ResetSenhaPage,
    ResetTokenPage,
    HomeConsumidorPage,
} from "./pages";

// Caso queira manter sua página antiga (import de PerfilProdutor)
// import PerfilProdutor from "../pages/Produtor/PerfilProdutor";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Rotas públicas */}
            <Route element={<PublicRoute />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/HomeConsumidor" element={<HomeConsumidorPage />} />

                <Route path="/Login" element={<LoginPage />} />
                <Route path="/ResetSenha" element={<ResetSenhaPage />} />
                <Route path="/ResetTokenPage" element={<ResetTokenPage />} />

                <Route path="/Cadastro" element={<CadastroPage />} />

                <Route path="/ProdutoDetalhe" element={<ProdutoDetalhePage />} />
                <Route path="/FinalizarCarrinho" element={<FinalizarCarrinhoPage />} />
                <Route path="/FinalizarEndereco" element={<FinalizarEnderecoPage />} />

                {/* Rotas de perfil público do produtor */}
                <Route path="/PerfilProdutorPage" element={<PerfilProdutorPage />} />

                {/* Compatibilidade com sua rota antiga */}
                {/* <Route path="/PerfilProdutor" element={<PerfilProdutor />} /> */}
                <Route path="/PerfilProdutor" element={<PerfilProdutor />} />
            </Route>

            {/* Rotas privadas */}
            <Route element={<PrivateRoute />}>
                <Route path="/HomeProdutor" element={<HomePageProdutor />} />
                <Route path="/Pedidos" element={<PedidosPage />} />
                <Route path="/Pedidos/:id" element={<PedidoDetalhe />} />
                <Route path="/Cadastrar" element={<CadastrarProdutoPage />} />
                <Route path="/ProdutorPrivatePage" element={<ProdutorPrivatePage />} />
            </Route>
        </Routes>
    );
}
