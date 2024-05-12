"use client";
import AddMovies from "./components/addMovies";
import MovieList from "./components/movieList";
import { useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  function handleMovie(movie) {
    setMovies([...movies, movie]);
    console.log(movie);
  }
  function deleteMovie(indexToRemove) {
    const updatedMovieList = [...movies];
    updatedMovieList.splice(indexToRemove, 1);
    setMovies(updatedMovieList);
  }

  return (
    <div>
      <AddMovies onSubmission={handleMovie} movies={movies} />
      <MovieList movies={movies} deleteMovie={deleteMovie} />
    </div>
  );
}
