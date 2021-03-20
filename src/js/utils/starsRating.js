export const starsRating = (rating) => {
  rating = rating / 2;
  const ratingStars = `
    <i class="fas ${fullStarOrHalfStar(rating, 1)} ${
    rating >= 1 ? 'active' : ''
  }"></i>
    <i class="fas ${fullStarOrHalfStar(rating, 2)} ${
    rating >= 2 ? 'active' : ''
  }"></i>
    <i class="fas ${fullStarOrHalfStar(rating, 3)} ${
    rating >= 3 ? 'active' : ''
  }"></i>
    <i class="fas ${fullStarOrHalfStar(rating, 4)} ${
    rating >= 4 ? 'active' : ''
  }"></i>
    <i class="fas ${fullStarOrHalfStar(rating, 5)} ${
    rating >= 5 ? 'active' : ''
  }"></i>
    `;
  return ratingStars;
};

const fullStarOrHalfStar = (rating, number) => {
  const fullStar = 'fa-star';
  const halfStar = 'fa-star-half-alt';
  if (rating >= number) {
    return fullStar;
  } else if (rating >= number - 0.5) {
    return halfStar;
  } else {
    return fullStar;
  }
};
