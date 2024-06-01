import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { searchMovies } from "../../../movies-api";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const [searchParams, setSearchParams] = useSearchParams(); // Отримання параметрів з URL

  // Отримання значення параметра "searchTerm" з URL при завантаженні сторінки
  useEffect(() => {
    const query = searchParams.get("query") ?? "";
    if (query) {
      setQuery(query);
    }
  }, [searchParams]);

  const handleSearch = () => {
    if (query.trim() === "") {
      alert("Please enter a search term");
      return;
    }

    setLoading(true);
    searchMovies(query)
      .then((data) => {
        setMovies(data);
        // Оновлення параметрів у стрічці запиту браузера з використанням пошукового терміну
        setSearchParams({ query: query });
      })
      .catch((error) => {
        console.error("Failed to fetch movies:", error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h2>Search film by name</h2>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <b>Loading movies...</b>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
