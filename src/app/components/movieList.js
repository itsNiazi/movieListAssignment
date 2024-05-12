import MovieItem from "./movieItem";

export default function MovieList(props) {
  return (
    <ul>
      {props.movies.map((movie, index) => (
        <MovieItem
          key={movie.id}
          movieTitle={movie.movie}
          movieRating={movie.rating}
          handleClick={() => props.deleteMovie(index)}
        />
      ))}
    </ul>
  );
}
