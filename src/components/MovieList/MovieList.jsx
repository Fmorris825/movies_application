import { Col, Container, Image, Row } from "react-bootstrap";

const MovieList = ({ movies }) => {
  return (
    <Row className="movie-scroll">
      {movies.map((movie, index) => (
        <Col className="image-container">
          <Image className="m-1" src={movie.Poster} alt="movie" />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
