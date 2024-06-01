import { useEffect, useState } from "react";
import { getCast } from "../../movies-api";

export default function BankInfo(paymentId) {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCast(paymentId)
      .then((data) => setCast(data))
      .catch((error) => {
        console.error("Failed to fetch cast data:", error);
      })
      .finally(() => setLoading(false));
  }, [paymentId]);

  return (
    <div>
      <h2>Cast</h2>
      {loading && <p>Loading cast...</p>}
      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
