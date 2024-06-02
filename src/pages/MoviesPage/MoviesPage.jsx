import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../../movies-api";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [query, setQuery] = useState("");

  const [searchParams, setSearchParams] = useSearchParams(); // Отримання параметрів з URL

  // Отримання значення параметра "searchTerm" з URL при завантаженні сторінки
  useEffect(() => {
    const query = searchParams.get("query") ?? "";
    if (!query) return;

    setLoading(true);
    searchMovies(query)
      .then((data) => {
        setMovies(data);
        // Оновлення параметрів у стрічці запиту браузера з використанням пошукового терміну

      })
      .catch((error) => {
        console.error("Failed to fetch movies:", error);
      })
      .finally(() => setLoading(false));
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault;
    const query = e.target.query.value.trim();
    if (!query) {
      alert("Please enter a search term");
      return;
    }
        setSearchParams({ query: query });
  };

  return (
    <div>
      <h2>Search film by name</h2>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" placeholder="Enter movie title..." />
        <button>Search</button>
      </form>

      {loading && <b>Loading movies...</b>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
