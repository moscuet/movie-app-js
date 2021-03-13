import '../css/main.css';

window.addEventListener('load', async () => {
  const apiKey = 'd62e25cc965456f2bfb986baf6380cbf';
  const url = `https://api.themoviedb.org/3/`;
  const queryStr1 = 'discover/movie?api_key=';
  const queryStr2 = '&language=en-US&sort_by=popularity.desc';
  const imagePath = 'https://image.tmdb.org/t/p/w500/';

  const response = await fetch(`${url}${queryStr1}${apiKey}${queryStr2}`);
  const { results } = await response.json();
  const movies = results.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster_path,
  }));

  //render cards
  const root = document.querySelector('.root');
  movies.forEach(({ id, title, poster_path }) => {
    //create a card div
    const div = document.createElement('div');
    div.classList.add('card');
    //create card image element
    const img = document.createElement('img');
    img.classList.add('card__img');
    img.alt = `${title} poster`;
    img.src = `${imagePath}${poster_path}`;
    img.alt;

    div.appendChild(img);
    root.appendChild(div);
  });
});
