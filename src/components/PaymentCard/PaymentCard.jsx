import { Link, useLocation } from "react-router-dom";

export default function PaymentCard({
  payment: { id, cardOwner, amount, description },
}) {
  const location = useLocation();

  return (
    <div>
      <p>
        <b>Card Owner:</b>
        {cardOwner}
      </p>
      <p>
        <b>Amount:</b>
        {amount}
      </p>
      <p>
        <b>Description:</b> {description}
      </p>
      <b>
        <Link to={`/MoviesPage/${id}`} state={location}>
          Details
        </Link>
      </b>
    </div>
  );
}
