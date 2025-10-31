import type { InputBaseProps } from "@mui/material"
import type { LucideIcon } from "lucide-react"
import type { ComponentProps } from "react"
import type { Control, FieldValues, Path } from "react-hook-form"
import { IMaskInput } from "react-imask"

export interface InputProps<TFieldValues extends FieldValues>
    extends Omit<EstiloInput, "name" | "erro"> {
    name: Path<TFieldValues>
    control: Control<TFieldValues>
    Icon?: LucideIcon
    label?: string
    mask?: ComponentProps<typeof IMaskInput>["mask"]
}

export interface EstiloInput extends Omit<InputBaseProps, "error"> {
    erro?: string
}

export type MaskedInputComponentProps = ComponentProps<typeof IMaskInput>
