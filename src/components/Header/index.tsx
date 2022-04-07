import { Container } from './styles';
import IMDBLogo from '../../assets/imdb-logo.svg';
import NTTLogo from '../../assets/ntt-logo.svg';

function Header() {
  return (
    <Container>
      <div className="app-title">
        <img src={IMDBLogo} alt="IMDB Logo" className="logo" />
        <h1 className="title">CineAPP</h1>
        <img src={NTTLogo} alt="NTT Logo" className="logo" />
      </div>
    </Container>
  );
}

export default Header;
