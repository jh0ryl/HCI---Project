// Background Music
const backgroundAudio = new Audio("Updated Picture/Assets/main_menu_music.mp3");
// backgroundAudio.volume = 0; // Initial volume
backgroundAudio.volume = 0.1; // Initial volume
backgroundAudio.loop = true;
backgroundAudio.autoplay = true;

// Volume control for background music
let volumeControl = document.getElementById('volume');
volumeControl.addEventListener("change", function (e) {
    backgroundAudio.volume = e.currentTarget.value / 1000; // Adjust volume based on slider
});

// Button Hover Sound
const buttons = document.querySelectorAll('.trash-dash-buttons-container button');

// Add event listener to play sound when the button is hovered
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        const hoverAudio = new Audio('Sound Effects/buttonhover3.mp3'); // Create a new audio object for the hover sound
        hoverAudio.volume = 0.3; 
        hoverAudio.play();
    });
});