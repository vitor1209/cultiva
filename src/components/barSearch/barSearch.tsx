
import SearchIcon from '@mui/icons-material/Search';
import * as styled from './barSearch.styled';

export default function SearchBar() {
    return (
        <styled.Search >
            <styled.SearchIconWrapper>
                <SearchIcon />
            </styled.SearchIconWrapper>
            <styled.StyledInputBase
                placeholder="Buscar produto ou produtor..."
                inputProps={{ 'aria-label': 'search' }}
            />
        </styled.Search>
    );
}
