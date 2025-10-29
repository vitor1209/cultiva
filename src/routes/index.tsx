import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "./utils";
import { HomePage } from "../pages/Home/HomePage";
import { CadastroPage, LoginPage } from "./pages";
// import Login from "../pages/Login"; // se quiser, pode criar depois

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

            {/* Rota padrão (Home sem login) */}
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}
