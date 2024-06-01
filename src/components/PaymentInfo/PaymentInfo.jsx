import { Link } from "react-router-dom";
export default function PaymentInfo({
  payment: { id, title, overview, release_date, poster_path },
}) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <p>
        <b>Title:</b> {title}
      </p>
      <p>
        <b>Release Date:</b> {release_date}
      </p>
      <p>
        <b>Description:</b> {overview}
      </p>
      <b>
        <Link to={`/MoviesPage/${id}`} state={location}>
          Details
        </Link>
      </b>
    </div>
  );
}
