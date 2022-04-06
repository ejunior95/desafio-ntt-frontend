import { Container } from './styles';
import { ImSearch } from "react-icons/im";

function SearchBox() {
    return(
        <Container>
            <input type="text" name="search-txt" id="search-txt" placeholder="Pesquisar IMDb..."/>
            <ImSearch className="logo-search" />
        </Container>
    )
}

export default SearchBox;