import "./App.css";
import HeadingTwo from "./components/HeaderTwo";
import HeadingOne from "./components/HeadingOne";
import SeeMoreBtn from "./components/SeeMoreBtn";
import MovieCard from "./templates/MovieCard";

function App() {
  return (
    <div className="App">
      <header>
        <HeadingOne />
      </header>
      <main>
        <section>
          <div className="flexContainer just-between">
            <HeadingTwo />
            <SeeMoreBtn />
          </div>
          <div className="flexContainer">
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section>
          Section here
        </section>
      </main>
      <footer>
        <nav>
          nav here
        </nav>
      </footer>
    </div>
  ) 
}

export default App;
