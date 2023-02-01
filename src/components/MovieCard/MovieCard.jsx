import { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import axios from "axios";
import api_keys from "../../../api_keys";

const MovieCard = (props) => {
  const [utellyFeatureMovie, setUtellyFeatureMovie] = useState({});

  useEffect(() => {
    getFeatureMovie();
  }, [props.featureMovie]);

  async function getFeatureMovie() {
    try {
      const response = await axios.get(
        "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup",
        {
          params: {
            source_id: props.featureMovie.imdbID,
            source: "imdb",
            country: "us",
          },
          headers: {
            "X-RapidAPI-Key": api_keys.rapidKey,
            "X-RapidAPI-Host":
              "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          },
        }
      );
      setUtellyFeatureMovie(response.data);
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  console.log(props.featureMovie);
  console.log(utellyFeatureMovie);

  if (!utellyFeatureMovie.collection.locations)
    return <h1>This movie is not available on streaming platforms</h1>;
  return utellyFeatureMovie ? (
    <>
      <Container>
        <h1>{props.featureMovie.Title} </h1>
        <Image src={props.featureMovie.Poster} />
        <h1>
          {utellyFeatureMovie.collection.locations.map((location, index) => {
            return <h1>{location.display_name}</h1>;
          })}
        </h1>
      </Container>
    </>
  ) : null;
};

export default MovieCard;
