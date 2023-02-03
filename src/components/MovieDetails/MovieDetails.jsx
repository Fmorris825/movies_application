import { Container } from "react-bootstrap";
import "./MovieDetails.css";

const MovieDetails = ({ movie }) => {
  return (
    <>
      <Container>
        <ul className="list">
          <li>
            <h5>Director:</h5>
            {movie.director_names.map((director, index) => {
              return <p> {director},</p>;
            })}
          </li>
          <li>
            <h5>IMDB Rating:</h5> <p> {movie.rating}/10</p>
          </li>
          <li>
            <h5>Media Type:</h5>
            <p> {movie.imdb_type}</p>
          </li>
          <li>
            <h5>Length:</h5> <p> {movie.runtime}</p>
          </li>
          <li>
            <h5>Genres:</h5>
            {movie.genres.map((genre, index) => {
              return <p> {genre},</p>;
            })}
          </li>
        </ul>
      </Container>
      <Container>
        <h5>Actors:</h5>
        <ul className="actorList">
          {movie.actors.map((actor, index) => {
            return <li> {actor.name},</li>;
          })}
        </ul>
      </Container>
      <h5>Movie Description</h5>
      <p className="movieDesc">{movie.description}</p>
    </>
  );
};

export default MovieDetails;
