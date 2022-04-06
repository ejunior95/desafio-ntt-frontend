import { Container } from './styles';

interface IProps {
  text: string;  
}

function CustomButton(props: IProps) {
    
    const { 
        text 
    } = props;
    
    return(
        <Container>
            <input type="button" value={text} />
        </Container>
    )
}

export default CustomButton