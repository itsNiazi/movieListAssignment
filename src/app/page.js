"use client";
import { useState } from "react";
import AddMovies from "./components/addMovies";
import MovieList from "./components/movieList";
import OrderByAlphaButton from "./components/Buttons/orderByAlphaButton";
import OrderByGradeButton from "./components/Buttons/orderByGradeButton";

export default function Home() {
  const [movies, setMovies] = useState([]);

  function handleMovie(movie) {
    setMovies([...movies, movie]);
  }

  function deleteMovie(indexToRemove) {
    const updatedMovieList = [...movies];
    updatedMovieList.splice(indexToRemove, 1);
    setMovies(updatedMovieList);
  }
  function sortByAlpha() {
    const sortedList = [...movies];
    sortedList.sort((a, b) => {
      return a.movie.trim() > b.movie.trim();
    });
    setMovies(sortedList);
  }

  function sortByGrade() {
    const sortedList = [...movies];
    sortedList.sort((a, b) => {
      return a.rating < b.rating;
    });
    setMovies(sortedList);
  }

  return (
    <div>
      <AddMovies onSubmission={handleMovie} movies={movies} />
      <MovieList movies={movies} deleteMovie={deleteMovie} />
      <OrderByAlphaButton sortMovies={sortByAlpha} />
      <OrderByGradeButton sortMovies={sortByGrade} />
    </div>
  );
}
