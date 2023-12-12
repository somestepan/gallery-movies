import React, { useState } from 'react';
import AutocompleteForm from './components/AutocompleteForm';
import MovieList from './components/MovieList';

const App: React.FC = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const handleSelectedMoviesChange = (movies: any) => {
    setSelectedMovies(movies);
  };

  return (
    <div className="app">
      <h1>Gallery movies</h1>
      <AutocompleteForm onSelectedMoviesChange={handleSelectedMoviesChange} />
      <MovieList movies={selectedMovies} />
    </div>
  );
};

export default App;
