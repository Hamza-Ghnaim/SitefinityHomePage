// // const SearchField = document.getElementById('search-field');
// const SearchField = document.querySelector('.Mobilesearch-input');
// var MenuList = document.getElementById('menu-list');

// const McapabilitiesLink = document.getElementById("capabilities-link");
// const capabilitiesArrow = document.getElementById("capabilities-arrow");
// const capabilitiesList = document.getElementById("capabilities-list");

// McapabilitiesLink.addEventListener("click", () => {
//   McapabilitiesLink.classList.toggle("active");
//   capabilitiesArrow.classList.toggle("active");
//   capabilitiesList.classList.toggle("active");

//   if (capabilitiesList.classList.contains("active")) {
//     capabilitiesList.style.display = "flex";
//   } else {
//     capabilitiesList.style.display = "none";
//   }
// });

// document.getElementById('menu-toggle').addEventListener('click', function() {
//     if (!SearchField.classList.contains('show')) {
//     MenuList.classList.toggle('show'); // Toggle the 'show' class
        
//     }
//   });
// const SearchField = document.getElementById('search-field');
const SearchField = document.querySelector('.Mobilesearch-input');
var MenuList = document.getElementById('menu-list');
var MenuToggle = document.getElementById('menu-toggle');

const McapabilitiesLink = document.getElementById("capabilities-link");
const capabilitiesArrow = document.getElementById("capabilities-arrow");
const capabilitiesList = document.getElementById("capabilities-list");

McapabilitiesLink.addEventListener("click", () => {
  McapabilitiesLink.classList.toggle("active");
  capabilitiesArrow.classList.toggle("active");
  capabilitiesList.classList.toggle("active");

  if (capabilitiesList.classList.contains("active")) {
    capabilitiesList.style.display = "flex";
  } else {
    capabilitiesList.style.display = "none";
  }
});

MenuToggle.addEventListener('click', function() {
  if (!SearchField.classList.contains('show')) {
    MenuList.classList.toggle('show'); // Toggle the 'show' class
        
    // Change the img src based on the toggle state
    if (MenuToggle.getAttribute('src') === "./imgs/image.png") {
      MenuToggle.setAttribute('src', "./imgs/Group 254.svg");
    } else {
      MenuToggle.setAttribute('src', "./imgs/image.png");
    }
  }
});
