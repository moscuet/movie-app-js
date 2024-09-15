import {favIcon} from '../utils/favIcon'
  export const addToWishList = ({title, image, rating, releaseDate, genresString,wishChoice}) => {
   
    const changeWishClass = (event) => {
      let isClassexist = false

       event.target.classList.forEach( cl => {
         if(cl ==='active-wish') isClassexist = true
          
         if(cl ==='active-wish') isClassexist = true
        })   
        if(isClassexist){
           event.target.classList.remove('active-wish')
        }
        else {
           event.target.classList.add('active-wish')
        }
  }
    window.changeWishClass  = changeWishClass ;
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
        <div class = 'wish-list'  onclick= "changeWishClass(event), onClick('${title}', '${image}', '${rating}', '${releaseDate}', '${genresString}')"   > ${favIcon(wishChoice)}  </div>
        `;
  return wishlistHtmlString;
};
