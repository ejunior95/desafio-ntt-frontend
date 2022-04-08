import { Container } from './styles';
import PosterDefault from '../../assets/default_poster.jpg';

interface IProps {
  sourceImg?: string;
}

function Poster(props: IProps) {
  const { sourceImg } = props;

  return (
    <Container>
      {sourceImg === '' ? <img src={PosterDefault} alt="Movie Poster" /> : <img src={sourceImg} alt="Movie Poster" />}
    </Container>
  );
}

export default Poster;
