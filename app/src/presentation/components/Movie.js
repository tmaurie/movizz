import React from "react";
import { useNavigate } from "react-router-dom";

const Movie = ({ movie }) => {
  const navigate = useNavigate();

  const handleNav = () => {
  navigate(`/m/${movie.id}`);
  };

  return (
    <div className="movie" onClick={handleNav}>
      <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
    </div>
  );
};

export default Movie;