import { ImSearch } from 'react-icons/im';
import { Container } from './styles';

function SearchBox() {
  return (
    <Container>
      <input type="text" name="search-txt" id="search-txt" placeholder="Pesquisar IMDb..." />
      <ImSearch className="logo-search" />
    </Container>
  );
}

export default SearchBox;
