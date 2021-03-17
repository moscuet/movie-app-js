export const onContentClick = (navItem, movieSectionIndex) => {
  //remove class active from all nav Items
  const contentNavItems = document.querySelectorAll('.content__navbar__item');
  contentNavItems.forEach((item) => item.classList.remove('active'));
  //add class active to the current nav item
  navItem.classList.add('active');

  //remove class active from all movie sections
  const movieSections = document.querySelectorAll('.section--movies');
  movieSections.forEach((movieSection) =>
    movieSection.classList.remove('active')
  );
  //add class active to the current movie section
  movieSections[movieSectionIndex].classList.add('active');
};
