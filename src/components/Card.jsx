import { Link } from "react-router-dom";
import { apilinks } from "../api/apiconfig";
import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
export default function Card({ movie }) {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2}></Skeleton>
          </SkeletonTheme>
        </div>
      ) : (
        <Link className="link" to={`movie/${movie.id}`}>
          <div className="cards">
            <img
              src={`${apilinks.cardsImgOriginal}${
                movie ? movie.cards_path : ""
              }`}
              alt=""
              className="cards-img"
            />
          </div>
          <div className="cards-overlay">
            <div className="cards-title">
              {movie ? movie.title : "Not available"}
            </div>
            <div className="cards-info">
              {movie ? movie.release_date : "Not available"}
              <span className="cards-rating">
                {movie ? movie.vote_average : "Not available"}
                <i className="fas fa-star"> </i>
              </span>
            </div>
            <div className="cards-desc">
              {movie ? movie.overview.slice(0, 110) + "..." : "No description"}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
