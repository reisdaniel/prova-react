import React, { useEffect, useState } from 'react';
import tmdbApi from '../services/tmdbApi';
import useMovieStore from '../store/movieStore';
import MoviesTable from './tables/MoviesTable';
import MovieModal from './forms/MovieFormModal';
import MovieDetailsModal from './forms/MovieDetailsModal';
import { Typography, Button, Container, MenuItem, Select, CircularProgress, Alert } from '@mui/material';

const MoviesList = () => {
  const { movies, setMovies, genres, setGenres, deleteMovie } = useMovieStore();
  const [modalOpen, setModalOpen] = useState(false); // Estado para o modal de adição/edição
  const [selectedMovie, setSelectedMovie] = useState(null); // Filme selecionado
  const [detailsModalOpen, setDetailsModalOpen] = useState(false); // Estado para o modal de detalhes
  const [movieDetails, setMovieDetails] = useState(null); // Dados do filme no modal de detalhes
  const [selectedGenre, setSelectedGenre] = useState(''); // Estado para o gênero selecionado

  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Buscar filmes e gêneros
        const moviesData = await tmdbApi.fetchPopularMovies();
        const genresData = await tmdbApi.fetchGenres();
        setMovies(moviesData.results);
        setGenres(genresData);
      } catch (err) {
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setMovies, setGenres]);

  const handleAddMovie = () => {
    setSelectedMovie(null); // Modo adição
    setModalOpen(true);
  };

  const handleEditMovie = (movie) => {
    setSelectedMovie(movie); // Modo edição
    setModalOpen(true);
  };

  const handleDeleteMovie = (id) => {
    deleteMovie(id); // Remove o filme pelo Zustand
  };

  const handleShowDetails = (movie) => {
    setMovieDetails(movie); // Define o filme no modal de detalhes
    setDetailsModalOpen(true);
  };

  // Filtrar os filmes pelo gênero selecionado
  const filteredMovies = selectedGenre
    ? movies.filter((movie) =>
        movie.genre_ids && movie.genre_ids.includes(Number(selectedGenre))
      )
    : movies;

  return (
    <Container>
      {/* Títulos */}
      <Typography variant="h1" gutterBottom>
        Movie Dashboard
      </Typography>
      <Typography variant="h2" gutterBottom>
        Popular Movies
      </Typography>

      {/* Botão Adicionar Filme */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddMovie}
        style={{ marginBottom: '16px' }}
      >
        Add New Movie
      </Button>

      {/* Indicador de Carregamento */}
      {loading && (
        <div style={{ textAlign: 'center', margin: '20px' }}>
          <CircularProgress />
          <Typography>Loading movies...</Typography>
        </div>
      )}

      {/* Alerta de Erro */}
      {error && (
        <Alert severity="error" style={{ marginBottom: '16px' }}>
          {error}
        </Alert>
      )}

      {/* Dropdown de Gêneros */}
      {!loading && !error && genres.length > 0 && (
        <Select
          value={selectedGenre || ''} // Controla o valor do Select
          onChange={(e) => setSelectedGenre(e.target.value)} // Atualiza o gênero selecionado
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
      )}

      {/* Tabela de Filmes */}
      {!loading && !error && (
        <MoviesTable
          data={filteredMovies} // Passa os filmes filtrados
          onEdit={handleEditMovie}
          onDelete={handleDeleteMovie}
          onDetails={handleShowDetails}
        />
      )}

      {/* Modais */}
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
