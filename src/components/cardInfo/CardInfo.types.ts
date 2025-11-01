import type { LucideIcon } from "lucide-react"

export interface CardInfoProps {
    name: string
    valor: string
    color: "blue" | "green" | "purple" | "orange"
    acrescimo?: string
    tamanho: "md" | "lg"
    to?: string
    icon: LucideIcon
}
