import { FiHeart } from 'react-icons/fi';
import { Container } from './styles';

interface IProps {
  type: string;
  text: string;
  onClick?: () => void;
}

function CustomButton(props: IProps) {
  const { text, type, onClick } = props;

  return (
    <Container>
      {type === 'primary' ? (
        <input className={type} type="button" value={text} onClick={onClick} />
      ) : (
        <div className={type}>
          <p className="text-fav-button">{text}</p>
          <FiHeart className="icon-fav-button" />
        </div>
      )}
    </Container>
  );
}

export default CustomButton;
