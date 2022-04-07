import { Container } from './styles';
import { FiHeart } from "react-icons/fi";

interface IProps {
  type: string;  
  text: string;  
}

function CustomButton(props: IProps) {
    const { 
        text,
        type 
    } = props;
    
    return(
        <Container>
            {
                type === 'primary' ? 
                    <input className={type} type="button" value={text} />
                : 
                    <div className={type}>
                        <p className="text-fav-button">{text}</p>
                        <FiHeart className="icon-fav-button"/>
                    </div>
            }
        </Container>
    )
}

export default CustomButton