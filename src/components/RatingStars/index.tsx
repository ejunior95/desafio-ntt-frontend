import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa';

import { Container } from './styles';

function RatingStars() {
  return (
    <Container>
      <FaStar className="icon-star" />
      <FaStar className="icon-star" />
      <FaStar className="icon-star" />
      <FaStar className="icon-star" />
      <FaStar className="icon-star" />
    </Container>
  );
}

export default RatingStars;
