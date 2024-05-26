import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getPayments } from "../../../movies-api";

export default function MoviesPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPayments()
      .then((data) => setPayments(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>MoviesPage</h2>
      {loading && <b>Loading payments...</b>}
      {payments.length > 0 && <MovieList payments={payments} />}
    </div>
  );
}
