import styled from "styled-components";
import CastImage from '../assets/tomholland.png';

const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
`;

const CastItem = () => {
    return (  
        <StyledArticle>
            <figure>
                <img src={CastImage} alt="blabla" />
            </figure>
            <p>Tom Holland</p>
        </StyledArticle>
    );
}
 
export default CastItem;