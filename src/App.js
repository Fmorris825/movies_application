import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MovieList from "./components/MovieList/MovieList";
import MovieListHeader from "./components/MovieListHeader/MovieListHeader";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [movies, setmovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        {" "}
        <MovieListHeader heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
