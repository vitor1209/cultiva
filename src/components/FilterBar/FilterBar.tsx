import Typography from "@mui/joy/Typography";
import { Stack, FormControl, Select, MenuItem, type SelectChangeEvent } from "@mui/material";
import { Filter } from "lucide-react";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


type StatusType = "Todos" | "Preparando" | "Enviado" | "Disponível para Retirada" | 'Finalizado' | 'Cancelado';
type SortType = "Mais recentes" | "Mais antigos";

interface FilterBarProps {
    onFilterChange?: (filters: { status: StatusType; sort: SortType }) => void;
}

export const FilterBar = ({ onFilterChange }: FilterBarProps) => {
    const [status, setStatus] = useState<StatusType>("Todos");
    const [sort, setSort] = useState<SortType>("Mais recentes");

    const handleStatusChange = (event: SelectChangeEvent) => {
        const newStatus = event.target.value as StatusType;
        setStatus(newStatus);
        onFilterChange?.({ status: newStatus, sort });
    };

    const handleSortChange = (event: SelectChangeEvent) => {
        const newSort = event.target.value as SortType;
        setSort(newSort);
        onFilterChange?.({ status, sort: newSort });
    };

    return (
        <Stack
            gap={2.5}
            alignItems="center"
            justifyContent="start"
            width="100%"
            sx={{
                flexDirection: { sx: 'column', sm: 'row' },
                maxWidth: "100%",
                boxSizing: "border-box",
                p: 2,
                borderRadius: 2,
                backgroundColor: "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
        >
            <Filter />
            <Typography>Filtros: </Typography>
            {/* Filtro por status */}
            <FormControl size="small" sx={{ minWidth: '12rem', borderRadius: '8px', backgroundColor: "#f2f2f5", }}>
                <Select value={status} onChange={handleStatusChange} IconComponent={KeyboardArrowDownIcon} sx={{ borderRadius: '8px' }}>
                    <MenuItem value="Todos">Todos</MenuItem>
                    <MenuItem value="Preparando">Preparando</MenuItem>
                    <MenuItem value="Enviado">Enviado</MenuItem>
                    <MenuItem value="Disponível para Retirada">Disponível para Retirada</MenuItem>
                    <MenuItem value="Finalizado">Finalizado</MenuItem>
                </Select>
            </FormControl>

            {/* Ordenação */}
            <FormControl size="small" sx={{ minWidth: '12rem', backgroundColor: "#f2f2f5" }}>
                <Select value={sort} onChange={handleSortChange} IconComponent={KeyboardArrowDownIcon} sx={{ borderRadius: '8px' }}>
                    <MenuItem value="Mais recentes">Mais recentes</MenuItem>
                    <MenuItem value="Mais antigos">Mais antigos</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    );
};
