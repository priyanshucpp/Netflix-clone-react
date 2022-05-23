const key = "c137f138447091b523cad9bd5682203c";

const requests = {
  //   requestPopular: `https://api.themoviedb.org/3/movie/550?api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  //   requestPopular: `https://api.themoviedb.org/3/movie/550?api_key=${key}`,
  requestRecommendation: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
};

export default requests;
