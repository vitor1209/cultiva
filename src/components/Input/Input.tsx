import type { EstiloInput, InputProps, MaskedInputComponentProps } from "./Input.types"
import { InputAdornment, Stack, Typography } from "@mui/material"
import * as Styled from "./Input.styled"
import { Controller, type FieldValues } from "react-hook-form"
import { IMaskInput } from "react-imask"
import { forwardRef, type FormEvent } from "react"

const MaskedInputComponent = forwardRef<HTMLInputElement, MaskedInputComponentProps>(
    ({ onChange, value, ...props }, ref) => (
        <IMaskInput
            {...props}
            overwrite={false}
            lazy={false}
            inputRef={ref}
            value={String(value ?? "")}
            onAccept={(val) => {
                if (onChange)
                    onChange({ target: { value: val } } as unknown as FormEvent<HTMLInputElement>)
            }}
        />
    )
)

export const Input = <T extends FieldValues>({
    name,
    control,
    Icon,
    label,
    mask,
    ...props
}: InputProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
                const defaultProps: EstiloInput = {
                    ...props,
                    ...field,
                    id: name,
                    name,
                    value: field.value || "",
                    erro: error?.message,
                    inputRef: field.ref,
                }
                return (
                    <Stack
                        position="relative"
                        sx={{
                            "&:focus-within .input-label": {
                                transform: "scale(1.1)",
                                transition: "transform 0.2s ease",
                            },
                        }}
                    >
                        {label && (
                            <Typography
                                className="input-label"
                                variant="subtitle1"
                                color="#0A0A0A"
                                fontWeight={500}
                                sx={{
                                    display: "inline-block",
                                    transition: "transform 0.2s ease",
                                    transformOrigin: "left center",
                                }}
                            >
                                {label}
                            </Typography>
                        )}

                        <Styled.InputForm
                            {...defaultProps}
                            inputComponent={mask ? MaskedInputComponent : undefined}
                            inputProps={mask ? { mask } : {}}
                            endAdornment={
                                <InputAdornment position="end">
                                    {Icon && <Icon size={20} color="#FF2222" />}
                                </InputAdornment>
                            }
                        />

                        <Typography
                            variant="body2"
                            color="#A91208"
                        >
                            {error?.message || " "}
                        </Typography>
                    </Stack>
                )
            }}
        />
    )
}