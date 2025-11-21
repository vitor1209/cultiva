import React from "react"
import { Modal, Stack } from "@mui/material"
import { CheckCircle } from "lucide-react"
import type { ModalProps } from ".//Modal.types"
import * as styled from "./Modal.styled"
import { Button } from "../Button/Button"
import Typography from "@mui/joy/Typography"

export const PadraoModal: React.FC<ModalProps> = ({
    open,
    onClose,
    onConfirm,
    title = "Status atualizado com sucesso!",
    description = "O comprador já será notificado.",
    buttonText = "Concluido",
    buttonTextTwo = 'Cancelar Venda',
    Icon = CheckCircle,
    color = "#16a34a",
    to = "/Pedidos",
    btnTwo = false
}) => {
    return (
        <Modal open={open} onClose={onClose}>
            <styled.Container>
                <styled.CloseButton onClick={onClose}>
                    ✕
                </styled.CloseButton>

                <styled.SuccessIconWrapper>
                    <Icon size={72} color={color} strokeWidth={2.5} />
                </styled.SuccessIconWrapper>

                <Typography level="title-lg" mb={'2%'}>{title}</Typography>
                <Typography level="body-sm" mb={'5%'}>{description}</Typography>

                {btnTwo
                    ?
                    <Stack gap={1}>
                        <Button to="/Pedidos" variante="ButtonRed" espacamento={70} onClick={onConfirm || onClose} tamanho="md">{buttonTextTwo}</Button>
                        <Button onClick={onClose} espacamento={100} tamanho="md">{buttonText}</Button>
                    </Stack>
                    :
                    <Button to={to} espacamento={70} onClick={() => {
                        if (to) window.location.href = to; 
                        else onConfirm?.();
                    }} tamanho="md">{buttonText}</Button>
                }

            </styled.Container>
        </Modal>
    )
}
