import { card } from './card';

export const content = (movies) => {
  try {
    const { trendingMovies, topRatedMovies, arrivalMovies } = movies;

    const contentHtmlString = `  
        <div class="content">
            <h2 class="heading heading--sub">Top Trending Movies</h2>
            <section class="cards section--trending-movies">
              ${card(trendingMovies)}
            </section>
            <h2 class="heading heading--sub">Top Rated Movies</h2>
            <section class="cards section--top-rated-movies">
              ${card(topRatedMovies)}
            </section>
            <h2 class="heading heading--sub">Arrival Movies</h2>
            <section class="cards section--arrival-movies">
              ${card(arrivalMovies)}
            </section>
        </div>
      `;

    return contentHtmlString;
  } catch (error) {
    console.log(error);
  }
};
