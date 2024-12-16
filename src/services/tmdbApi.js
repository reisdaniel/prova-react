import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3';

const tmdbApi = {
  fetchPopularMovies: async (page = 1) => {
    const { data } = await axios.get(`${baseUrl}/movie/popular`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: page
      }
    });
    return data;
  }
};

export default tmdbApi;
