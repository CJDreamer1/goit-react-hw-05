export default function MovieInfo({
  movie: { title, overview, release_date, poster_path, vote_average, genres },
}) {
  const percentage = Math.round((vote_average / 10) * 100);
  const genresList = genres.map((genre) => genre.name).join(", ");
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <p>
        <b>Title:</b> {title} ({release_date})
      </p>
      <p>
        <b>User Score:</b> {percentage + "%"}
      </p>
      <p>
        <b>Description:</b> {overview}
      </p>
      <p>
        <b>Genres:</b> {genresList}
      </p>
    </div>
  );
}
