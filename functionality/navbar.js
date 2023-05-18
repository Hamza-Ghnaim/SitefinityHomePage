window.addEventListener('scroll', function() {
    var scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    var orangeWidth = Math.min((scrollPercentage * 100) , 100);
    var color = 'linear-gradient(to right, #DA6123 5%, #DA6123 ' + orangeWidth + '%, #EAEAEA ' + orangeWidth + '%)';
    document.querySelector('.navbar-slider').style.background = color;
  });
  
  // Set initial color with slight orange on the left
  var initialColor = 'linear-gradient(to right, #DA6123 5%, #EAEAEA 5%, #EAEAEA)';
  document.querySelector('.navbar-slider').style.background = initialColor;
  