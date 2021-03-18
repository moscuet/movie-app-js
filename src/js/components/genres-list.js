export const genresDropdownList = (genres) => {
  console.log(genres);
  const htmlString = `
        <label for="movie-genres">Genres <i class="fas fa-chevron-down"></i></label>
        <select class="genres__list--dropdown" name="movie genres" id="movie-genres">
            <option value=""></option>
        </select>    
    `;
  return htmlString;
};
