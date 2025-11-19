import { Navigate, Outlet } from "react-router-dom"

const getUsuario = () => {
    const user = localStorage.getItem("usuarioLogado")
    return user ? JSON.parse(user) : null
}

// PrivateRoute: permite acesso se estiver logado
export const PrivateRoute = () => {
    const usuario = getUsuario()
    if (!usuario) return <Navigate to="/" /> // sem usuário → login ou home pública
    return <Outlet /> // usuário logado → pode acessar
}

// PublicRoute: bloqueia acesso a páginas públicas se estiver logado
export const PublicRoute = () => {
    const usuario = getUsuario()
    if (!usuario) return <Outlet /> // não logado → pode acessar public pages

    // redireciona conforme tipo de usuário
    if (usuario.Tipo_usuario === "produtor") return <Navigate to="/HomeProdutor" />
    return <Navigate to="/" /> // consumidor
}
