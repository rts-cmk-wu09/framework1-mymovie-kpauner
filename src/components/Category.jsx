import styled from "styled-components";

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

const Category = () => {
    return (  
        <StyledCat>
            <StyledLi><StyledA href="">Horror</StyledA></StyledLi>
            <StyledLi><StyledA href="">Mystery</StyledA></StyledLi>
            <StyledLi><StyledA href="">Thriller</StyledA></StyledLi>
        </StyledCat>
    );
}
 
export default Category;