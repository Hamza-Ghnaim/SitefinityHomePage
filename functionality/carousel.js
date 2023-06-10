function updateActiveOption() {
  const activeIndex = Math.floor((carouselSlider.scrollTop + carouselSlider.offsetHeight / 2) / carouselSlider.scrollHeight * options.length);

  if (activeIndex >= 0 && activeIndex < options.length) {
    const activeText = `${optionStrings[activeIndex]}`;


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
const optionStrings = [
  "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"
];

carouselSlider.addEventListener('scroll', updateActiveOption);
updateActiveOption();
