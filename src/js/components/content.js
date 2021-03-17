import { card } from './card';

export const content = (movies) => {
  try {
    const { trendingMovies, topRatedMovies, arrivalMovies } = movies;

    const contentHtmlString = `  
        <div class="content">

            <nav class="navbar content__navbar">
              <div class="content__navbar__item active">Trending</div>
              <div class="content__navbar__item">Top Rated</div>
              <div class="content__navbar__item">New Arrivals</div>
            </nav>
            
            <section class="section--movies active section--trending-movies">
              <h2 class="heading heading--sub">Top Trending Movies</h2>
              <div class="movies__container">
                ${card(trendingMovies)}
              </div>
            </section>
            
            <section class="section--movies section--top-rated-movies">
              <h2 class="heading heading--sub">Top Rated Movies</h2>
              <div class="movies__container">
                ${card(topRatedMovies)}
              </div>
            </section>
            
            <section class="section--movies section--new-arrival-movies">
              <h2 class="heading heading--sub">Arrival Movies</h2>
              <div class="movies__container">
                ${card(arrivalMovies)}
              </div>
            </section>
        </div>
      `;

    return contentHtmlString;
  } catch (error) {
    console.log(error);
  }
};
