import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import SeeMoreBtn from "../components/SeeMoreBtn";
import Switch from "../components/Switch";
import MovieCard from "../templates/MovieCard";
import MovieItem from "../templates/MovieItem";
import { Link } from "react-router-dom";

const ListView = () => {
    return (  
            <div className="p-2">
                <header className="gridContainer pb-1">
                    <Heading title="Details" size="16" as="h1"/>
                    <Switch checked="false" />
                </header>
                <main>
                    <section>
                    <div className="flexContainer just-between pb-1">
                    <Heading title="Now Showing" size="16" as="h2"/>
                        <SeeMoreBtn />
                    </div>
                    <div className="flexContainer movie-card-container">
                        <Link to="/details">
                            <MovieCard />
                        </Link>
                        <MovieCard />
                        <MovieCard />
                    </div>
                    </section>
                    <section>
                    <div className="flexContainer just-between pb-1">
                        <Heading title="Popular" size="16" as="h2"/>
                        <SeeMoreBtn />
                    </div>
                    <MovieItem />
                    <MovieItem />
                    </section>
                </main>
                <footer>
                    <Navigation />
                </footer>
            </div>
    );
}
 
export default ListView;