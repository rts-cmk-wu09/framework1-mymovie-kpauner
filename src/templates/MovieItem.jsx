import styled from "styled-components";
import Image from "../components/Image";
import MovieRating from "../components/MovieRating";
import Heading from "../components/Heading";
import Time from "../components/Time"
import Category from "../components/Category";

const StyledInfo = styled.div`
    padding-left: 2rem;
`;


const MovieItem = () => {
    return (  
        <article className="flexContainer pb-1">
            <div>
                <Image />
            </div>
            <StyledInfo>
                <Heading title="Venom Let There Be Carnage" as="h3" />
                <MovieRating />
                <Category />
                <Time />
            </StyledInfo>
        </article>
    );
}
 
export default MovieItem;