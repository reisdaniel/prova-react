import React, { useEffect, useState } from 'react';
import tmdbApi from '../services/tmdbApi';
import useMovieStore from '../store/movieStore';
import MoviesTable from './tables/MoviesTable';
import MovieModal from './forms/MovieFormModal';
import { Typography, Button, Container } from '@mui/material';

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
    <Container>
      <Typography variant="h1" gutterBottom>
        Movie Dashboard
      </Typography>
      <Typography variant="h2" gutterBottom>
        Popular Movies
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddMovie}
        style={{ marginBottom: '16px' }}
      >
        Add New Movie
      </Button>
      <MoviesTable data={movies} onEdit={handleEditMovie} onDelete={handleDeleteMovie} />
      <MovieModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedMovie={selectedMovie}
      />
    </Container>
  );
};

export default MoviesList;
