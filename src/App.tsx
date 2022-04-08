import { useEffect, useState } from 'react';
import { Container } from './styles/app';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import CustomButton from './components/CustomButton';
import Poster from './components/Poster';
import RatingStars from './components/RatingStars';
import { api } from './server/api';

interface IMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRatings;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}

interface IRatings {
  Source: string;
  Value: string;
}

function App() {
  const [movie, setMovie] = useState({} as IMovie);

  useEffect(() => {
    api
      .get<IMovie>('/', {
        params: {
          apiKey: '4f3367e7',
          t: 's',
          plot: 'short',
        },
      })
      .then(res => {
        setMovie({
          Title: res.data.Title,
          Year: res.data.Year,
          Rated: res.data.Rated,
          Released: res.data.Released,
          Runtime: res.data.Runtime,
          Genre: res.data.Genre,
          Director: res.data.Director,
          Writer: res.data.Writer,
          Actors: res.data.Actors,
          Plot: res.data.Plot,
          Language: res.data.Language,
          Country: res.data.Country,
          Awards: res.data.Awards,
          Poster: res.data.Poster,
          Ratings: res.data.Ratings,
          Metascore: res.data.Metascore,
          imdbRating: res.data.imdbRating,
          imdbVotes: res.data.imdbVotes,
          imdbID: res.data.imdbID,
          Type: res.data.Type,
          totalSeasons: res.data.totalSeasons,
          Response: res.data.Response,
        });
      });
  }, []);

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
            <h2 className="title-details-container">{movie.Title}</h2>
            <p className="text-details-container">{movie.Plot}</p>
            <div className="actor-details-container">
              <h5 className="subtitle-details-container">Actors</h5>
              <p>{movie.Actors}</p>
            </div>
            <div className="review-details-container">
              <h5 className="subtitle-details-container">Review</h5>
              <RatingStars />
            </div>
            <CustomButton type="fav-button" text="Favorite" />
          </div>

          <div className="poster-details-container">
            <Poster sourceImg={movie.Poster} />
          </div>
        </div>
      </section>
      <Footer />
    </Container>
  );
}

export default App;
