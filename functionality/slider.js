document.addEventListener("DOMContentLoaded", function() {
  var carousels = document.querySelectorAll(".carousel");

  carousels.forEach(function(carousel) {
    var carouselInner = carousel.querySelector(".carousel-inner");
    var items = carouselInner.querySelectorAll(".item");
    var activeIndex = 0;

    if (items.length <= 1) {
      var carouselControls = carousel.querySelectorAll(".carousel-control");
      carouselControls.forEach(function(control) {
        control.remove();
      });

      var carouselIndicators = carousel.querySelector(".carousel-indicators");
      carouselIndicators.remove();
    }

    items.forEach(function(item, i) {
      var carouselIndicators = carousel.querySelector(".carousel-indicators");
      var indicator = document.createElement("li");
      indicator.setAttribute("data-target", "#" + carousel.getAttribute("id"));
      indicator.setAttribute("data-slide-to", i);

      if (i === 0) {
        indicator.classList.add("active");
      }

      carouselIndicators.appendChild(indicator);

      var imgSrc = item.querySelector("img").getAttribute("src");
      if (imgSrc) {
        item.style.background = "url(" + imgSrc + ")";
      }
    });

    var firstItem = carouselInner.querySelector(".item");
    firstItem.classList.add("active");

    function switchCarouselItem() {
      // Remove the active class from the current item
      items[activeIndex].classList.remove("active");

      // Increment the active index
      activeIndex++;

      // Check if the active index exceeds the number of items
      if (activeIndex === items.length) {
        activeIndex = 0; // Reset to the first item
      }

      // Add the active class to the next item
      items[activeIndex].classList.add("active");

      // Update the active indicator
      var indicators = carousel.querySelectorAll(".carousel-indicators li");
      indicators.forEach(function(indicator, i) {
        if (i === activeIndex) {
          indicator.classList.add("active");
        } else {
          indicator.classList.remove("active");
        }
      });
    }

    // Set the interval to switch carousel items every 2 seconds
    setInterval(switchCarouselItem, 2000);
  });
});
