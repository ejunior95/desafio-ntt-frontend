import { FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Container } from './styles';

interface IProps {
  rating: string;
}

const RatingStars = (props: IProps) => {
  const { rating } = props;

  const [starCounting, setStarCounting] = useState(10);

  function getRating(rating: string) {
    if (!rating || rating === '') {
      setStarCounting(10);
    } else {
      const splitRatingStr = rating.split('.');
      const ratingNumberInt = parseInt(splitRatingStr[0]);
      setStarCounting(ratingNumberInt);
    }
  }

  useEffect(() => {
    getRating(rating);
  }, [rating]);

  return (
    <Container>
      <FaStar className="icon-star empty" />
      <FaStar className="icon-star empty" />
      <FaStar className="icon-star empty" />
      <FaStar className="icon-star empty" />
      <FaStar className="icon-star empty" />
    </Container>
  );
};

export default RatingStars;
