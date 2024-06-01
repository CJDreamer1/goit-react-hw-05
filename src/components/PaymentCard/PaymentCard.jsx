import { Link, useLocation } from "react-router-dom";

export default function PaymentCard({ payment: { id, title } }) {
  const location = useLocation();

  return (
    <div>
      <Link to={`/MoviesPage/${id}`} state={location}>
        {title}
      </Link>
    </div>
  );
}
