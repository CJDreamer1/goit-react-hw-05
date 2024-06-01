import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../../movies-api";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies()
      .then((data) => setMovies(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {loading && <b>Loading movies...</b>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
