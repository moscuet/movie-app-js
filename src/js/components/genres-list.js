export const genresDropdownList = (genres) => {
  const genresArray = genres.map((genreObj) => genreObj.name);
  console.log(genresArray);

  const genresHtmlString = `
        <label for="movie-genres">Genres <i class="fas fa-chevron-down"></i></label>
        <select class="genres__list--dropdown" name="movie genres" id="movie-genres">
            ${getGenresName(genresArray)}
        </select>    
    `;
  return genresHtmlString;
};

const getGenresName = (genresArray) => {
  let genreOptions = '';
  genresArray.forEach((genreName) => {
    genreOptions += `
    <option value="${genreName}">${genreName}</option>
    `;
  });
  return genreOptions;
};
