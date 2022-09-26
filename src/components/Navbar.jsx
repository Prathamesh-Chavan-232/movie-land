import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="nav">
      <div className="left-nav">
        <Link to="/">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              alt=""
            />
          </div>
        </Link>
        <Link to="/movies/popular">Popular</Link>
        <Link to="/movies/top-rated">Top rated</Link>
        <Link to="/movies/upcoming">Upcoming</Link>
      </div>
    </div>
  );
};
