import axios from "axios";
import { API_KEY } from "App/constants";
const API_BASE_URL = "https://api.themoviedb.org/3";

const tmdbService = {
  fetchMoviesByType: async (page, type, lang) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/movie/${type}`, {
        params: {
          api_key: API_KEY,
          page: page,
          language: lang
        }
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch popular movies from the TMDB API.");
    }
  },

  fetchMovieDetails: async (movieId, lang) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/movie/${movieId}`, {
        params: {
          api_key: API_KEY,
          language: lang,
          append_to_response: 'credits'
        }
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie details from the TMDB API.");
    }
  },

  fetchMovieCredits: async (movieId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/movie/${movieId}/credits`, {
        params: {
          api_key: API_KEY
        }
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie credits from the TMDB API.");
    }
  },

  searchMovies: async (query) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/search/movie`, {
        params: {
          api_key: API_KEY,
          query: query
        }
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch movie credits from the TMDB API.");
    }
  }
};

export default tmdbService;
