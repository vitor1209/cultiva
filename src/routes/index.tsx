import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "./utils";
import { HomePage } from "../pages/Home/LandingPage/LandingPage";
import { CadastrarProdutoPage, CadastroPage, HomePageProdutor, LoginPage, PedidoDetalhe, PedidosPage } from "./pages";

export default function AppRoutes() {
    return (
        <Routes>
            {/* Rota pública
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
      </Route> */}

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

            {/* Rota padrão (Home sem login) */}
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}
