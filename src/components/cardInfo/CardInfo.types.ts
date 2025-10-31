import type { LucideIcon } from "lucide-react"

export interface CardInfoProps {
    name: string
    valor: string
    color: "azul" | "verde" | "roxo" | "laranja"
    acrescimo?: string
    tamanho: "md" | "lg"
    to?: string
    icon: LucideIcon
}
