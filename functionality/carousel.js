function updateActiveOption() {
  const activeIndex = Math.floor((carouselSlider.scrollTop + carouselSlider.offsetHeight / 2) / carouselSlider.scrollHeight * options.length);

  if (activeIndex >= 0 && activeIndex < options.length) {
    const optionNumber = activeIndex + 1;
    const loremIpsumContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
    const activeText = `Option ${optionNumber} - ${loremIpsumContent}`;


    options.forEach(option => {
      option.style.color = '';
    });

    options[activeIndex].style.color = '#DA6123';

    // Update the text in the right text area (#textDiv)
    const textDiv = document.getElementById('textDiv');
    textDiv.textContent = activeText;
  }
}

const carouselSlider = document.querySelector('.carousel-slider');
const options = Array.from(document.querySelectorAll('.carousel-options p'));

carouselSlider.addEventListener('scroll', updateActiveOption);
updateActiveOption();
