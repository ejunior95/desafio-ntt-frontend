import Footer from './components/Footer';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import CustomButton from './components/CustomButton';
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
        </section>
      <Footer />
    </Container>
  )
}

export default App
