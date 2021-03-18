export const scrollFunction = (headerNav) => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    headerNav.classList.add('bg');
    document.querySelector('.signUp').style.backgroundColor = '#000';
    document.querySelector('.signUp').style.color = '#fff';
    document.getElementById('header__search--input').style.background = 'none';
  } else {
    headerNav.classList.remove('bg');
    document.querySelector('.signUp').style.backgroundColor = '#ffe018';
    document.querySelector('.signUp').style.color = '#000';
    document.getElementById('header__search--input').style.background = 'rgba(0, 0, 0, 0.3)';
  }
};
