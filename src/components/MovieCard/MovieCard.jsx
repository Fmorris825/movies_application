import { useEffect, useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import axios from "axios";
import api_keys from "../../api_keys";
import "./MovieCard.css";

const MovieCard = (props) => {
  const [utellyFeatureMovie, setUtellyFeatureMovie] = useState({
    collection: {
      locations: [
        {
          display_name: "iTunes",
          id: "5d8415b3ca549f00528a99f0",
          url: "https://itunes.apple.com/gb/movie/avengers-age-of-ultron/id984212442?uo=4",
          name: "iTunesIVAGB",
          icon: "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/iTunesIVAGB.png?w=92&auto=compress&app_version=a7bc9019-5ad7-4f07-8e53-46717369822b_1e1210o12023-02-02",
        },
        {
          display_name: "Google Play",
          id: "5d84d6dcd95dc7385f6a43e1",
          url: "https://play.google.com/store/movies/details/Marvel_Studios_Avengers_Age_of_Ultron?gl=GB&hl=en&id=UU7dXASPvds.P",
          name: "GooglePlayIVAGB",
          icon: "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/GooglePlayIVAGB.png?w=92&auto=compress&app_version=a7bc9019-5ad7-4f07-8e53-46717369822b_1e1210o12023-02-02",
        },
        {
          display_name: "Amazon Instant Video",
          id: "5d8415b31e1521005490e1bc",
          url: "https://watch.amazon.co.uk/watch?gti=amzn1.dv.gti.22a9f694-d316-172e-e745-a5d251a9b913&tag=utellycom00-21",
          name: "AmazonInstantVideoIVAGB",
          icon: "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/AmazonInstantVideoIVAGB.png?w=92&auto=compress&app_version=a7bc9019-5ad7-4f07-8e53-46717369822b_1e1210o12023-02-02",
        },
        {
          display_name: "Disney+",
          id: "5e573a41efcb7769c4908a9e",
          url: "https://www.disneyplus.com/video/fad87483-5b6e-4fa1-8b1b-886e60523fc3",
          name: "DisneyPlusIVAGB",
          icon: "https://utellyassets7.imgix.net/locations_icons/utelly/black_new/DisneyPlusIVAGB.png?w=92&auto=compress&app_version=a7bc9019-5ad7-4f07-8e53-46717369822b_1e1210o12023-02-02",
        },
      ],
      weight: 0,
      id: "5e28ebeae847f9277fa03d50",
      external_ids: {
        imdb: {
          url: "https://www.imdb.com/title/tt2395427",
          id: "tt2395427",
        },
        tmdb: {
          url: "https://www.themoviedb.org/movie/99861",
          id: "99861",
        },
        iva: {
          id: "225128",
        },
        facebook: null,
        rotten_tomatoes: null,
        wiki_data: {
          url: "https://www.wikidata.org/wiki/Q14171368",
          id: "Q14171368",
        },
        iva_rating: null,
        gracenote: null,
      },
      picture:
        "https://utellyassets9-4.imgix.net/api/Images/6171f13b32d6719deb50c2784a35e18c/Redirect?fit=crop&auto=compress&crop=faces,top",
      provider: "iva",
      name: "Avengers: Age of Ultron",
    },
  });

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

  return utellyFeatureMovie.collection.locations ? (
    <>
      <Col>
        <Row>
          <h1>{props.featureMovie.Title} </h1>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Image
              className="featuredMovieImg"
              src={props.featureMovie.Poster}
            />
          </Col>
          <Col>
            <h1>
              {utellyFeatureMovie.collection.locations.map(
                (location, index) => {
                  return <h1>{location.display_name}</h1>;
                }
              )}
            </h1>
          </Col>
        </Row>
      </Col>
    </>
  ) : (
    <>
      <Col>
        <Row>
          <h1>{props.featureMovie.Title} </h1>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Image
              className="featuredMovieImg"
              src={props.featureMovie.Poster}
            />
          </Col>
          <Col>
            <h1>
              This movie is not currenlty available on streaming platforms.
            </h1>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default MovieCard;
