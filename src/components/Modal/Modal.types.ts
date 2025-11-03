import type { LucideIcon } from "lucide-react"

export interface ModalProps {
    open: boolean
    onClose: () => void
    onConfirm?: () => void
    title?: string
    description?: string
    buttonText?: string
    buttonTextTwo?: string
    Icon?: LucideIcon
    color?: string
    btnTwo?: boolean
}
