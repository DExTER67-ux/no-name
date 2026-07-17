const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
});