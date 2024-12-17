import React, { useEffect, useState } from 'react';
import tmdbApi from '../services/api/tmdbApi';
import useMovieStore from '../store/movieStore';
import MovieModal from '../components/forms/MovieFormModal';
import MovieDetailsModal from '../components/forms/MovieDetailsModal';
import { ThemeProvider, Container, Box, CircularProgress, Alert } from '@mui/material';
import HeroSection from '../components/tables/HeroSection';
import GenreFilter from '../components/tables/GenreFilter';
import MoviesGrid from '../components/tables/MoviesGrid';
import theme from '../theme';

const MoviesList = () => {
  const { movies, setMovies, genres, setGenres, deleteMovie } = useMovieStore();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch dos filmes e gêneros
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const moviesData = await tmdbApi.fetchPopularMovies();
        const genresData = await tmdbApi.fetchGenres();
        setMovies(moviesData.results || []);
        setGenres(genresData || []);
      } catch (err) {
        console.error('Erro ao carregar os dados:', err);
        setError('Erro ao carregar os dados. Verifique sua conexão ou tente novamente.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setMovies, setGenres]);

  // Filtrar os filmes pelo gênero selecionado
  const filteredMovies = selectedGenre
    ? movies.filter((movie) =>
        movie.genre_ids?.some((id) => id === Number(selectedGenre))
      )
    : movies;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', color: '#FFF' }}>
      <HeroSection
  onAddMovie={() => {
    setSelectedMovie(null); // Limpa os dados do formulário
    setModalOpen(true); // Abre o modal
  }}
/>


        <Container>
          <GenreFilter genres={genres} selectedGenre={selectedGenre} onChange={setSelectedGenre} />

          {loading && (
            <Box textAlign="center" my={3}>
              <CircularProgress color="secondary" />
            </Box>
          )}
          {error && <Alert severity="error">{error}</Alert>}

          {!loading && !error && (
            <MoviesGrid
            movies={filteredMovies}
            onDetails={(movie) => {
              setMovieDetails(movie);
              setDetailsModalOpen(true);
            }}
            onEdit={(movie) => {
              setSelectedMovie(movie);
              setModalOpen(true);
            }}
            onDelete={deleteMovie}
          />
          )}
        </Container>

        {modalOpen && (
          <MovieModal isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedMovie={selectedMovie} />
        )}
        {detailsModalOpen && (
          <MovieDetailsModal
            isOpen={detailsModalOpen}
            onClose={() => setDetailsModalOpen(false)}
            movie={movieDetails}
          />
        )}
      </Box>
    </ThemeProvider>
  );
};

export default MoviesList;
