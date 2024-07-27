document.addEventListener('DOMContentLoaded', function() {
    // Get the back button element
    var backButton = document.getElementById('backButton');

    // Add an event listener to handle the click event
    backButton.addEventListener('click', function() {
        // Navigate back to the previous page
        window.history.back();
    });
});