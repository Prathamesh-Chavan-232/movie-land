import "../App.css";
import { apilinks } from "../api/apiconfig";
import { MovieList } from "../components/MovieList";
import React, { useEffect, useState } from "react";
import DisplayCarousel from "../components/DisplayCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const Homepage = () => {
  const fetchPopularMovies = async () => {
    const res = await fetch(`${apilinks.topRatedMovies}`);
    const data = await res.json();
    console.log(data.results);
    setpopularMovies(data.results);
  };

  const [popularMovies, setpopularMovies] = useState([]);

  // Fetch Movies Data from the api
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div className="">
      {popularMovies?.length > 0 ? (
        <DisplayCarousel Movies={popularMovies} />
      ) : (
        <div>
          <h2>No Movies Found</h2>
        </div>
      )}
      <MovieList></MovieList>
    </div>
  );
};
