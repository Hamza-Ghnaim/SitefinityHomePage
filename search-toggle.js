const searchToggle = document.getElementById('search-toggle');
const searchField = document.getElementById('search-field');
const menuList = document.querySelector('.menu-list');

searchToggle.addEventListener('click', () => {
  if (!menuList.classList.contains('show')) {
    searchField.classList.toggle('show');
  }
});