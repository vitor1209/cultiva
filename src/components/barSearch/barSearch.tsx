import { useEffect, useState } from "react";
import { Box, List, ListItem, ListItemButton, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Search, SearchIconWrapper, StyledInputBase } from "./barSearch.styled"; // seu CSS aqui
import SearchIcon from "@mui/icons-material/Search";
import { api } from "../../lib/api/api";

interface Produto {
    id: number;
    nome: string;
}

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Produto[]>([]);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();

    const searchProducts = async (value: string) => {
        if (value.trim() === "") {
            setResults([]);
            return;
        }

        try {
            const response = await api.get("/produtos", {
                params: { nome: value },
            });

            setResults(response.data.data || []);
            setOpen(true);
        } catch (error) {
            console.error("Erro ao buscar produtos", error);
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => searchProducts(query), 300);
        return () => clearTimeout(timeout);
    }, [query]);

    return (
        <Box sx={{ position: "relative", width: "100%" }}>
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>

                <StyledInputBase
                    placeholder="Buscar produtos..."
                    inputProps={{ "aria-label": "search" }}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => query && setOpen(true)}
                />
            </Search>

            {open && results.length > 0 && (
                <Paper
                    elevation={3}
                    sx={{
                        position: "absolute",
                        top: "110%",
                        width: "100%",
                        zIndex: 20,
                        borderRadius: "10px",
                        maxHeight: "250px",
                        overflowY: "auto",
                        fontFamily: "Arimo"
                    }}
                >
                    <List>
                        {results.map((item) => (
                            <ListItem key={item.id} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        navigate(`/Produto/${item.id}`);
                                        setOpen(false);
                                    }}
                                >
                                    {item.nome}
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            )}
        </Box>
    );
}