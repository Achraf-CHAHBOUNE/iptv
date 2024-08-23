// script.js

// Get the button
const backToTopButton = document.getElementById('back-to-top');

// Listen for scroll events
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Show the button after scrolling down 100px
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
}

// Scroll to the top of the page when the button is clicked
backToTopButton.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
