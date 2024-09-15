import { starsRating } from '../utils/starsRating';
import {addToWishList} from './addToWishList'

export const card = (movies) => {
  let cardsHtmlString = '';
  movies.forEach(({ title, image, rating, releaseDate, genresString }) => {
   
    /*removing movies with titles which included " ' " to avaid rendering issues*/ 
    if(title.indexOf("'")>0)  return
   
    /* checking if movie is included in wishlist*/ 
    let wishList = JSON.parse(localStorage.getItem("wishList")) || []
    let titles = wishList.map ( wish => wish.title)
    let wishChoice = titles.includes(title)? true:false
     
    cardsHtmlString += `          
            <div class="movie">
            ${addToWishList({title, image, rating, releaseDate, genresString, wishChoice})}
                <div class="movie__img__container">
                    <img class="movie__img" src=${image} alt="${title} poster" />
                </div>
                <div class="movie__footer">
                    <div class="movie__title">${title}</div>                    
                    <div class="movie__rating__stars">
                        ${starsRating(rating)}
                    </div>                 
                    <div class="movie__genres">${genresString}</div>
                    <div class="movie__date">${releaseDate}</div>
                </div>
            </div>       
        `;
  });

  return cardsHtmlString;
};
