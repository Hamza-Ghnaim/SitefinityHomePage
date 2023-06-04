const bannerSlider = document.querySelector('.banner-slider');
const bannerButtons = document.querySelectorAll('.banner-button');
const organizationsPerform = document.querySelector('.Organizations-Perform');
const driveResult = document.querySelector('.Drive-result');
const teamsWorkBtn = document.querySelector('.TeamsWorkbtn');
const secondaryDiv = document.querySelector('.secondary');

let bannerActiveIndex = 0;
let isPaused = false;

function showBanner(index) {
  bannerButtons.forEach((button, i) => {
    if (i === index) {
      button.classList.add('active');
      button.textContent = i + 1;
      button.style.color = 'black';
    } else {
      button.classList.remove('active');
      button.textContent = '';
    }
  });

  // Change the content based on the active button
  if (index === 0) {
    organizationsPerform.textContent = " Organizations Perform When Teams Work.";
    driveResult.innerHTML = "Drive the results that matter by <b> unlocking the power of  your teams.</b>";
    teamsWorkBtn.textContent = "SCHEDULE A CALL";
    insertImage("./imgs/organization.png");
  } else if (index === 1) {
    organizationsPerform.textContent = "Different Organizations Perform";
    driveResult.innerHTML = "Different Drive the results that matter by <b>unlocking the power of your teams.</b>";
    teamsWorkBtn.textContent = "DIFFERENT SCHEDULE A CALL";
    insertImage("./imgs/allhands_mcchrystalgroup_june_photographybytrishalegresmith_2022-7193-edit.png");
  } else if (index === 2) {
    organizationsPerform.textContent = "Another Organizations Perform";
    driveResult.innerHTML = "Another Drive the results that matter by <b>unlocking the power of your teams.</b>";
    teamsWorkBtn.textContent = "ANOTHER SCHEDULE A CALL";
    insertImage("./imgs/organization.png");
  } else if (index === 3) {
    organizationsPerform.textContent = "Another Organizations Perform";
    driveResult.innerHTML = "Another Drive the results that matter by <b>unlocking the power of your teams.</b>";
    teamsWorkBtn.textContent = "ANOTHER SCHEDULE A CALL";
    insertImage("./imgs/allhands_mcchrystalgroup_june_photographybytrishalegresmith_2022-7193-edit.png");
  }
}

function insertImage(imageSrc) {
  // Remove existing image if present
  const existingImage = secondaryDiv.querySelector('img');
  if (existingImage) {
    existingImage.remove();
  }

  // Create new image element
  const newImage = document.createElement('img');
  newImage.src = imageSrc;
  newImage.alt = 'Second';

  // Insert the new image into the secondaryDiv
  secondaryDiv.appendChild(newImage);
}

function nextBanner() {
  if (isPaused) {
    isPaused = false;
    return;
  }

  bannerActiveIndex = (bannerActiveIndex + 1) % bannerButtons.length;
  showBanner(bannerActiveIndex);
}

// Set initial active banner
showBanner(bannerActiveIndex);

// Set interval to change banner every 2 seconds
setInterval(nextBanner, 2000);

// Add click event listeners to the banner buttons
bannerButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showBanner(index);
    isPaused = true;
    setTimeout(() => {
      isPaused = false;
      nextBanner();
    }, 2000);
  });
});

