// Get the buttons
const backToTopButton = document.getElementById('back-to-top');
const whatsappButton = document.getElementById('whatsapp-btn');
const telegramButton = document.getElementById('telegram-btn');

// Listen for scroll events
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Check if the scroll position is greater than 100 pixels
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // Show the back-to-top button and adjust the position of WhatsApp and Telegram buttons
        backToTopButton.classList.add('show');
        whatsappButton.style.bottom = '110px'; // Position above Back to Top button
        telegramButton.style.bottom = '180px'; // Position above WhatsApp button
    } else {
        // Hide the back-to-top button and move WhatsApp and Telegram buttons down
        backToTopButton.classList.remove('show');
        whatsappButton.style.bottom = '40px'; // Take Back to Top button's place
        telegramButton.style.bottom = '110px'; // Positioned above WhatsApp button
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

// Show notifications for WhatsApp and Telegram buttons (optional)
window.onload = function() {
    // Show notification for WhatsApp and Telegram buttons
    setTimeout(function() {
        // Add "active" class to display the badge
        const whatsappIcon = document.querySelector('#whatsapp-btn .icon-container');
        const telegramIcon = document.querySelector('#telegram-btn .icon-container');
        if (whatsappIcon) {
            whatsappIcon.classList.add('active');
        }
        if (telegramIcon) {
            telegramIcon.classList.add('active');
        }
    }, 2000); // Delay of 2 seconds (or adjust as needed)
};
