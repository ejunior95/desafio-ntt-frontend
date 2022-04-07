import { Container } from './styles/app';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import CustomButton from './components/CustomButton';
import Poster from './components/Poster';
import RatingStars from './components/RatingStars';

function App() {
  return (
    <Container>
      <Header />
      <section className="content">
        <div className="search-container">
          <h2 className="title-search-container">Gostaria de saber mais sobre seu filme preferido?</h2>
          <p className="text-search-container">
            Digite o nome completo, ou parte dele, na área de pesquisa abaixo e buscaremos maiores informações em nossos
            bancos de dados.
          </p>
          <div className="components-container">
            <SearchBox />
            <CustomButton type="primary" text="Search" />
            <CustomButton type="primary" text="Reset" />
          </div>
        </div>

        <div className="details-container">
          <div className="components-details-container">
            <h2 className="title-details-container">Aguardando informações...</h2>
            <p className="text-details-container">Aguardando informações...</p>
            <div className="actor-details-container">
              <h5 className="subtitle-details-container">Actor</h5>
              <p>N/A</p>
            </div>
            <div className="review-details-container">
              <h5 className="subtitle-details-container">Review</h5>
              <RatingStars />
            </div>
            <CustomButton type="fav-button" text="Favorite" />
          </div>

          <div className="poster-details-container">
            <Poster />
          </div>
        </div>
      </section>
      <Footer />
    </Container>
  );
}

export default App;
