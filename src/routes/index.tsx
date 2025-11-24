import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
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
import { PublicRoute, ProdutorRoute, ConsumidorRoute } from "./utils";

const RootLayout = () => <Outlet />;

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "*",
                element: <h1>Página não encontrada</h1>,
            },
            {
                element: <PublicRoute />,
                children: [
                    { path: "/", element: <HomePage /> },
                    { path: "/Sobre", element: <SobrePage /> },
                    { path: "/Login", element: <LoginPage /> },
                    { path: "/ResetSenha", element: <ResetSenhaPage /> },
                    { path: "/Cadastro", element: <CadastroPage /> },
                    { path: "/ResetTokenPage", element: <ResetTokenPage /> },
                    { path: "/PerfilProdutor/:hortaId", element: <PerfilProdutorPage /> },
                ],
            },
            {
                element: <ProdutorRoute />,
                children: [
                     { path: "/HomeProdutor", element: <HomePageProdutor /> },
                    { path: "/PerfilProdutor/:hortaId", element: <PerfilProdutorPage /> },
                    { path: "/Pedidos", element: <PedidosPage /> },
                    { path: "/Pedidos/:id", element: <PedidoDetalhePage /> },
                    { path: "/Cadastrar", element: <CadastrarProdutoPage /> },
                    { path: "/ProdutorPrivatePage", element: <ProdutorPrivatePage /> },
                    { path: "/EditarProdutoPage/:id", element: <EditarProdutoPage /> },
                    { path: "/DadosProdutor", element: <DadosProdutor /> },
                    
                ],
            },
            {
                element: <ConsumidorRoute />,
                children: [
                    { path: "/DadosConsumidor", element: <DadosConsumidor /> },
                    { path: "/Produto/:id", element: <ProdutoDetalhePage /> },
                    { path: "/HomeConsumidor", element: <HomeConsumidorPage /> },
                    { path: "/FinalizarCarrinho", element: <FinalizarCarrinhoPage /> },
                    { path: "/FinalizarEndereco", element: <FinalizarEnderecoPage /> },
                    { path: "/CarrinhoVazioPage", element: <CarrinhoVazioPage /> },
                ],
            },
        ],
    },
]);

export default function AppRoutes() {
    return <RouterProvider router={router} />;
}
