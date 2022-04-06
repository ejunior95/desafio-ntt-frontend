import Footer from './components/Footer';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import CustomButton from './components/CustomButton';
import Poster from './components/Poster';
import { Container } from './styles/app';

function App() {
  return ( 
    <Container>
      <Header />
        <section className="content">
          
          <div className="search-container">
            <h2 className="title-search-container">Gostaria de saber mais sobre seu filme preferido?</h2>
            <p className="text-search-container">
              Digite o nome completo, ou parte dele, na área de pesquisa abaixo e buscaremos maiores informações em nossos bancos de dados.
            </p>
            <div className="components-container">
              <SearchBox />
              <CustomButton text="Search"/>
              <CustomButton text="Reset"/>
            </div>
          </div>

          <div className="details-container">
            <div className="components-details-container">
              <h2 className="title-details-container">Titulo do filme</h2>
              <p className="text-details-container">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
              </p>
              <div className="actor-details-container">
                <h5 className="subtitle-details-container">Actor</h5>
                <p>Lorem ipsum</p>
              </div>
            </div>
            <div className="poster-details-container">
              <Poster />
            </div>
          </div>
        </section>
      <Footer />
    </Container>
  )
}

export default App
