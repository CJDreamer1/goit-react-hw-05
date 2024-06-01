import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getPayments = async () => {
  const response = await axios.get("/trending/movie/day", {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzZlMWJmNDA5N2EyMGMzNTczMTIwMGY0M2ZkM2FjNiIsInN1YiI6IjY2NTFmMmMzNTZkMWNiM2RkN2MxMmU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rcJNoqYoXyPDewHHJ7dt87b8En1fEohm6dHQvQkzzgE",
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

export const getPaymentById = async (paymentId) => {
  const response = await axios.get(`/movie/${paymentId}`, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzZlMWJmNDA5N2EyMGMzNTczMTIwMGY0M2ZkM2FjNiIsInN1YiI6IjY2NTFmMmMzNTZkMWNiM2RkN2MxMmU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rcJNoqYoXyPDewHHJ7dt87b8En1fEohm6dHQvQkzzgE",
    },
  });
  console.log(response.data);
  return response.data;
};

export const getCast = async (paymentId) => {
  const response = await axios.get(`/movie/${paymentId}/credits`, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzZlMWJmNDA5N2EyMGMzNTczMTIwMGY0M2ZkM2FjNiIsInN1YiI6IjY2NTFmMmMzNTZkMWNiM2RkN2MxMmU0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rcJNoqYoXyPDewHHJ7dt87b8En1fEohm6dHQvQkzzgE",
    },
  });
  console.log(response.data);
  return response.data;
};
