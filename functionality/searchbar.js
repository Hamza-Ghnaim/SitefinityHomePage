// const searchIcon = document.getElementById('search-icon');
// const searchInput = document.getElementById('search-input');

// searchIcon.addEventListener('click', function () {
//   const inputVisibility = window.getComputedStyle(searchInput).getPropertyValue('visibility');
//   searchInput.style.visibility = inputVisibility === 'hidden' ? 'visible' : 'hidden';
//   searchInput.classList.toggle('visible');
// });

// window.addEventListener('click', function (event) {
//   const clickedElement = event.target;
//   if (clickedElement !== searchIcon && clickedElement !== searchInput) {
//     searchInput.style.visibility = 'hidden';
//     searchInput.classList.remove('visible');
//   }
// });

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
