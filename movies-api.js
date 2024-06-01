import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzZlMWJmNDA5N2EyMGMzNTczMTIwMGY0M2ZkM2FjNiIsInN1YiI6IjY2NTFmMmMzNTZkMWNiM2RkN2MxMmU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rcJNoqYoXyPDewHHJ7dt87b8En1fEohm6dHQvQkzzgE";

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", {
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}`, {
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  });
  console.log(response.data);
  return response.data;
};

export const getMovieCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`, {
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  });
  console.log(response.data);
  return response.data;
};

export const getMovieReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

export const searchMovies = async (searchTerm) => {
  const response = await axios.get("/search/movie", {
    headers: {
      accept: "application/json",
      Authorization: API_KEY,
    },
    params: {
      query: searchTerm,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};
