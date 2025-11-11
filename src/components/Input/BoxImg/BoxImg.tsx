import { useState } from "react";
import { Box, Typography } from "@mui/material";

type InputIMGProps = {
    name: string;
    label?: string;
    defaultImage?: string;
    readOnly?: boolean;
    width?: number;
    height?: number;
};

export function InputImagem({ name, label, defaultImage, readOnly, width = 43, height = 31.563 }: InputIMGProps) {
    const [preview, setPreview] = useState<string | null>(defaultImage || null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (readOnly) return;
        const file = event.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    };

    return (
        <Box>
            {label && (
                <Typography
                    sx={{ fontSize: "1.25rem", textAlign: "left", fontWeight: 700, marginBottom: 1 }}
                >
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
                    color: "#333",
                    cursor: readOnly ? "default" : "pointer",
                    overflow: "hidden",
                    border: "2px dashed #ccc",
                    "&:hover": readOnly ? {} : { backgroundColor: "#eaeaea" },
                }}
            >
                {preview ? (
                    <Box
                        component="img"
                        src={preview}
                        alt="Prévia da imagem"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                ) : (
                    <Typography>Inserir Imagem</Typography>
                )}

                {!readOnly && (
                    <input
                        type="file"
                        accept="image/*"
                        hidden
                        name={name}
                        onChange={handleImageChange}
                    />
                )}
            </Box>
        </Box>
    );
}
