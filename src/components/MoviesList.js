import React, { useEffect, useState } from 'react';
import tmdbApi from '../services/tmdbApi';
import useMovieStore from '../store/movieStore';
import MoviesTable from './tables/MoviesTable';
import MovieModal from './forms/MovieFormModal';
import MovieDetailsModal from './forms/MovieDetailsModal';
import { Typography, Button, Container } from '@mui/material';

const MoviesList = () => {
  const { movies, setMovies, deleteMovie } = useMovieStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false); // Estado do modal de detalhes
  const [movieDetails, setMovieDetails] = useState(null); // Filme selecionado

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

  const handleShowDetails = (movie) => {
    setMovieDetails(movie);
    setDetailsModalOpen(true);
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        Movie Dashboard
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddMovie}
        style={{ marginBottom: '16px' }}
      >
        Add New Movie
      </Button>
      <MoviesTable
        data={movies}
        onEdit={handleEditMovie}
        onDelete={handleDeleteMovie}
        onDetails={handleShowDetails} // Passa a função de detalhes
      />
      <MovieModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedMovie={selectedMovie}
      />
      <MovieDetailsModal
        isOpen={detailsModalOpen}
        onClose={() => setDetailsModalOpen(false)}
        movie={movieDetails}
      />
    </Container>
  );
};

export default MoviesList;
