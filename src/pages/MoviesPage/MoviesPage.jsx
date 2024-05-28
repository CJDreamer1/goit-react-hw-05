import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { getPayments } from "../../../movies-api";
import OwnerFilter from "../../components/OwnerFilter/OwnerFilter";
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const ownerFilter = searchParams.get("owner") ?? "";

  const changeOwnerFilter = (newFilter) => {
    searchParams.set("owner", newFilter);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    setLoading(true);
    getPayments()
      .then((data) => setPayments(data))
      .finally(() => setLoading(false));
  }, []);

  const filteredPayments = payments.filter((payment) =>
    payment.cardOwner.toLowerCase().includes(ownerFilter.toLowerCase())
  );

  return (
    <div>
      <h2>MoviesPage</h2>
      <OwnerFilter filter={ownerFilter} onSearch={changeOwnerFilter} />
      {loading && <b>Loading payments...</b>}
      {filteredPayments.length > 0 && <MovieList payments={filteredPayments} />}
    </div>
  );
}
