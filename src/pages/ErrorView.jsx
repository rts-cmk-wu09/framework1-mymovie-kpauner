import Lottie from "lottie-react";
import errorAnimation from "./404-animation.json";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledDiv = styled.div`

`;

const ErrorView = () => {
  return (
    <StyledDiv>
        <Link to="/">
            <Lottie animationData={errorAnimation} 
            className="my-animation-container"
            width={200} 
            height={200} />
        </Link>
    </StyledDiv>
  )
};

export default ErrorView;
