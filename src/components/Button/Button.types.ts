import type { ButtonBaseProps } from "@mui/material"
import type { LucideIcon } from "lucide-react"

export interface ButtonProp extends ButtonBaseProps {
    variante?:
        | "ButtonGreen"
        | "ButtonLinkBlack"
        | "ButtonLinkGreen"
        | "ButtonOrange"
        | "ButtonRed"
        | "ButtonLinkRed"
        | "ButtonGray"
    tamanho: "sm" | "md" | "lg" | "xl"
    espacamento?: number
    loading?: boolean
    to?: string
    href?: string
    viewTransition?: boolean
    icon?: LucideIcon
    ladoIcon?: "direita" | "esquerda"
}
