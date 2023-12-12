import React from 'react';
import { Movie } from '../data/moviesData';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list">
      {Array.isArray(movies) ? (
        movies.map((movie) => (
          <div key={movie.title} className="movie-card">
            <p>{movie.title}</p>
          </div>
        ))
      ) : (
        <p>No movies selected</p>
      )}
    </div>
  );
};

export default MovieList;
