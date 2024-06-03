import { Link, useLocation } from "react-router-dom";

export default function MovieCard({ movie: { id, title } }) {
  const location = useLocation();

  return (
    <div>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </div>
  );
}
