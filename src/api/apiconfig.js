const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=c5ce073d47c22d509f93a1ea6c0570c3";
export const apilinks = {
  popularMovies: `${API_URL}movie/popular${API_KEY}`,
  topRatedMovies: `${API_URL}movie/top_rated${API_KEY}`,
  upcomingMovies: `${API_URL}movie/upcoming${API_KEY}`,
};
// https://api.themoviedb.org/3/movie/550?api_key=c5ce073d47c22d509f93a1ea6c0570c3
