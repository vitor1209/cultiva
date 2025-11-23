import { Routes, Route } from "react-router-dom";
import { PublicRoute, PrivateRoute } from "./utils";
import {
    HomePage,
    LoginPage,
    CadastroPage,
    HomePageProdutor,
    PedidosPage,
    PedidoDetalhePage,
    CadastrarProdutoPage,
    ProdutoDetalhePage,
    FinalizarCarrinhoPage,
    FinalizarEnderecoPage,
    ProdutorPrivatePage,
    PerfilProdutorPage,
    EditarProdutoPage,
    ResetSenhaPage,
    ResetTokenPage,
    HomeConsumidorPage,
    CarrinhoVazioPage,
    DadosProdutor,
    DadosConsumidor,
    SobrePage, 

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
                <Route path="/Produto/:id" element={<ProdutoDetalhePage />} />
                <Route path="/FinalizarCarrinho" element={<FinalizarCarrinhoPage />} />
                <Route path="/FinalizarEndereco" element={<FinalizarEnderecoPage />} />
                <Route path="/PerfilProdutor/:hortaId" element={<PerfilProdutorPage />} />
                <Route path="/ResetTokenPage" element={<ResetTokenPage />} />
                <Route path="/CarrinhoVazioPage" element={<CarrinhoVazioPage />} />        
                <Route path="/Sobre" element={<SobrePage/>} />      
                
            </Route>

            {/* Rotas privadas */}
            <Route element={<PrivateRoute />}>
                <Route path="/HomeProdutor" element={<HomePageProdutor />} />
                <Route path="/Pedidos" element={<PedidosPage />} />
                <Route path="/Pedidos/:id" element={<PedidoDetalhePage />} />
                <Route path="/Cadastrar" element={<CadastrarProdutoPage />} />
                <Route path="/ProdutorPrivatePage" element={<ProdutorPrivatePage />} />
                <Route path="/EditarProdutoPage/:id" element={<EditarProdutoPage />} />
                <Route path="/DadosProdutor" element={<DadosProdutor />} />
                <Route path="/DadosConsumidor" element={<DadosConsumidor />} />

            </Route>
        </Routes>
    );
}
