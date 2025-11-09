import type { ButtonProp } from "./Button.types"
import { Link } from "react-router"
import * as Component from "./Button.styled"

export const Button = ({
    variante = "ButtonGreen",
    tamanho,
    loading,
    disabled,
    children,
    espacamento,
    icon: Icon,
    ladoIcon = "esquerda",
    ...props
}: ButtonProp) => {
    const iconSizeMap = {
        sm: 15,
        md: 20,
        lg: 25,
        xl: 30,
    }

    const iconSize = iconSizeMap[tamanho] || 20

    return (
        <Component.ButtonVariants
            disabled={disabled || loading}
            LinkComponent={Link}
            variante={variante}
            tamanho={tamanho}
            espacamento={espacamento || 0}
            {...props}
        >
            {ladoIcon == "esquerda" && Icon && <Icon size={iconSize} />}
            {<span>{children}</span>}
            {ladoIcon == "direita" && Icon && <Icon size={iconSize} />}
        </Component.ButtonVariants>
    )
}