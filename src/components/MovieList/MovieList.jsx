import PaymentCard from "../PaymentCard/PaymentCard";

export default function MovieList({ payments }) {
  return (
    <ul>
      {payments.map((payment) => (
        <li key={payment.id}>
          <PaymentCard payment={payment} />
        </li>
      ))}
    </ul>
  );
}
