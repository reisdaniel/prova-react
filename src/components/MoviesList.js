import React, { useEffect, useState } from 'react';
import tmdbApi from '../services/tmdbApi';
import useMovieStore from '../store/movieStore';
import MoviesTable from './tables/MoviesTable';
import { Typography, Button, Container, MenuItem, Select } from '@mui/material';
import MovieModal from './forms/MovieFormModal';

const MoviesList = () => {
  const { movies, setMovies, genres, setGenres, deleteMovie } = useMovieStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState(''); // Estado para o gênero selecionado

  useEffect(() => {
    const fetchData = async () => {
      const moviesData = await tmdbApi.fetchPopularMovies();
      const genresData = await tmdbApi.fetchGenres();
      setMovies(moviesData.results);
      setGenres(genresData);
    };

    fetchData();
  }, [setMovies, setGenres]);

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

  // Filtrar os filmes pelo gênero selecionado
  const filteredMovies = selectedGenre
    ? movies.filter((movie) =>
        movie.genre_ids.includes(parseInt(selectedGenre))
      )
    : movies;

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

      {/* Dropdown para filtrar por gênero */}
      <Select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
        displayEmpty
        fullWidth
        style={{ marginBottom: '16px' }}
      >
        <MenuItem value="">All Genres</MenuItem>
        {genres.map((genre) => (
          <MenuItem key={genre.id} value={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </Select>

      <MoviesTable
        data={filteredMovies}
        onEdit={handleEditMovie}
        onDelete={handleDeleteMovie}
      />

      <MovieModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedMovie={selectedMovie}
      />
    </Container>
  );
};

export default MoviesList;
