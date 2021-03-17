export const starsRating = (rating) => {
  rating = rating / 2;
  const ratingStars = `
    <i class="fas fa-star ${rating >= 1 ? 'active' : ''}"></i>
    <i class="fas fa-star ${rating >= 2 ? 'active' : ''}"></i>
    <i class="fas fa-star ${rating >= 3 ? 'active' : ''}"></i>
    <i class="fas fa-star ${rating >= 4 ? 'active' : ''}"></i>
    <i class="fas fa-star ${rating >= 5 ? 'active' : ''}"></i>
    `;
  return ratingStars;
};
