import "../App.css";
import { apilinks } from "../api/apiconfig";
import React, { useEffect, useState } from "react";

export const Homepage = () => {
  const fetchPopularMovies = async () => {
    const res = await fetch(`${apilinks.upcomingMovies}`);
    const data = await res.json();
    console.log(data.results);
  };

  const [popularMovies, setpopularMovies] = useState([]);

  // Fetch Movies Data from the api
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div className="page-text">
      <h1 className="text-center">Home Page</h1>
    </div>
  );
};
