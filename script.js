// scripts.js

window.addEventListener('resize', function() {
    document.querySelectorAll('.section').forEach(section => {
        section.style.height = `${window.innerHeight - document.querySelector('.header').offsetHeight}px`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.section').forEach(section => {
        section.style.height = `${window.innerHeight - document.querySelector('.header').offsetHeight}px`;
    });
});
