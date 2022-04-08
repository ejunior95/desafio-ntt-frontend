import { useEffect, useState } from 'react';
import { Container } from './styles/app';
import { api } from './server/api';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import CustomButton from './components/CustomButton';
import Poster from './components/Poster';
import RatingStars from './components/RatingStars';
import Loading from './components/Loading';
import config from './config/secrets/apiKey.json';

interface IRatings {
  Source: string;
  Value: string;
}
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

const App = () => {
  const [movie, setMovie] = useState({} as IMovie);
  const [rating, setRating] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMovie({
      Title: 'Aguardando informações...',
      Year: '',
      Rated: '',
      Released: '',
      Runtime: '',
      Genre: '',
      Director: '',
      Writer: '',
      Actors: 'Aguardando informações...',
      Plot: 'Aguardando informações...',
      Language: '',
      Country: '',
      Awards: '',
      Poster: '',
      Ratings: {
        Source: '',
        Value: '',
      },
      Metascore: '',
      imdbRating: '',
      imdbVotes: '',
      imdbID: '',
      Type: '',
      totalSeasons: '',
      Response: '',
    });
  }, []);

  function resetAll() {
    setMovie({
      Title: 'Aguardando informações...',
      Year: '',
      Rated: '',
      Released: '',
      Runtime: '',
      Genre: '',
      Director: '',
      Writer: '',
      Actors: 'Aguardando informações...',
      Plot: 'Aguardando informações...',
      Language: '',
      Country: '',
      Awards: '',
      Poster: '',
      Ratings: {
        Source: '',
        Value: '',
      },
      Metascore: '',
      imdbRating: '',
      imdbVotes: '',
      imdbID: '',
      Type: '',
      totalSeasons: '',
      Response: '',
    });
    setSearch('');
  }

  function getResults(movieName: string) {
    setIsLoading(true);
    api
      .get<IMovie>('/', {
        params: {
          apiKey: `${config.value}`,
          t: `${movieName}`,
          plot: 'short',
        },
      })
      .then(res => {
        setMovie({
          Title: res.data.Title ? res.data.Title : 'Não encontramos nada :(',
          Year: res.data.Year,
          Rated: res.data.Rated,
          Released: res.data.Released,
          Runtime: res.data.Runtime,
          Genre: res.data.Genre,
          Director: res.data.Director,
          Writer: res.data.Writer,
          Actors: res.data.Actors,
          Plot: res.data.Plot ? res.data.Plot : 'Sem resultados',
          Language: res.data.Language,
          Country: res.data.Country,
          Awards: res.data.Awards,
          Poster: res.data.Poster ? res.data.Poster : '',
          Ratings: res.data.Ratings,
          Metascore: res.data.Metascore,
          imdbRating: res.data.imdbRating ? res.data.imdbRating : '',
          imdbVotes: res.data.imdbVotes,
          imdbID: res.data.imdbID,
          Type: res.data.Type,
          totalSeasons: res.data.totalSeasons,
          Response: res.data.Response,
        });
        setRating(res.data.imdbRating);
        setIsLoading(false);
      });
  }

  return (
    <Container>
      {isLoading && (
        <>
          <Loading />
        </>
      )}

      <Header />
      <section className="content">
        <div className="search-container">
          <h2 className="title-search-container">Gostaria de saber mais sobre seu filme preferido?</h2>
          <p className="text-search-container">
            Digite o nome completo, ou parte dele, na área de pesquisa abaixo e buscaremos maiores informações em nossos
            bancos de dados.
          </p>
          <div className="components-container">
            <SearchBox value={search} onChange={setSearch} />
            <CustomButton type="primary" text="Search" onClick={() => getResults(search)} />
            <CustomButton type="primary" text="Reset" onClick={resetAll} />
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
            <div className="review-details-container" title={movie.imdbRating}>
              <h5 className="subtitle-details-container">Review</h5>
              <RatingStars rating={rating} />
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
};

export default App;
