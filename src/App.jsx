// Imports
import "./App.css";
import { Homepage } from "./pages/Homepage";
import MovieList from "./pages/MovieList";
import Movies from "./pages/Movies";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import OldHomepage from "./pages/simplePage";

// App component
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Homepage></Homepage>}></Route>
          <Route path="/homepage" element={<Homepage></Homepage>}></Route>
          <Route path="/movie/:id" element={<MovieList />} />
          <Route path="/movies/:type" element={<Movies />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      {/* <OldHomepage></OldHomepage> */}
    </div>
  );
}

export default App;

function Error() {
  return <div className="page-text">Error 404 - page not found</div>;
}
