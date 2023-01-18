import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getMovieImg } from "../utils/getMovieImg";
import { GoBack } from "../components/GoBack";
import { get } from "../data/httpClient";

import "./assets/css/movieDetails.css";
import "../styles/app.css";

export function MovieDetails() {
  let { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGenres(data.genres[0].name);
    });
  }, [movieId]);

  const imgUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="detailsContainer">
      <div>
        <Link to={"/"}>
          <GoBack />
        </Link>
        <img src={imgUrl} alt={movie.title} className="movieImage" />
      </div>
      <div className="col movieDetails">
        <p className="title titleMovie">
          <strong>Título: </strong> {movie.title}
        </p>
        <p className="genres">
          <strong>Género: </strong> {genres}
        </p>
        <p className="overview">
          <strong>Descripción: </strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
