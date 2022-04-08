import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Container } from './styles';

interface IProps {
  rating: string;
}

function getRating(ratingStars: string) {
  try {
    const ratingNumber = parseFloat(ratingStars);
    console.log(ratingNumber);
    if (isNaN(ratingNumber)) {
      console.error('Failed to convert string in float');
    } else {
      const ratingNumberInt = Math.floor(ratingNumber);
      for (let i = 0; i < ratingNumberInt; i++) {
        <>
          <FaStar className="icon-star full" />
        </>;
      }
    }
  } catch (err) {
    console.error(err);
  }
}

function RatingStars(props: IProps) {
  const { rating } = props;

  useEffect(() => {
    getRating(rating);
  }, []);

  return (
    <Container>
      <FaStar className="icon-star empty" />
      <FaStar className="icon-star empty" />
      <FaStar className="icon-star empty" />
      <FaStar className="icon-star empty" />
      <FaStar className="icon-star empty" />
      <FaStar className="icon-star empty" />
      <FaStar className="icon-star empty" />
      <FaStar className="icon-star empty" />
      <FaStar className="icon-star empty" />
      <FaStar className="icon-star empty" />
    </Container>
  );
}

export default RatingStars;
