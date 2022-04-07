import { AiFillHeart } from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <p>Desenvolvido com</p>
      <AiFillHeart className="icon-heart" />
      <p>por Edvaldo de Ramos Junior</p>
    </Container>
  );
}

export default Footer;
