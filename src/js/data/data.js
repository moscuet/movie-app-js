export const fetchTrendingMovies = async () => {
  const apiKey = 'd62e25cc965456f2bfb986baf6380cbf';
  const url = `https://api.themoviedb.org/3/`;
  const queryStr1 = 'discover/movie?api_key=';
  const queryStr2 = '&language=en-US&sort_by=popularity.desc';
  const imagePath = 'https://image.tmdb.org/t/p/w500/';
  const urlFinal = `${url}${queryStr1}${apiKey}${queryStr2}`;

  const response = await fetch(urlFinal);
  try {
    const { results } = await response.json();

    const trendingMovies = results.map(
      ({ id, title, poster_path, vote_average, release_date, vote_count }) => ({
        id,
        title,
        image: `${imagePath}${poster_path}`,
        rating: vote_average,
        voteCount: vote_count,
        releaseDate: release_date,
      })
    );

    return trendingMovies;
  } catch (error) {
    console.log(error);
  }
};
