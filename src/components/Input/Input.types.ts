import type { InputBaseProps } from "@mui/material"
import type { LucideIcon } from "lucide-react"
import type { Control, FieldValues, Path } from "react-hook-form"

export interface InputProps<TFieldValues extends FieldValues>
    extends Omit<EstiloInput, "name" | "erro"> {
    name: Path<TFieldValues>
    control: Control<TFieldValues>
    Icon?: LucideIcon
    label?: string
    mask?: string
}

export interface EstiloInput extends Omit<InputBaseProps, "error"> {
    erro?: string
}
