import React, { useEffect } from 'react';
import tmdbApi from '../services/tmdbApi';
import useMovieStore from '../store/movieStore';
import MoviesTable from './MoviesTable';

const MoviesList = () => {
  const { movies, setMovies } = useMovieStore();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await tmdbApi.fetchPopularMovies();
      setMovies(data.results);
    };

    fetchMovies();
  }, [setMovies]);

  return (
    <div>
      <h1>Popular Movies</h1>
      <MoviesTable data={movies} />
    </div>
  );
};

export default MoviesList;