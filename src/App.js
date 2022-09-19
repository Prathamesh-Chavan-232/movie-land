import "./App.css";
import { useEffect } from "react";
const API_URL = "http://www.omdbapi.com/?apikey=a87458c7";
function App() {
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    console.log(data.Search);
  };
  // import the data from the api
  useEffect(() => {
    searchMovies("Superman");
    return () => {};
  }, []);

  return (
    <div className="App">
      <h1>Movie land</h1>
    </div>
  );
}

export default App;
