import { Suspense, useEffect, useRef, useState } from "react";
import {
  NavLink,
  useParams,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import { getMovieById } from "../../../movies-api";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from || "/MoviesPage");

  useEffect(() => {
    setLoading(true);
    getMovieById(movieId)
      .then((data) => setMovie(data))
      .catch((error) => {
        console.error("Failed to fetch movie data:", error);
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <div>
      <p>
        <b>
          <Link to={backLinkRef.current}>Go back</Link>
        </b>
      </p>
      {loading && <b>Loading movie info...</b>}
      {movie && <PaymentInfo movie={movie} />}
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="Reviews">Reviews</NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading sub component...</div>}>
        <Outlet context={{ movieId }} />
      </Suspense>
    </div>
  );
}
