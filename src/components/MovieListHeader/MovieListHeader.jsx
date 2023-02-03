import { Col } from "react-bootstrap";

const MovieListHeader = ({ heading }) => {
  return (
    <Col>
      <h1 className="headers">{heading}</h1>
    </Col>
  );
};

export default MovieListHeader;
