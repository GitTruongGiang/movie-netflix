export const API_KEY = `fe596ed106bd53f85c6dd5b61bf8279d`;
export const IMG_API = `https://image.tmdb.org/t/p/w1280`;
const requets = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetFlixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaires: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requets;
