import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MovieList from "./components/MovieList/MovieList";
import MovieListHeader from "./components/MovieListHeader/MovieListHeader";
import SearchBox from "./components/SearchBox/SearchBox";
import api_keys from "./api_keys.js";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  const [movies, setmovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=${api_keys.key}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setmovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <Col className="container-fluid movie-app">
      <Row>
        <MovieListHeader heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </Row>
      <Row>
        <MovieList movies={movies} />
      </Row>
    </Col>
  );
}

export default App;
