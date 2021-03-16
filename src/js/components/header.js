import { checkRating } from '../utils/checkRating';
export const header = ({
  title,
  image,
  rating,
  releaseDate,
  voteCount,
  genresString,
}) => {
  image = image.replace('w500', 'original');

  const headerHtmlString = `       
            <header class="header">
               <div class="header__logo">THEMOVIEBOX</div>
               <nav class="navbar header__navbar">
                    <ul class="navbar__nav">
                        <li class="navbar__item">
                           <input class="header__input form__input" id="header__search" />
                           <i class="fas fa-search"></i> 
                        </li>
                         <li class="navbar__item">
                            <a href="#" class="navbar__links button--ligth">LOG IN</a>
                        </li>
                         <li class="navbar__item">
                            <a href="#" class="navbar__links button--pink">SIGN UP</a>
                        </li>
                    </ul>
               </nav>
               <div class="header__movie--container">
                    <img src=${image} alt="${title} poster" class="header__movie__img" />
                    <div class="header__movie--content">
                        <div class="header__movie__title">${title}</div>
                        <div class="header__movie__genres">${genresString}</div>
                        <div class="header__movie__release-date">Released on ${releaseDate}</div>
                        <div class="header__movie-cta">
                            <button type="button" class="button--pink">Watch movie</button>
                            <button type="button" class="button--light">View Info</button>
                            <button type="button" class="button--light">+ Add to wishlist</button>
                        </div>
                        <div class="header__movie__rating--box">
                            <div><span>Rating</span> based on ${voteCount} reviews</div>
                            <div class="stars--box">
                               ${checkRating(rating)}
                            </div>
                            <div class="header__movie__rating">${rating}</div>
                        </div>
                    </div>
               </div>
            </header>       
    `;

  return headerHtmlString;
};
