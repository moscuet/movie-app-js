import { starsRating } from '../utils/starsRating';
import {addToWishList} from './addToWishList'

export const card = (movies) => {
  let cardsHtmlString = '';
  movies.forEach(({ title, image, rating, releaseDate, genresString },i) => {
 
    if(title.indexOf("'")>0) {
        console.log(movies[i])
        return
    }
    
    // const addWishClass = () =>{
    //     let wishList = JSON.parse(localStorage.getItem("wishList")) || []
    //     let titles = wishList.map ( wish => wish.title)
    //    if(!titles.includes(title)) {
    //       console.log('true', i)
    //      }
    //    else{
    //      console.log('false')
    //    }
    // }
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


