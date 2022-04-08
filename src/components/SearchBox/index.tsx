import { ImSearch } from 'react-icons/im';
import { Container } from './styles';

interface IProps {
  onChange: (e: string) => void;
  value: string;
}

function SearchBox(props: IProps) {
  const { onChange, value } = props;

  return (
    <Container>
      <input type="text" placeholder="Pesquisar IMDb..." value={value} onChange={e => onChange(e.target.value)} />
      <ImSearch className="logo-search" />
    </Container>
  );
}

export default SearchBox;
