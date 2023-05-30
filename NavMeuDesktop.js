// const capabilitiesLink = document.querySelector('.capabilities-link');
// const capabilitiesMenu = document.querySelector('.capabilities-menu');

// capabilitiesLink.addEventListener('click', (event) => {
//   event.preventDefault(); // Prevent the link from redirecting

//   if (capabilitiesMenu.style.display === 'block') {
//     capabilitiesMenu.style.display = 'none'; // Hide the capabilities menu if it's already visible
//   } else {
//     capabilitiesMenu.style.display = 'block'; // Show the capabilities menu if it's hidden
//   }
// });

const capabilitiesLink = document.querySelector('.capabilities-link');
const capabilitiesMenu = document.querySelector('.capabilities-menu');

function updateMenuVisibility() {
  if (window.innerWidth < 768) {
    capabilitiesMenu.style.display = 'none';
  } else {
    capabilitiesMenu.style.display = 'block';
  }
}

capabilitiesLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the link from redirecting

  if (capabilitiesMenu.style.display === 'block') {
    capabilitiesMenu.style.display = 'none'; // Hide the capabilities menu if it's already visible
  } else {
    capabilitiesMenu.style.display = 'block'; // Show the capabilities menu if it's hidden
  }
});

window.addEventListener('resize', updateMenuVisibility); // Add event listener for resize

updateMenuVisibility(); // Call the function initially to set the initial menu visibility based on screen width
