import { create } from 'zustand';

const useMovieStore = create((set) => ({
  movies: [],
  selectedMovie: null,
  isFormOpen: false,
  setMovies: (movies) => set({ movies }),
  setSelectedMovie: (movie) => set({ selectedMovie: movie }),
  setIsFormOpen: (isOpen) => set({ isFormOpen: isOpen }),
  addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
  updateMovie: (updatedMovie) => set((state) => ({
    movies: state.movies.map((movie) => movie.id === updatedMovie.id ? updatedMovie : movie)
  })),
  deleteMovie: (movieId) => set((state) => ({
    movies: state.movies.filter((movie) => movie.id !== movieId)
  }))
}));

export default useMovieStore;
