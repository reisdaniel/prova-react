import { create } from 'zustand';

const useMovieStore = create((set) => ({
  movies: [],
  setMovies: (movies) => set({ movies }),
  addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
  updateMovie: (updatedMovie) => set((state) => ({
    movies: state.movies.map((movie) =>
      movie.id === updatedMovie.id ? updatedMovie : movie
    ),
  })),
  deleteMovie: (id) => set((state) => ({
    movies: state.movies.filter((movie) => movie.id !== id),
  })),
}));

export default useMovieStore;
