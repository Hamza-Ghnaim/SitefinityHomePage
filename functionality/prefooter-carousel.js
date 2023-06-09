const slider = document.querySelector('.slider');
const buttons = slider.querySelectorAll('.btn');
let activeIndex = 0;
let prefooter_isPaused = false;
let intervalId;

// Define the data for each button
const buttonData = [
  {
    paragraph: "Ut nisi nulla, vulputate quis feugiat sed, semper non massa. Sed tincidunt viverra bibendum. In lacus leo, laoreet et purus a, dapibus feugiat ex. Praesent scelerisque nulla efficitur nunc laoreet, et laoreet sem posuere. Sed posuere velit id justo tristique, non facilisis neque tincidunt.",
    imageSrc: "../imgs/logo-intuit.png",
    fname: "FIRST NAME LAST NAME",
    title: "Title",
    buttonText: "MAKE THE CALL"
  },
  {
    paragraph: "Ut nisi nulla, vulputate quis feugiat sed",
    imageSrc: "../imgs/logo-intuit.png",
    fname: "First Name 2",
    title: "Title 2",
    buttonText: "MAKE THE CALL 2"
  },
  {
    paragraph: "semper non massa. Sed tincidunt viverra bibendum. In lacus leo",
    imageSrc: "../imgs/logo-intuit.png",
    fname: "First Name 3",
    title: "Title 3",
    buttonText: "MAKE THE CALL 3"
  },
  {
    paragraph: "laoreet et purus a, dapibus feugiat ex. Praesent scelerisque nulla efficitur nunc laoreet, et laoreet sem posuere. Sed posuere velit id justo tristique, non facilisis neque tincidunt.",
    imageSrc: "../imgs/logo-intuit.png",
    fname: "First Name 4",
    title: "Title 4",
    buttonText: "MAKE THE CALL 4"
  }
  // Add more objects for additional buttons
];

// Add click event listeners to the buttons
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    setActiveButton(index);
    updateSliderContent(index);
    prefooter_isPaused = true;
    setTimeout(() => {
      prefooter_isPaused = false;
      startSlider(); // Resume automatic scrolling
    }, 2000);
  });
});

// Function to set the active button
function setActiveButton(index) {
  buttons.forEach((button, buttonIndex) => {
    if (buttonIndex === index) {
      button.classList.add('active');
      button.querySelector('p').classList.remove('invisible');
    } else {
      button.classList.remove('active');
      button.querySelector('p').classList.add('invisible');
    }
  });
}

// Function to update the slider content
function updateSliderContent(index) {
  const activeButtonData = buttonData[index];

  // Update the text inside the leftpre-button
  const leftPreButton = document.querySelector('.leftpre-button');
  const btnText = activeButtonData.buttonText;
  leftPreButton.textContent = btnText;

  // Update comma-text content
  const commaText = document.querySelector('.comma-text');
  const newText = activeButtonData.paragraph;
  commaText.querySelector('p').textContent = newText;

  // Update slider-logo image
  const sliderLogo = document.querySelector('.slider-logo img');
  const newLogoSrc = activeButtonData.imageSrc;
  sliderLogo.src = newLogoSrc;

  // Update slider-fname and slider-title text
  const sliderFname = document.querySelector('.slider-fname');
  const sliderTitle = document.querySelector('.slider-title');
  const newFname = activeButtonData.fname;
  const newTitle = activeButtonData.title;
  sliderFname.textContent = newFname;
  sliderTitle.textContent = newTitle;

  // Scroll to the active button
  const buttonOffset = buttons[index].offsetLeft;
  slider.scrollTo({
    left: buttonOffset,
    behavior: 'smooth'
  });
}

// Automatic sliding functionality
function startSlider() {
  intervalId = setInterval(nextSlider, 2000);
}

function stopSlider() {
  clearInterval(intervalId);
}

function nextSlider() {
  if (!prefooter_isPaused) {
    activeIndex = (activeIndex + 1) % buttons.length;
    setActiveButton(activeIndex);
    updateSliderContent(activeIndex);
  }
}

// Start the slider initially
startSlider();

// Pause the slider when the mouse is over the slider container
slider.addEventListener('mouseenter', stopSlider);

// Resume the slider when the mouse leaves the slider container
slider.addEventListener('mouseleave', startSlider);
