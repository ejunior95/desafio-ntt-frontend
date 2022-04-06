import { Container } from "./styles";
import PosterDefault from "../../assets/default_poster.jpg"

function Poster() {
    return(
        <Container>
            <img src={PosterDefault} alt="Movie Poster" />
        </Container>
    )
}

export default Poster