import styled from 'styled-components'

const SeeMoreStyle = styled.button`
    background-color: transparent;
    color: #979797;
    border-radius:100px;
    border: 1px solid #979797;
    height: 2rem;
    width:90px;
`;

const SeeMoreBtn = () => {
    return <SeeMoreStyle>See More</SeeMoreStyle>
}
 
export default SeeMoreBtn;