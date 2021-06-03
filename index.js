const burger = document.querySelector('.burger');
const navbar = document.querySelector('.nav-responsive');

burger.addEventListener('click', () =>{
 navbar.classList.toggle('active');
});