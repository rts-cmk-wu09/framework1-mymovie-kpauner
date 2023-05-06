import styled from "styled-components";
import { FaTicketAlt, FaRegBookmark } from "react-icons/fa";
import { FcFilmReel } from "react-icons/fc";

const StyledNav = styled.nav`
background-color: white;
    position: fixed;
    width:100%;
    height: 5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 0px 5px 1px rgb(0 0 0 / 0.2);
    font-size: 1.4rem;
    color: #979797;
    bottom: 0;
    left: 0;
`;

const Navigation = () => {
    return (  
        <StyledNav>
            <a href="/src/details.jsx"><FcFilmReel /></a>
            <FaTicketAlt />
            <FaRegBookmark />
        </StyledNav>
    );
}
 
export default Navigation;