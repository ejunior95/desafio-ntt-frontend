import { Container } from './styles';
import LoadingIcon from '../../assets/loading-icon.svg';

function Loading() {
  return (
    <Container>
      <img src={LoadingIcon} alt="Carregando..." />
    </Container>
  );
}

export default Loading;
