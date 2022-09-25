// Imports
import "./App.css";
// import searchIcon from "./search.svg";
import { useEffect, useState } from "react";
import MovieCard from "./Components/MovieCard";

// OMDB Movie Data API
const API_URL = "https://www.omdbapi.com/?apikey=a87458c7";

// App component
function App() {
  const [Movies, setMovies] = useState([]);
  const [search, setsearch] = useState("");
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land...</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
        <img src="" alt="search" onClick={() => searchMovies(search)} />
      </div>
      {Movies.length > 0 ? (
        <div className="container">
          {Movies.map((movie) => (
            <MovieCard movie={movie}></MovieCard>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
