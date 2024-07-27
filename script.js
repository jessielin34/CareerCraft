document.addEventListener('DOMContentLoaded', () => {
    // Get the buttons by their IDs
    const aboutButton = document.getElementById('about-button');
    const startButton = document.getElementById('start-button');
    
    // Add a click event listener to the "About Us" button
    aboutButton.addEventListener('click', () => {
        // Redirect to the "about.html" page
        window.location.href = 'about.html';
    });

    // Add a click event listener to the "Click Here To Start!" button
    startButton.addEventListener('click', () => {
        // Redirect to the "start.html" page or another relevant page
        window.location.href = 'home.html'
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const goBackButton = document.getElementById('go-back-button');
    
    goBackButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = 'index.html'; // Redirect to the home page
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Get the back button element
    var backButton = document.getElementById('backButton');

    // Add an event listener to handle the click event
    backButton.addEventListener('click', function() {
        // Navigate back to the previous page
        window.history.back();
    });
});
