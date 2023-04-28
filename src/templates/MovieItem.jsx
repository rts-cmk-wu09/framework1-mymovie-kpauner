import styled from "styled-components";
import Image from "../components/Image";
import MovieRating from "../components/MovieRating";
import Heading from "../components/Heading";
import Time from "../components/Time"

const StyledInfo = styled.div`
    padding-left: 2rem;
`;

const StyledCat = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    padding-bottom: 0.8rem;
`;

const StyledLi = styled.li`
    background-color:#DBE3FF;
    color:#88A4E8;
    padding: 0.6rem;
    border-radius: 2rem;
    `;

const StyledA = styled.a`
    font-size: 0.6rem;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
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
                <StyledCat>
                    <StyledLi><StyledA href="">Horror</StyledA></StyledLi>
                    <StyledLi><StyledA href="">Mystery</StyledA></StyledLi>
                    <StyledLi><StyledA href="">Thriller</StyledA></StyledLi>
                </StyledCat>
                <Time />
            </StyledInfo>
        </article>
    );
}
 
export default MovieItem;