import {FaStar} from 'react-icons/fa'
import styled from 'styled-components'

const StyledMovieRating = styled.div`
    display: flex;
    gap: 1rem;
    padding-block: .8rem;
`;

const StyledFaStar = styled(FaStar)`
    color:#FFC319;
`;

const StyledP = styled.p`
    color: #979797;
`;

const MovieRating = () => {
    return (
        <>
            <StyledMovieRating>
                <StyledFaStar />
                <StyledP>9,1/10 iMDB</StyledP>
            </StyledMovieRating>
        </>
      );
}
 
export default MovieRating;