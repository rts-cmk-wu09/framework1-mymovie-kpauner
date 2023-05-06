import playImage from '../assets/Play.png';
import styled from 'styled-components';

const StyledImg = styled.img`
    margin: 0 auto;
    display: block;
`;

const PlayBtn = () => {
    return (  
        <StyledImg src={playImage} alt="blabla" />
    );
}
 
export default PlayBtn;