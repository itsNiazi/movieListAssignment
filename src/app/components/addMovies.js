import { useRef } from "react";

export default function AddMovies(props) {
  const movieRef = useRef();
  const ratingRef = useRef();
  const newId =
    props.movies.length > 0 ? props.movies[props.movies.length - 1].id + 1 : 1;

  function handleSubmission() {
    const movieTitle = movieRef.current.value.trim();
    const movieRating = ratingRef.current.value;
    if (movieTitle && movieRating != false) {
      props.onSubmission({
        id: newId,
        movie: movieRef.current.value,
        rating: ratingRef.current.value,
      });
      movieRef.current.value = "";
      ratingRef.current.value = ratingRef.current[0].value;
    } else {
      alert("Var vänlig och ange både titel och betyg!");
    }
  }

  return (
    <div>
      <input type="text" placeholder="Ange film..." ref={movieRef} />
      <select ref={ratingRef}>
        <option value="0" defaultValue>
          Ange betyg
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input type="submit" value="Spara" onClick={handleSubmission} />
    </div>
  );
}
