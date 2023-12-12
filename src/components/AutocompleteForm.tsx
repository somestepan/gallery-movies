import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import moviesData from '../data/moviesData';

const AutocompleteForm: React.FC<{
  onSelectedMoviesChange: (movies: any) => void}> = ({ onSelectedMoviesChange }) => {
  const { register, handleSubmit, setValue, watch } = useForm();
  const selectedMovies = watch('movies', []);

  const onSubmit = (data: any) => {
    console.log('Selected Movies:', data.movies);
    setValue('movies', data.movies);
    // onSelectedMoviesChange(data.movies);
  };

  useEffect(() => {
    onSelectedMoviesChange(selectedMovies);
  }, [selectedMovies, onSelectedMoviesChange]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Autocomplete
        {...register('movies', { required: 'Выберите хотя бы один фильм' })}
        multiple
        id="movies"
        options={moviesData.sort((a, b) => a.year - b.year)}
        groupBy={(option) => option.year.toString()}
        getOptionLabel={(option) => option.title}
        onChange={(_, value) => setValue('movies', value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose movies"
            variant="outlined"
            error={Boolean(selectedMovies.length === 0)}
            // style={{ width: '400px' }}
          />
        )}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={selectedMovies.length === 0}
        style={{ marginTop: '10px' }}
      >
        Add
      </Button>
    </form>
  );
};

export default AutocompleteForm;
