import { head } from 'lodash';

export const onSearchIconClick = (searchIcon) => {
  const headerSearchInput = searchIcon.parentElement.querySelector(
    '.header__search--input'
  );
  headerSearchInput.classList.toggle('active');
};
