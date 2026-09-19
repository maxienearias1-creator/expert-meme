// Select elements from the DOM
const button = document.getElementById('btn');
const message = document.getElementById('message');

// Add a click event listener
button.addEventListener('click', () => {
    message.textContent = "You clicked the button! JavaScript is working.";
    message.style.color = "#007bff";
});