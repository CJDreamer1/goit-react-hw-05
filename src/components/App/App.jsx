import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage/HomePage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import BankInfo from "../BankInfo";
import PaymentReceipt from "../PaymentReceipt";

export default function App() {
  return (
    <div>
      <h1>Routing is React</h1>
      <Navigation />
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
    </div>
  );
}
