import { useEffect, useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import axios from "axios";
import api_keys from "../../api_keys";
import "./MovieCard.css";
import MovieDetails from "../MovieDetails/MovieDetails";

const MovieCard = (props) => {
  //Default State Data
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
  //Movie Details Data
  const [movieDetails, setMovieDetails] = useState({
    id: "tt0848228",
    title: "Avengers Assemble",
    rating: 8,
    rating_count: 1400000,
    release_year: 2012,
    popularity: 352,
    imdb_type: "movie",
    runtime: "2h 23m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    countries: ["United States"],
    languages: ["English", "Russian", "Hindi"],
    director_names: ["Joss Whedon"],
    creator_names: [],
    description:
      "Loki, the adopted brother of Thor, teams-up with the Chitauri Army and uses the Tesseract's power to travel from Asgard to Midgard to plot the invasion of Earth and become a king. The director of the agency S.H.I.E.L.D., Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a. the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner, a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and the alien invasion.",
    aka: ["Marvel Avengers Assemble"],
    version: 2,
    image:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    imdb_date: "2012-04-26",
    actors: [
      {
        id: "nm0000375",
        name: "Robert Downey Jr.",
      },
      {
        id: "nm0262635",
        name: "Chris Evans",
      },
      {
        id: "nm0424060",
        name: "Scarlett Johansson",
      },
      {
        id: "nm0719637",
        name: "Jeremy Renner",
      },
      {
        id: "nm0749263",
        name: "Mark Ruffalo",
      },
      {
        id: "nm1165110",
        name: "Chris Hemsworth",
      },
      {
        id: "nm1089991",
        name: "Tom Hiddleston",
      },
      {
        id: "nm0163988",
        name: "Clark Gregg",
      },
      {
        id: "nm1130627",
        name: "Cobie Smulders",
      },
      {
        id: "nm0001745",
        name: "Stellan Skarsgård",
      },
      {
        id: "nm0000168",
        name: "Samuel L. Jackson",
      },
      {
        id: "nm0000569",
        name: "Gwyneth Paltrow",
      },
      {
        id: "nm0079273",
        name: "Paul Bettany",
      },
      {
        id: "nm0219206",
        name: "Alexis Denisof",
      },
      {
        id: "nm0071416",
        name: "Tina Benko",
      },
      {
        id: "nm0804592",
        name: "Jerzy Skolimowski",
      },
      {
        id: "nm5011531",
        name: "Kirill Nikiforov",
      },
      {
        id: "nm0004178",
        name: "Jeff Wolfe",
      },
    ],
  });

  const FavoriteComponent = props.favoriteComponent;

  useEffect(() => {
    getFeatureMovie();
    getFeatureMovieDetails();
  }, [props.featureMovie]);

  //Utelly API Get Request Function
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

  //Movies Details Get Request Function
  async function getFeatureMovieDetails() {
    try {
      const response = await axios.get(
        "https://movie-details1.p.rapidapi.com/imdb_api/movie",
        {
          params: {
            id: props.featureMovie.imdbID,
          },
          headers: {
            "X-RapidAPI-Key": api_keys.rapidKey,
            "X-RapidAPI-Host": "movie-details1.p.rapidapi.com",
          },
        }
      );
      setMovieDetails(response.data);
      if (response.status === 200) {
        console.log(response);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }
  console.log(movieDetails);
  console.log(utellyFeatureMovie);
  return utellyFeatureMovie.collection.locations ? (
    <>
      <Col>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center ">
              <div className="image-container m-3">
                <Image
                  className="featuredMovieImg"
                  src={props.featureMovie.Poster}
                />
                <Container
                  onClick={() => props.handleFavoritesClick(props.featureMovie)}
                  className="overlayCard d-flex align-items-center justify-content-center"
                >
                  <FavoriteComponent />
                </Container>
              </div>
            </Col>
            <Col>
              <Row>
                <h1>
                  {props.featureMovie.Title} ({props.featureMovie.Year})
                </h1>
              </Row>
              <Row>
                <h3>Avaiable to stream on:</h3>
              </Row>
              <p className="d-flex gap-3 align-items-center">
                {utellyFeatureMovie.collection.locations.map(
                  (location, index) => {
                    return (
                      <p>
                        <a
                          href={location.url}
                          target="_blank"
                          className="siteHover"
                        >
                          <Image src={location.icon} />
                        </a>
                      </p>
                    );
                  }
                )}
              </p>
              <Row>
                <MovieDetails movie={movieDetails} />
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  ) : (
    <>
      <Col>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center">
              <div className="image-container m-3">
                <Image
                  className="featuredMovieImg"
                  src={props.featureMovie.Poster}
                />
                <Container
                  onClick={() => props.handleFavoritesClick(props.featureMovie)}
                  className="overlayCard d-flex align-items-center justify-content-center"
                >
                  <FavoriteComponent />
                </Container>
              </div>
            </Col>
            <Col>
              <Row>
                <h1>
                  {props.featureMovie.Title} ({props.featureMovie.Year})
                </h1>
              </Row>
              <Row>
                <p>
                  This movie is not currenlty available on streaming platforms.{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-emoji-frown"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                  </svg>
                </p>
              </Row>
              <Row>
                <MovieDetails movie={movieDetails} />
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
};

export default MovieCard;
