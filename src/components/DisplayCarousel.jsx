import React from "react";
import { Link } from "react-router-dom";
import { apilinks } from "../api/apiconfig";
import { Carousel } from "react-responsive-carousel";

export default function DisplayCarousel({ Movies }) {
  return (
    <div className="poster">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={1}
        infiniteLoop={true}
        showStatus={false}
      >
        {Movies.map((movie) => (
          <Link className="link" to={`/movie/${movie.id}`}>
            <div className="poster-img">
              <img
                src={`${apilinks.posterImgOriginal}${
                  movie && movie.backdrop_path
                }`}
                alt="https://via.placeholder.com/2560x1440"
              />
            </div>
            <div className="poster-overlay">
              <div className="poster-title">
                {movie ? movie.title : "Not available"}
              </div>
              <div className="poster-info">
                {movie ? movie.release_date : "Not available"}
                <span className="poster-rating">
                  {movie ? movie.vote_average : "Not available"}
                  <i className="fa fa-star"> </i>
                </span>
              </div>
              <div className="poster-desc">
                {movie ? movie.overview : "No description"}
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
