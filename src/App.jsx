import "bootstrap/dist/css/bootstrap.min.css";
/* import Footer from "./Components/Footer"; */
import TopBar from "./Components/TopBar";
import Home from "./Components/Home";
import EditProfile from "./Components/EditProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./Components/TvShows";
import NotFound from "./Components/NotFound";
import MovieDetails from "./Components/MovieDetails";
function App() {
  return (
    <div className="bg-dark">
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
