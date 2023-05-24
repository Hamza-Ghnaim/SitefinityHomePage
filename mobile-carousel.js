const slider = document.querySelector('.mobile-slider');
const buttons = slider.querySelectorAll('.mobile-btn');
let activeIndex = 0;

// Define the data for each button
const buttonData = [
  {
    paragraph: "Ut nisi nulla, vulputate quis feugiat sed, semper non massa. Sed tincidunt viverra bibendum. In lacus leo, laoreet et purus a, dapibus feugiat ex. Praesent scelerisque nulla efficitur nunc laoreet, et laoreet sem posuere. Sed posuere velit id justo tristique, non facilisis neque tincidunt.",
    imageSrc: "logo-intuit.png",
    fname: "FIRST NAME LAST NAME",
    title: "Title",
    buttonText:"MAKE THE CALL"
  },
  {
    paragraph: "Ut nisi nulla, vulputate quis feugiat sed",
    imageSrc: "logo-intuit.png",
    fname: "First Name 2",
    title: "Title 2",
    buttonText:"MAKE THE CALL 2"
  },
  {
    paragraph: "semper non massa. Sed tincidunt viverra bibendum. In lacus leo",
    imageSrc: "logo-intuit.png",
    fname: "First Name 3",
    title: "Title 3",
    buttonText:"MAKE THE CALL 3"
  },
  {
    paragraph: "laoreet et purus a, dapibus feugiat ex. Praesent scelerisque nulla efficitur nunc laoreet, et laoreet sem posuere. Sed posuere velit id justo tristique, non facilisis neque tincidunt.",
    imageSrc: "logo-intuit.png",
    fname: "First Name 4",
    title: "Title 4",
    buttonText:"MAKE THE CALL 4"
  }
  // Add more objects for additional buttons
];

// Add click event listeners to the buttons
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    setActiveButton(index);
    updateSliderContent(index);
  });
});

// Set the initial active button
setActiveButton(activeIndex);
updateSliderContent(activeIndex);

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
  const leftpreButton = document.querySelector('.mobile-sliderbutton');
  const btnText = activeButtonData.buttonText;
  leftpreButton.textContent = btnText;

  // Update comma-text content
  const commaText = document.querySelector('.mobile-commatext');
  const newText = activeButtonData.paragraph;
  commaText.querySelector('p').textContent = newText;

  // Update slider-logo image
  const sliderLogo = document.querySelector('.mobile-sliderlogo img');
  const newLogoSrc = activeButtonData.imageSrc;
  sliderLogo.src = newLogoSrc;

  // Update slider-fname and slider-title text
  const sliderFname = document.querySelector('.mobile-sliderfname');
  const sliderTitle = document.querySelector('.mobile-slidertitle');
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

// Function to handle scroll event
function handleScroll(event) {
  const scrollLeft = event.target.scrollLeft;
  let closestButton = buttons[0];
  let minDistance = Math.abs(scrollLeft - closestButton.offsetLeft);

  buttons.forEach((button) => {
    const distance = Math.abs(scrollLeft - button.offsetLeft);
    if (distance < minDistance) {
      minDistance = distance;
      closestButton = button;
    }
  });

  const activeIndex = Array.from(buttons).indexOf(closestButton);
  setActiveButton(activeIndex);
  updateSliderContent(activeIndex);
}

// Add scroll event listener to the slider container
slider.addEventListener('scroll', handleScroll);
