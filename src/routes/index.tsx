import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "./utils";
import { HomePage } from "../pages/Home/HomePage";
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

            {/* Rota padrão (Home sem login) */}
            <Route path="/" element={<HomePage />} />
        </Routes>
    );
}
