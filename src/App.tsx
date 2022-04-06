import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from './styles/app';

function App() {
  return ( 
    <Container>
      <Header />
        <section className="content">
          <div className="search-container">
            
          </div>
        </section>
      <Footer />
    </Container>
  )
}

export default App
