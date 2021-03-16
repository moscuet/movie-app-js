export const card = (movies) => {
  let cardsHtmlString = '';
  movies.forEach(({ title, image, rating, releaseDate, genresString }) => {
    cardsHtmlString += `        
            <div class="card">
                <div class="card__img__container">
                    <img class="card__img" src=${image} alt="${title} poster" />
                </div>
                <div class="card__footer">
                    <div class="movie__title">${title}</div>
                    <div class="movie__rating">${rating}</div>                   
                    <div class="movie__genres">${genresString}</div>
                    <div class="movie__date">${releaseDate}</div>
                </div>
            </div>       
        `;
  });

  return cardsHtmlString;
};
