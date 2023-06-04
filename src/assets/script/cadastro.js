//menu de vagegação

const menuOpener = document.querySelector('.menu_opener');
const nav = document.querySelector('nav');

menuOpener.addEventListener('click', () => {
  if (nav.style.display === 'none' || nav.style.display === '') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
});