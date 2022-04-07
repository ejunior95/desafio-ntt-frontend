import { Container } from './styles'
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function RatingStars() {
    return(
        <Container>
            <FaStar className="icon-star" />
            <FaStar className="icon-star" />
            <FaStar className="icon-star" />
            <FaStar className="icon-star" />
            <FaStar className="icon-star" />
        </Container>
    )
}

export default RatingStars