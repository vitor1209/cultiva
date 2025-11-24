import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = (): boolean => {
    const user = localStorage.getItem("usuarioLogado")
    return !!user
}

const produtor = (): boolean => {
   const dados = JSON.parse(localStorage.getItem("usuarioLogado")!)
   return dados.Tipo_usuario === 'Produtor'
}

// sem login
export const PublicRoute = () => {
    return !isAuthenticated() ? <Outlet /> : <Navigate to="/" />
};

// com login produtor
export const ProdutorRoute = () => {
    return produtor() ? <Outlet /> : <Navigate to="/HomeProdutor" />
};

// com login consumidor
export const ConsumidorRoute = () => {
    return !produtor() ? <Outlet /> : <Navigate to="/HomeConsumidor" />
};
