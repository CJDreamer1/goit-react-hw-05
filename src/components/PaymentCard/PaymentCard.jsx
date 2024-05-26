import { Link } from "react-router-dom";

export default function PaymentCard({
  payment: { id, cardOwner, amount, description },
}) {
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
        <Link to={`${id}`}>Details</Link>
        {/* <Link to={`/payments/${id}`}>Details</Link> */}
        {/* можна ще так робити ^^ */}
      </b>
    </div>
  );
}
