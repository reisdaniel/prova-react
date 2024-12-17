import React, { useEffect, useState } from 'react';
import tmdbApi from '../services/tmdbApi';
import useMovieStore from '../store/movieStore';
import MoviesTable from './tables/MoviesTable';
import MovieModal from './forms/MovieFormModal';

const MoviesList = () => {
  const { movies, setMovies, deleteMovie } = useMovieStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await tmdbApi.fetchPopularMovies();
      setMovies(data.results);
    };

    fetchMovies();
  }, [setMovies]);

  const handleAddMovie = () => {
    setSelectedMovie(null);
    setModalOpen(true);
  };

  const handleEditMovie = (movie) => {
    setSelectedMovie(movie);
    setModalOpen(true);
  };

  const handleDeleteMovie = (id) => {
    deleteMovie(id);
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      <button onClick={handleAddMovie}>Add New Movie</button>
      <MoviesTable
        data={movies}
        onEdit={handleEditMovie}
        onDelete={handleDeleteMovie}
      />
      <MovieModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedMovie={selectedMovie}
      />
    </div>
  );
};

export default MoviesList;
