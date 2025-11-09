import { type SelectProps as RootSelectProps } from "@mui/material"
import type { Control, FieldValues, Path } from "react-hook-form"

export interface SelectProps<TFieldValues extends FieldValues>
    extends Omit<StyledSelectProps, "name" | "erro"> {
    erro?: string
    name: Path<TFieldValues>
    control: Control<TFieldValues>
    placeholder?: string
}

export interface StyledSelectProps extends Omit<RootSelectProps, "error" | "placeholder"> {
    /** Espaçamento interno do input */
    padding?: string
    /** Define se o input está com erro */
    erro?: string
    /** Define o tamanho do input */
    tamanho?: "sm" | "md"
    /** Cor do fundo */
    bgcolor?: string
    /** Altura */
    height?: number
    /** Lado da seta (ícone) */
    ladoSeta?: "esquerda" | "direita"
}
