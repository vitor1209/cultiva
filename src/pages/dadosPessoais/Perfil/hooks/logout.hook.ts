import { useNavigate } from "react-router"

export const useLogout = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("usuarioLogado")
        navigate("/login")
    }

    return { handleLogout }
}