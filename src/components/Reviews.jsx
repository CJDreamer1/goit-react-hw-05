import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getMovieReviews } from "../../movies-api";

export default function Reviews() {
  const { movieId } = useOutletContext();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieReviews(movieId)
      .then((data) => setReviews(data))
      .catch((error) => {
        console.error("Failed to fetch reviews:", error);
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {loading && <p>Loading reviews...</p>}
      {reviews.length === 0 && !loading && <p>No reviews available</p>}
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>
              <strong>{review.author}</strong> says:
            </p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
