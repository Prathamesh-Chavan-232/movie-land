const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=c5ce073d47c22d509f93a1ea6c0570c3";
const API_IMG = "https://image.tmdb.org/t/p/";
export const apilinks = {
  baseurl: API_URL,
  key: API_KEY,
  movieDesc: `${API_URL}movie/`,
  popularMovies: `${API_URL}movie/popular${API_KEY}`,
  topRatedMovies: `${API_URL}movie/top_rated${API_KEY}`,
  upcomingMovies: `${API_URL}movie/upcoming${API_KEY}`,
  posterImgOriginal: `${API_IMG}original`,
  posterImgw500: `${API_IMG}w500`,
};

// https://api.themoviedb.org/3/movie/550?api_key=c5ce073d47c22d509f93a1ea6c0570c3
