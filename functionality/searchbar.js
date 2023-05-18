// const searchIcon = document.getElementById('search-icon');
// const searchInput = document.getElementById('search-input');

// searchIcon.addEventListener('click', function () {
//   const inputVisibility = window.getComputedStyle(searchInput).getPropertyValue('visibility');
//   searchInput.style.visibility = inputVisibility === 'hidden' ? 'visible' : 'hidden';
// });

// window.addEventListener('click', function (event) {
//   const clickedElement = event.target;
//   if (clickedElement !== searchIcon && clickedElement !== searchInput) {
//     searchInput.style.visibility = 'hidden';
//   }
// });


const searchIcon = document.getElementById('search-icon');
const searchInput = document.getElementById('search-input');

searchIcon.addEventListener('click', function () {
  const inputVisibility = window.getComputedStyle(searchInput).getPropertyValue('visibility');
  searchInput.style.visibility = inputVisibility === 'hidden' ? 'visible' : 'hidden';
  searchInput.classList.toggle('visible');
});

window.addEventListener('click', function (event) {
  const clickedElement = event.target;
  if (clickedElement !== searchIcon && clickedElement !== searchInput) {
    searchInput.style.visibility = 'hidden';
    searchInput.classList.remove('visible');
  }
});
