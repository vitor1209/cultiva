import { Navigate, Outlet } from "react-router";
import ScrollToTop from "../components/Scroll";

const produtor = (): boolean => {
    const user = localStorage.getItem("usuarioLogado");
    if (!user) return false;
    try {
        const dados = JSON.parse(user);
        return dados.Tipo_usuario.toLowerCase() === 'produtor';
    } catch {
        return false;
    }
};

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
