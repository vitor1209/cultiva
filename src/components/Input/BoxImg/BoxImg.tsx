import { useState } from "react";
import { Box, Typography } from "@mui/material";

type InputIMGProps = {
    name: string,
    label: string
}

export function InputImagem({ name, label }: InputIMGProps) {
    const [preview, setPreview] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
                    sx={{ fontSize: '1.25rem', textAlign: "left", fontWeight: 700, marginBottom: 1 }}
                >
                    {label}
                </Typography>
            )}

            <Box
                component="label"
                sx={{
                    width: "43rem",
                    height: "31.563rem",
                    borderRadius: "16px",
                    backgroundColor: "#f1f1f1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#333",
                    cursor: "pointer",
                    overflow: "hidden",
                    border: "2px dashed #ccc",
                    "&:hover": { backgroundColor: "#eaeaea" },
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

                <input
                    type="file"
                    accept="image/*"
                    hidden
                    name={name}
                    onChange={handleImageChange}
                />
            </Box>
        </Box>
    );
}
