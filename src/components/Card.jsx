import { Link } from "react-router-dom";
import "../App.css";

import { apilinks } from "../api/apiconfig";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function Cards({ movie }) {
  // setState for laoding animation
  const [isLoading, setisLoading] = useState(true);

  // set loading with timeout
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#fff">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="cards">
            <img
              className="cards-img"
              src={`${apilinks.posterImgOriginal}${
                movie ? movie.poster_path : ""
              }`}
              alt=""
            />
            <div className="cards-overlay">
              <div className="cards-title">
                {movie ? movie.original_title : ""}
              </div>
              <div className="cards-info">
                {movie ? movie.release_date : ""}
                <span className="cards-rating">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
              <div className="cards-description">
                {movie ? movie.overview.slice(0, 110) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
