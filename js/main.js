
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.querySelector('.hamburger');

    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function aosInit() {
    AOS.init({
        duration: 900,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
window.addEventListener('load', aosInit);

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        document.querySelector('.nav').classList.add('sticky');
    } else {
        document.querySelector('.nav').classList.remove('sticky');
    }
});
