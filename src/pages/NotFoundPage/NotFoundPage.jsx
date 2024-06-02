import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h2>
        Sorry, this page is not exists. Please go to{" "}
        <Link to="/">home page!</Link>
      </h2>
    </div>
  );
}
