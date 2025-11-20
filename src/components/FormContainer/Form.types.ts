import type { ReactNode } from "react"

export interface ContainerFormProps {
    children: ReactNode
    childrenSecund?: ReactNode
    acao: "Login" | "Cadastro" | "Reset" | 'Token'
    onTabChange?: (tipoUsuario: "Consumidor" | "Produtor") => void
    initialTab?: "Consumidor" | "Produtor" 
}
