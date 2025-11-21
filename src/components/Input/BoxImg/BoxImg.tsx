import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useController, type Control, type FieldValues, type Path } from "react-hook-form";

type InputIMGProps<FormType extends FieldValues> = {
    name: Path<FormType>;
    label?: string;
    control: Control<FormType>;
    defaultImage?: string; // URL inicial só para preview
    readOnly?: boolean;
    width?: number;
    height?: number;
};

export function InputImagem<FormType extends FieldValues>({
    name,
    label,
    control,
    defaultImage,
    readOnly,
    width = 43,
    height = 31.563,
}: InputIMGProps<FormType>) {

    const { field } = useController({
        name,
        control,
        defaultValue: undefined, // form recebe File | undefined
    });

    const [preview, setPreview] = useState<string | null>(defaultImage || null);

    useEffect(() => {
    if (field.value && typeof field.value === "object" && "name" in field.value && "size" in field.value) {
        // é um File
        setPreview(URL.createObjectURL(field.value as File));
    } else if (typeof field.value === "string") {
        // é uma URL
        setPreview(field.value);
    } else {
        setPreview(defaultImage ?? null);
    }
}, [field.value, defaultImage]);


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (readOnly) return;

        const file = event.target.files?.[0];
        if (file) {
            field.onChange(file); // envia File para o form
        }
    };

    return (
        <Box>
            {label && (
                <Typography sx={{ fontSize: "1.25rem", fontWeight: 700, mb: 1 }}>
                    {label}
                </Typography>
            )}

            <Box
                component="label"
                sx={{
                    width: `${width}rem`,
                    height: `${height}rem`,
                    borderRadius: "16px",
                    backgroundColor: "#f1f1f1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: readOnly ? "default" : "pointer",
                    overflow: "hidden",
                    border: "2px dashed #ccc",
                }}
            >
                {preview ? (
                    <Box
                        component="img"
                        src={preview}
                        alt="Prévia"
                        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                ) : (
                    <Typography>Inserir Imagem</Typography>
                )}

                {!readOnly && (
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        name={field.name}
                        ref={field.ref}
                        onChange={handleImageChange}
                    />
                )}
            </Box>
        </Box>
    );
}
