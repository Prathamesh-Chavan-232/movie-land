import "../App.css";
import { apilinks } from "../api/apiconfig";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function MovieDesc() {
  const { id } = useParams();
  const [MovieDesc, setMovieDesc] = useState();

  // Fetch Movies Data from the api
  useEffect(() => {
    const fetchMovieDesc = async () => {
      let res = await fetch(`${apilinks.movieDesc}/${id}${apilinks.key}`);
      const data = await res.json();
      console.log(data);
      setMovieDesc(data);
    };
    fetchMovieDesc();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="movie">
      <div className="movie-intro">
        <img
          className="movie-backdrop"
          src={`https://image.tmdb.org/t/p/original${
            MovieDesc ? MovieDesc.backdrop_path : ""
          }`}
          alt=""
        />
      </div>
      <div className="movie-detail">
        <div className="movie-detailLeft">
          <div className="movie-posterBox">
            <img
              className="movie-poster"
              src={`https://image.tmdb.org/t/p/original${
                MovieDesc ? MovieDesc.poster_path : ""
              }`}
              alt=""
            />
          </div>
        </div>
        <div className="movie-detailRight">
          <div className="movie-detailRightTop">
            <div className="movie-name">
              {MovieDesc ? MovieDesc.original_title : ""}
            </div>
            <div className="movie-tagline">
              {MovieDesc ? MovieDesc.tagline : ""}
            </div>
            <div className="movie-rating">
              {MovieDesc ? MovieDesc.vote_average : ""}{" "}
              <i class="fas fa-star" />
              <span className="movie-voteCount">
                {MovieDesc ? "(" + MovieDesc.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie-info">
              {MovieDesc ? MovieDesc.runtime + " mins" : ""}
            </div>
            <div className="movie-releaseDate">
              {MovieDesc ? "Release date: " + MovieDesc.release_date : ""}
            </div>
            <div className="movie-genres">
              {MovieDesc && MovieDesc.genres
                ? MovieDesc.genres.map((genre) => (
                    <>
                      <span className="movie-genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie-detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{MovieDesc ? MovieDesc.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie-links">
        <div className="movie-heading">Useful Links</div>
        {MovieDesc && MovieDesc.homepage && (
          <a
            href={MovieDesc.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            <p>
              <span className="movie-homeButton movie-Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {MovieDesc && MovieDesc.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + MovieDesc.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            <p>
              <span className="movie-imdbButton movie-Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
      <div className="movie-heading">Production companies</div>
      <div className="movie-production">
        {MovieDesc &&
          MovieDesc.production_companies &&
          MovieDesc.production_companies.map((company) => (
            <>
              {company.logo_path && (
                <span className="productionCompanyImage">
                  <img
                    className="movie-productionComapany"
                    src={
                      "https://image.tmdb.org/t/p/original" + company.logo_path
                    }
                    alt=""
                  />
                  <span>{company.name}</span>
                </span>
              )}
            </>
          ))}
      </div>
    </div>
  );
}
