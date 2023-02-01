import { Col } from "react-bootstrap";

const MovieListHeader = ({ heading }) => {
  return (
    <Col>
      <h1>{heading}</h1>
    </Col>
  );
};

export default MovieListHeader;
