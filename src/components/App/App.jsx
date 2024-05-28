import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);

const BankInfo = lazy(() => import("../BankInfo"));
const PaymentReceipt = lazy(() => import("../PaymentReceipt"));

export default function App() {
  return (
    <div>
      <h1>Routing is React</h1>
      <Navigation />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="MovieDetails" element={<MovieDetailsPage />} />
          <Route path="MoviesPage" element={<MoviesPage />} />

          <Route path="profile" element={<div>Profile Page</div>} />
          <Route path="payments" element={<MoviesPage />} />
          <Route path="MoviesPage/:paymentId" element={<MovieDetailsPage />}>
            <Route path="bank" element={<BankInfo />} />
            <Route path="receipt" element={<PaymentReceipt />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
