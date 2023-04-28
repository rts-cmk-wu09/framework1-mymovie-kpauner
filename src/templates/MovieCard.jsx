import styled from 'styled-components'
import Image from '../components/Image'
import Heading from "../components/Heading";
import MovieRating from '../components/MovieRating';

const Figurestyle = styled.figure`
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledCardArticle = styled.article`
    padding-block:1.4rem;
`;

const MovieCard = () => {
    return (  
        <StyledCardArticle>
            <Figurestyle>
                <Image />
            </Figurestyle>
            <Heading title="Spiderman: No Way Home" size="16" as="h3" />
            <MovieRating />
        </StyledCardArticle>
    );
}
 
export default MovieCard;