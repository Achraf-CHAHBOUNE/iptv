// Get the buttons
const backToTopButton = document.getElementById("back-to-top");
const whatsappButton = document.getElementById("whatsapp-btn");
const telegramButton = document.getElementById("telegram-btn");

// Listen for scroll events
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // Check if the scroll position is greater than 100 pixels
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    // Show the back-to-top button and adjust the position of WhatsApp and Telegram buttons
    backToTopButton.classList.add("show");
    whatsappButton.style.bottom = "110px"; // Position above Back to Top button
    telegramButton.style.bottom = "180px"; // Position above WhatsApp button
  } else {
    // Hide the back-to-top button and move WhatsApp and Telegram buttons down
    backToTopButton.classList.remove("show");
    whatsappButton.style.bottom = "40px"; // Take Back to Top button's place
    telegramButton.style.bottom = "110px"; // Positioned above WhatsApp button
  }
}

// Scroll to the top of the page when the button is clicked
backToTopButton.addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Play notification sound and show notifications
function playNotificationSound() {
  // Show notification after the sound plays
  setTimeout(function () {
    // Add "active" class to display the badge
    const msgSound = document.getElementById("msg-sound");
    const whatsappIcon = document.querySelector(
      "#whatsapp-btn .icon-container"
    );
    const telegramIcon = document.querySelector(
      "#telegram-btn .icon-container"
    );

    if (msgSound) {
      msgSound.play().catch((error) => {
        console.error("Error playing sound:", error);
      });
    } else {
      console.error("Audio element not found");
    }

    if (whatsappIcon) {
      whatsappIcon.classList.add("active");
    }
    if (telegramIcon) {
      telegramIcon.classList.add("active");
    }
  }, 2000); 
}

// Attach an event listener for user interaction to play sound
window.onload = function () {
  // Delay the sound playback until the user interacts
  document.body.addEventListener(
    "click",
    function () {
      playNotificationSound();
      // Remove the event listener to prevent multiple calls
      document.body.removeEventListener("click", arguments.callee);
    },
    { once: true }
  ); // Ensure it only runs once
};
