import { apilinks } from "../api/apiconfig";
import Card from "./Card";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const MovieList = () => {
  const { type } = useParams();
  const [Movies, setMovies] = useState([]);

  // const fetchMovies = async () => {
  //   const res = await fetch(`${apilinks.topRatedMovies}`);
  //   const data = await res.json();
  //   console.log(data.results);
  //   setMovies(data.results);
  // };

  // Fetch Movies Data from the api
  useEffect(() => {
    const fetchMovies = async () => {
      let res;
      if (type === "upcoming") {
        res = await fetch(`${apilinks.upcomingMovies}`);
      } else if (type === "top-rated") {
        res = await fetch(`${apilinks.topRatedMovies}`);
      } else {
        res = await fetch(`${apilinks.popularMovies}`);
      }
      const data = await res.json();
      console.log(data.results);
      setMovies(data.results);
    };
    fetchMovies();
  }, [type]);

  return (
    <div className="movie-list">
      <h2 className="movie-list-title">
        {(type ? type : "popular").toUpperCase()}
      </h2>
      <div className="list-cards">
        {Movies.map((movie) => (
          <Card movie={movie}></Card>
        ))}
      </div>
    </div>
  );
};
