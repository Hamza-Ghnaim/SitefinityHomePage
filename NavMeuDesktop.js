// const capabilitiesLink = document.querySelector('.capabilities-link');
// const capabilitiesMenu = document.querySelector('.capabilities-menu');
// let isMenuOpen = false;

// function updateMenuVisibility() {
//   if (window.innerWidth < 768 || !isMenuOpen) {
//     capabilitiesMenu.style.display = 'none';
//   } else {
//     capabilitiesMenu.style.display = 'block';
//   }
// }

// capabilitiesLink.addEventListener('click', (event) => {
//   event.preventDefault(); // Prevent the link from redirecting

//   if (capabilitiesMenu.style.display === 'block') {
//     capabilitiesMenu.style.display = 'none'; // Hide the capabilities menu if it's already visible
//     isMenuOpen = false;
//   } else {
//     capabilitiesMenu.style.display = 'block'; // Show the capabilities menu
//     isMenuOpen = true;
//   }
// });

// window.addEventListener('resize', updateMenuVisibility); // Add event listener for resize

// updateMenuVisibility(); // Call the function initially to set the initial menu visibility based on screen width
  
const capabilitiesLink = document.querySelector('.capabilities-link');
const capabilitiesMenu = document.querySelector('.capabilities-menu');
let isMenuOpen = false;

function updateMenuVisibility() {
  if (window.innerWidth < 768 || !isMenuOpen) {
    capabilitiesMenu.style.display = 'none';
  } else {
    capabilitiesMenu.style.display = 'block';
  }
}

capabilitiesLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the link from redirecting

  if (capabilitiesMenu.style.display === 'block') {
    capabilitiesMenu.style.display = 'none'; // Hide the capabilities menu if it's already visible
    isMenuOpen = false;
    capabilitiesLink.style.color = ''; // Reset the link color
  } else {
    capabilitiesMenu.style.display = 'block'; // Show the capabilities menu
    isMenuOpen = true;
    capabilitiesLink.style.color = '#DA6123'; // Set the link color to #DA6123
  }
});

window.addEventListener('resize', updateMenuVisibility); // Add event listener for resize

updateMenuVisibility(); // Call the function initially to set the initial menu visibility based on screen width
