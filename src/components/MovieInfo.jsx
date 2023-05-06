import styled from "styled-components";

const StyledEmphasis = styled.p`
    font-weight:700;
    font-size: 12px;
    color: black;
    padding-top: .4rem;
`;

const MovieInfo = () => {
    return (
        <>
            <div>
                <p>Length</p>
                <StyledEmphasis>2h 28min</StyledEmphasis>
            </div>
            <div>
                <p>language</p>
                <StyledEmphasis>English</StyledEmphasis>
            </div>
            <div>
                <p>Rating</p>
                <StyledEmphasis>PG-13</StyledEmphasis>
            </div>
        </>  
    );
}
 
export default MovieInfo;