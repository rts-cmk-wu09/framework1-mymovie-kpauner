import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

const StyledArw = styled.span`
    color: white;
`;

const ArrowLftBtn = () => {
    return ( 
        <StyledArw>
            <FaArrowLeft />
        </StyledArw> 
        
    );
}
 
export default ArrowLftBtn;