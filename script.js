document.addEventListener("DOMContentLoaded", () => {
  // Get the buttons by their IDs
  const aboutButton = document.getElementById("about-button");
  const startButton = document.getElementById("start-button");
  const questButton = document.getElementById("start-quest");
  const mentorButton = document.getElementById("mentor");
  const starButton = document.getElementById("star-button");
  const mapButton = document.getElementById("mapbutton");

  // Add event listener for starButton if it exists
  if (starButton) {
    starButton.addEventListener("click", () => {
      window.location.href = "scroll.html"; 
    });
  }

  // Add event listener for mapButton if it exists
  if (mapButton) {
    mapButton.addEventListener("click", () => {
      window.location.href = "home.html"; 
    });
  }

  // Add event listener for questButton if it exists
  if (questButton) {
    questButton.addEventListener("click", () => {
      window.location.href = "map.html";
    });
  }

  // Add event listener for mentorButton if it exists
  if (mentorButton) {
    mentorButton.addEventListener("click", () => {
      window.location.href = "mentor.html";
    });
  }

  // Add event listener for aboutButton if it exists
  if (aboutButton) {
    aboutButton.addEventListener("click", () => {
      window.location.href = "about.html";
    });
  }

  // Add event listener for startButton if it exists
  if (startButton) {
    startButton.addEventListener("click", () => {
      window.location.href = "home.html";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const goBackButton = document.getElementById("go-back-button");

  goBackButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = "index.html"; // Redirect to the home page
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const goBackButton = document.getElementById("go-back-button");

  goBackButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = "index.html"; // Redirect to the home page
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the back button element
  var backButton = document.getElementById("backButton");

  // Add an event listener to handle the click event
  backButton.addEventListener("click", function () {
    // Navigate back to the previous page
    window.history.back();
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
  const leftStar = document.querySelector(".left-star");
  const backButton = document.querySelector(".home-icon");

  if (leftStar) {
    leftStar.addEventListener("click", () => {
      window.location.href = "achievements.html";
    });
  }

  if (backButton) {
    backButton.addEventListener("click", () => {
      window.location.href = "home.html";
    });
  }
});

document.getElementById("uploadBtn").addEventListener("click", function () {
  document.getElementById("fileInput").click();
});

document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
    }
  });
