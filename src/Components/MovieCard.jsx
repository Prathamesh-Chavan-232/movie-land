import "../App.css";
import React from "react";

export default function MovieCard({ movie }) {
  console.log(movie);
  return (
    <div className="movie">
      {/* Year */}
      <div>
        <p>{movie.Year}</p>
      </div>

      {/* Poster */}
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt=""
        />
      </div>

      {/* Title */}
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}
