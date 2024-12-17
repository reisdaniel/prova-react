import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

const tmdbApi = {
  fetchPopularMovies: async (page = 1) => {
    const { data } = await axios.get(`${baseUrl}/movie/popular`, {
      params: { api_key: apiKey, language: 'en-US', page },
    });
    return data;
  },
  fetchGenres: async () => {
    const { data } = await axios.get(`${baseUrl}/genre/movie/list`, {
      params: { api_key: apiKey, language: 'en-US' },
    });
    return data.genres; // Retorna apenas a lista de gêneros
  },
};

export default tmdbApi;
