import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Image, Container, Row, Col } from "react-bootstrap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Carousel.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Carousel = (props) => {
  const FavoriteComponent = props.favoriteComponent;
  console.log(props.featuredMovie);
  return (
    <Row>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {props.movies.map((movie, index) => (
          <SwiperSlide className="image-container" key={index}>
            <Col>
              <Image
                className="m-1"
                src={movie.Poster}
                alt="movie"
                onClick={() => props.setFeatureMovie(movie)}
              />
              <Container
                onClick={() => props.handleFavoritesClick(movie)}
                className="overlayTop d-flex align-items-center justify-content-center"
              >
                <FavoriteComponent />
              </Container>
            </Col>
          </SwiperSlide>
        ))}
      </Swiper>
    </Row>
  );
};
export default Carousel;
