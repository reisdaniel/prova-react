import React, { useEffect, useState } from 'react';
import tmdbApi from '../services/tmdbApi';
import useMovieStore from '../store/movieStore';
import MoviesTable from './tables/MoviesTable';
import MovieModal from './forms/MovieFormModal';

const MoviesList = () => {
  const { movies, setMovies } = useMovieStore(); // Zustand store
  const [modalOpen, setModalOpen] = useState(false); // Estado para abrir/fechar modal
  const [selectedMovie, setSelectedMovie] = useState(null); // Estado para o filme selecionado

  // Carrega os filmes populares ao montar o componente
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await tmdbApi.fetchPopularMovies();
      setMovies(data.results);
    };

    fetchMovies();
  }, [setMovies]);

  // Função para adicionar um novo filme
  const handleAddMovie = () => {
    setSelectedMovie(null); // Sem filme selecionado
    setModalOpen(true); // Abre o modal
  };

  // Função para editar um filme existente
  const handleEditMovie = (movie) => {
    setSelectedMovie(movie); // Define o filme a ser editado
    setModalOpen(true); // Abre o modal
  };

  return (
    <div>
      <h1>Popular Movies</h1>
      {/* Botão para abrir o modal de adição */}
      <button onClick={handleAddMovie}>Add New Movie</button>

      {/* Componente de tabela com botão "Editar" */}
      <MoviesTable data={movies} onEdit={handleEditMovie} />

      {/* Modal para Adicionar/Editar Filmes */}
      <MovieModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)} // Função para fechar o modal
        selectedMovie={selectedMovie}
      />
    </div>
  );
};

export default MoviesList;
