// const SearchField = document.getElementById('search-field');
const SearchField = document.querySelector('.Mobilesearch-input');
var MenuList = document.getElementById('menu-list');

document.getElementById('menu-toggle').addEventListener('click', function() {
    if (!SearchField.classList.contains('show')) {
    MenuList.classList.toggle('show'); // Toggle the 'show' class
        
    }
  });
  