import { card } from './card';

export const content = (movies) => {
  try {
    const { trendingMovies } = movies;

    const contentHtmlString = `  
        <div class="content">
           <div class="cards">
            ${card(trendingMovies)}
           </div>
        </div>
      `;

    return contentHtmlString;
  } catch (error) {
    console.log(error);
  }
};
