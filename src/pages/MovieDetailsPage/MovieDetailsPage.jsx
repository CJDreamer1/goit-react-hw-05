import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import { getPaymentById } from "../../../movies-api";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";

export default function MovieDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPaymentById(paymentId)
      .then((data) => setPayment(data))
      .finally(() => setLoading(false));
    // catch ()
  }, [paymentId]);

  return (
    <div>
      <h2>PaymentDetails {paymentId}</h2>
      {loading && <b>Loading payment info...</b>}
      {payment && <PaymentInfo payment={payment} />}
      <ul>
        <li>
          <NavLink to="bank">Bank info</NavLink>
        </li>
        <li>
          <NavLink to="receipt">Receipt</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
