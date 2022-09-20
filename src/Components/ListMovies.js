import React from "react";
import MovieCard from "./MovieCard";

const ListMovies = ({ Movies, searchName, searchRate }) => {
  return (
    <div>
      {Movies.filter(
        (e) =>
          e.title
            .toLowerCase()
            .trim()
            .includes(searchName.toLowerCase().trim()) && (e.rate <= searchRate)
      ).map((movie) => (
        <MovieCard
          title={movie.title}
          description={movie.description}
          imageUrl={movie.imgUrl}
          date={movie.date}
          rate={movie.rate}
        />
      ))}
    </div>
  );
};

export default ListMovies;
