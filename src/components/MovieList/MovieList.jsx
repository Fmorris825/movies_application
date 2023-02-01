import { Col, Container, Image, Row } from "react-bootstrap";

const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent;
  return (
    <Row className="movie-scroll">
      {props.movies.map((movie, index) => (
        <Col className="image-container" key={index}>
          <Image
            className="m-1"
            src={movie.Poster}
            alt="movie"
            onClick={() => props.setFeatureMovie(movie)}
          />
          <Container
            onClick={() => props.handleFavoritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <FavoriteComponent />
          </Container>
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
