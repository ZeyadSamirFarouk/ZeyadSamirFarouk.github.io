// script.js

// Smooth scrolling functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Navigation interactions
const navbar = document.querySelector('.navbar');
const sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

window.onscroll = () => { stickyNavbar(); };

// Portfolio animations
const portfolioItems = document.querySelectorAll('.portfolio-item');

document.addEventListener('scroll', () => {
    portfolioItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (itemPosition < screenPosition) {
            item.classList.add('fade-in');
        }
    });
});
