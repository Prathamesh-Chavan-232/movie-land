// Imports
import "./App.css";
import Movies from "./components/Movies";
import { Homepage } from "./pages/Homepage";
import OldHomepage from "./pages/simplePage";
import { Navbar } from "./components/Navbar";
import MovieList from "./components/MovieList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
          <Route path="/oldHome" element={<OldHomepage />} />
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
