import styled from "styled-components";
import Heading from "../components/Heading";
import CoverImage from "../assets/detailscover.png"
import Switch from "../components/Switch";
import ArrowLftBtn from "../components/ArrowLftBtn";
import { FaRegBookmark } from "react-icons/fa";
import MovieRating from "../components/MovieRating";
import Category from "../components/Category";
import SeeMoreBtn from "../components/SeeMoreBtn";
import CastItem from "../templates/CastItem";
import MovieInfo from "../components/MovieInfo";
import PlayBtn from "../components/playBtn";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  background-image: url(${CoverImage});
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledSection = styled.section`
  padding:2rem 2rem 0 2rem;
`;

function DetailView() {
  return (
    <>
      <div className="App">
      <StyledWrapper>
        <header className="gridContainer p-2">
          <Link to=".."><ArrowLftBtn /></Link>
          <Switch checked="false" />
        </header>
        <div className="pb-2">
          <PlayBtn />
        </div>
      <main>
        <StyledSection>
          <div className="flexContainer just-between">
          <Heading title="Spiderman: No Way Home" size="20" as="h1" className="titleheading"/>
            <FaRegBookmark />
          </div>
          <MovieRating />
          <Category />
          <div className="flexContainer just-between">
            <MovieInfo />
          </div>
        </StyledSection>
        <StyledSection>
          <div className="flexContainer just-between pb-1">
            <Heading title="Description" size="16" as="h1" />
          </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum saepe quae incidunt quidem. 
              Deleniti molestias possimus iusto esse adipisci velit! 
              Iusto ducimus eos fuga a minima voluptatibus neque at repudiandae?</p>
        </StyledSection>
        <StyledSection>
          <div className="flexContainer just-between pb-1">
            <Heading title="Cast" size="16" as="h1" />
            <SeeMoreBtn />
          </div> 
          <div className="flexContainer">
            <CastItem />
            <CastItem />
            <CastItem />
            <CastItem />
          </div> 
        </StyledSection>
      </main>
      </StyledWrapper>
    </div>
    </>
  ) 
}

export default DetailView;
