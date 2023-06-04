window.onload = function() {
  var mobileSearchIcon = document.getElementById("Mobilesearch-icon");
  var mobileSearchInputContainer = document.querySelector(".MobilesearchInput-container");
  
  mobileSearchInputContainer.style.display = "none"; // Set initial state to hidden
  
  mobileSearchIcon.addEventListener("click", function() {
    if (mobileSearchInputContainer.style.display === "none") {
      mobileSearchInputContainer.style.display = "flex";
    } else {
      mobileSearchInputContainer.style.display = "none";
    }
  });
  var searchIcon = document.getElementById("search-icon");
  var searchInputContainer = document.getElementsByClassName("searchInput-container")[0];
  
  searchInputContainer.style.display = "none"; // Set initial state to hidden
  
  searchIcon.addEventListener("click", function() {
    if (searchInputContainer.style.display === "none") {
      searchInputContainer.style.display = "flex";
    } else {
      searchInputContainer.style.display = "none";
    }
  });
};
