const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

menu.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  if (nav.style.display === 'flex') {
    nav.style.position = 'absolute';
    nav.style.top = '70px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = '#fff';
    nav.style.padding = '20px 6%';
    nav.style.flexDirection = 'column';
    nav.style.borderBottom = '1px solid #e5e8f0';
  } else {
    nav.removeAttribute('style');
  }
});
