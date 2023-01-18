import { Link } from "react-router-dom";

import styles from "./src/assets/css/MovieCard.module.css";

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <div>
      <li className={styles.movieCard}>
        <Link to={"/movies/" + movie.id}>
          <img
            width={230}
            height={345}
            src={imageUrl}
            className={styles.movieImage}
            alt={movie.title}
          />
        </Link>
        <div className={styles.titleCard}> {movie.title} </div>
      </li>
    </div>
  );
}
