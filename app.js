// Function to generate a random hex color
function generateRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16); // Random color in hex
    return "#" + hex.padStart(6, '0'); // Ensure the hex code is 6 characters
}

// Get references to the DOM elements
const colorDisplay = document.getElementById('colorDisplay');
const colorCode = document.getElementById('colorCode');
const generateButton = document.getElementById('generateColor');

// Event listener for the button
generateButton.addEventListener('click', () => {
    const randomColor = generateRandomColor(); // Get a random color
    colorDisplay.style.backgroundColor = randomColor; // Set background color of the display
    colorCode.textContent = randomColor; // Show the hex color code
});