import {favIcon} from '../utils/favIcon'
  export const addToWishList = ({title, image, rating, releaseDate, genresString}) => {
    const onClick = (title, image, rating, releaseDate, genresString) => {

       let newWish =  {title, image, rating, releaseDate, genresString}
       let wishList = JSON.parse(localStorage.getItem("wishList")) || []
       let titles = wishList.map ( wish => wish.title)

       if(!titles.includes(title)) {
          wishList.unshift(newWish)
         }
       else{
          let index = titles.indexOf(title)
          wishList.splice(index,1)
       }

       localStorage.setItem('wishList', JSON.stringify(wishList))
    }
    window.onClick = onClick;

   let wishlistHtmlString = `        
        <div class = 'wishlist' onclick= "onClick('${title}', '${image}', '${rating}', '${releaseDate}', '${genresString}')"> ${favIcon()} </div>
        `;
  return wishlistHtmlString;
};
