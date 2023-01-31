import { useState, useEffect } from "react";

//Styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";

import MovieList from "./components/MovieList/MovieList";
import MovieListHeader from "./components/MovieListHeader/MovieListHeader";
import SearchBox from "./components/SearchBox/SearchBox";
import AddFavorite from "./components/AddFavorite/AddFavorite";
import RemoveFavorite from "./components/RemoveFavorite/RemoveFavorite";

import api_keys from "./api_keys.js";

function App() {
  const [movies, setmovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favorites, setFavorites] = useState([]);

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

  const AddFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    localStorage.setItem(newFavoriteList);
  };

  const RemoveFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
    localStorage.setItem(newFavoriteList);
  };

  console.log(favorites);
  return (
    <Col className="container-fluid movie-app">
      <Row>
        <MovieListHeader heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </Row>
      <Row>
        <MovieList
          movies={movies}
          handleFavoritesClick={AddFavoriteMovie}
          favoriteComponent={AddFavorite}
        />
      </Row>
      <Row className="mt-4 mb-4">
        <MovieListHeader heading="Favorites" />
      </Row>
      <Row>
        <MovieList
          movies={favorites}
          handleFavoritesClick={RemoveFavoriteMovie}
          favoriteComponent={RemoveFavorite}
        />
      </Row>
    </Col>
  );
}

export default App;
