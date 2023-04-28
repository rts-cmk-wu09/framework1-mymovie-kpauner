import coverimage from '../assets/poster.png';
import styled from 'styled-components';

const StyledImg = styled.img`
    box-shadow: 0 5px 10px rgb(0 0 0 / 0.3);
    border-radius: 5px;
`;

const Image = () => {
    return <StyledImg src={coverimage} alt="blabla" />
}
 
export default Image;