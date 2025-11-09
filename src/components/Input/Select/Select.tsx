import { AlertCircle, ChevronDown } from "lucide-react"
import * as Styled from "./Select.styled"
import type { SelectProps } from "./SelectControlado.types"
import { Stack, Typography } from "@mui/material"
import { Controller, type FieldValues } from "react-hook-form"

export const SelectControlado = <TFieldValues extends FieldValues>({
    control,
    children,
    placeholder = "",
    bgcolor,
    name,
    ladoSeta = "direita",
    ...props
}: SelectProps<TFieldValues>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, ...field }, fieldState: { error } }) => {
                return (
                    <Stack
                        gap={0.75}
                        {...(props.fullWidth && { width: "100%" })}
                    >
                        <Styled.SelectInput
                            ladoSeta={ladoSeta}
                            displayEmpty
                            bgcolor={bgcolor}
                            isPlaceholder={value === undefined || value === "" || value === null}
                            {...((value === undefined || value === "" || value === null) &&
                                placeholder && {
                                renderValue: () => placeholder,
                            })}
                            IconComponent={ChevronDown}
                            MenuProps={{
                                slotProps: {
                                    paper: {
                                        sx: {
                                            border: "0.809px solid #D0D5DD",
                                            color: "#667085",
                                            padding: 1,
                                            borderRadius: "8px",
                                            marginTop: 1,
                                            boxShadow: "0px 0.809px 1.619px 0px rgba(16, 24, 40, 0.05)",

                                            ".Mui-selected": {
                                                background: "rgb(246, 247, 248) !important",
                                            },
                                            ".MuiMenuItem-root:hover": {
                                                background: "rgb(246, 247, 248)",
                                            },

                                            ".MuiMenuItem-root": {
                                                transition: ".12s linear",
                                                borderRadius: 1.5,
                                            },

                                            ul: {
                                                padding: 0,
                                            },

                                            li: {
                                                fontSize: 16,
                                                fontWeight: 400,
                                                lineHeight: "20px",
                                            },
                                        },
                                    },
                                },
                            }}
                            {...(error !== undefined && {
                                endAdornment: (
                                    <Stack
                                        className="erro"
                                        hidden={!error}
                                    >
                                        <AlertCircle />
                                    </Stack>
                                ),
                                error: !!error,
                            })}
                            {...props}
                            {...field}
                        >
                            {children}
                        </Styled.SelectInput>

                        <Typography
                            variant="body2"
                            color="#D92D20"
                            className="helper-text"
                        >
                            {error?.message || " "}
                        </Typography>
                    </Stack>
                )
            }}
        />
    )
}
