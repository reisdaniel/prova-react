import React, { useEffect } from 'react';
import tmdbApi from '../services/tmdbApi';
import useMovieStore from '../store/movieStore';

const MoviesList = () => {
  const { movies, setMovies } = useMovieStore();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await tmdbApi.fetchPopularMovies();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            {movie.title} ({movie.release_date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
