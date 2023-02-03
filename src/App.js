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

import api_keys from "./api_keys";
import MovieCard from "./components/MovieCard/MovieCard";
import Carousel from "./components/Carousel/Carousel";

function App() {
  const [movies, setmovies] = useState([]);
  const [searchValue, setSearchValue] = useState("Avengers");
  const [favorites, setFavorites] = useState([]);
  const [featureMovie, setFeatureMovie] = useState({
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  });

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

  console.log(movies);
  console.log(featureMovie);

  return (
    <Col className="container-fluid movie-app">
      <Row className=" mb-4">
        <MovieListHeader heading="What to Watchlist" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </Row>
      <Row className="m-4">
        <MovieListHeader heading="Featured Movie" />
      </Row>
      <Row>
        <MovieCard
          featureMovie={featureMovie}
          favoriteComponent={AddFavorite}
        />
      </Row>
      <Row className="m-4">
        <MovieListHeader heading="Movies" />
      </Row>
      <Row>
        <Carousel
          movies={movies}
          handleFavoritesClick={AddFavoriteMovie}
          favoriteComponent={AddFavorite}
          setFeatureMovie={setFeatureMovie}
        />
      </Row>
      {/* <Row>
        <MovieList
          movies={movies}
          handleFavoritesClick={AddFavoriteMovie}
          favoriteComponent={AddFavorite}
          setFeatureMovie={setFeatureMovie}
        />
      </Row> */}
      <Row className="m-4">
        <MovieListHeader heading="Favorites" />
      </Row>
      <Row>
        <MovieList
          movies={favorites}
          handleFavoritesClick={RemoveFavoriteMovie}
          favoriteComponent={RemoveFavorite}
          setFeatureMovie={setFeatureMovie}
        />
      </Row>
    </Col>
  );
}

export default App;
