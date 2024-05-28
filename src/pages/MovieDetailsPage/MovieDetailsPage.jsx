import { Suspense, useEffect, useRef, useState } from "react";
import {
  NavLink,
  useParams,
  Outlet,
  Link,
  useLocation,
} from "react-router-dom";
import { getPaymentById } from "../../../movies-api";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";

export default function MovieDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/MoviesPage");

  useEffect(() => {
    setLoading(true);
    getPaymentById(paymentId)
      .then((data) => setPayment(data))
      .catch((error) => {
        console.error("Failed to fetch payment data:", error);
      })
      .finally(() => setLoading(false));
  }, [paymentId]);

  return (
    <div>
      <p>
        <b>
          <Link to={backLinkRef.current}>Go back</Link>
        </b>
      </p>
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
      <Suspense fallback={<div>Loading sub component...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
