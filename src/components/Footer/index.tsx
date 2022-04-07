import { Container } from './styles';
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  return ( 
    <Container>
      <p>Desenvolvido com</p><AiFillHeart className="icon-heart"/><p>por Edvaldo de Ramos Junior</p>
    </Container>
  )
}

export default Footer