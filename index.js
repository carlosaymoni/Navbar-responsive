let button = document.querySelector('.button');
let nav    = document.querySelector('.ul-nav');

button.addEventListener('click',() => {
  nav.classList.toggle('responsive')
})