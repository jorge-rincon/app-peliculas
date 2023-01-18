import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandindPage } from "../pages/LandinPage";
import { MovieDetails } from "../pages/MovieDetails";



export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandindPage />} />
        <Route exact path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}
