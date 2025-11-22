
import SearchIcon from '@mui/icons-material/Search';
import * as styled from './barSearch.styled';

export default function SearchBar({ onSearchChange }: { onSearchChange: (v: string) => void }) {
    return (
        <styled.Search>
            <styled.SearchIconWrapper>
                <SearchIcon />
            </styled.SearchIconWrapper>

            <styled.StyledInputBase
                placeholder="Buscar produto..."
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </styled.Search>
    );
}