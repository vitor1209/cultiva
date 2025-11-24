import { Navigate, Outlet } from "react-router";
import ScrollToTop from "../components/Scroll";

const produtor = (): boolean => {
    const dados = JSON.parse(localStorage.getItem("usuarioLogado")!)
    return dados.Tipo_usuario === 'Produtor'
}

// sem login
export const PublicRoute = () => {
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    );
};

// com login produtor
export const ProdutorRoute = () => {
    return produtor() ? <>  <ScrollToTop /> <Outlet /> </> : <Navigate to="/HomeProdutor" />
};

// com login consumidor
export const ConsumidorRoute = () => {
    return !produtor() ? <>  <ScrollToTop /> <Outlet /> </> : <Navigate to="/HomeConsumidor" />
};
