document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navbarMenu = document.querySelector('.navbar-menu');

  hamburger.addEventListener('click', function () {
      navbarMenu.classList.toggle('show');
      hamburger.classList.toggle('open');
  });
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 3 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var container = document.querySelector('.container');

// Define images, their corresponding text, and URLs
var images = [
  'https://shedrackolisa.github.io/tewa/image11.jpg',
  'https://shedrackolisa.github.io/tewa/image7.jpg',
  'https://blog.adobe.com/en/publish/2021/10/06/media_119f04ee63397f5cf611718dbed817cef69b42f58.jpg',
  'https://smallbiztrends.com/ezoimgfmt/media.smallbiztrends.com/2023/02/Photography-Equipment-You-Need-to-Start-a-Photo-Business-in-2023-5.png?ezimgfmt=rs:808x456/rscb12/ngcb12/notWebP',
  'https://shedrackolisa.github.io/tewa/image10.jpg',
  'https://www.kw-photography.co.uk/wp-content/uploads/2021/06/Is-baby-photography-worth-it-1536x1024.jpg',
  'https://shedrackolisa.github.io/tewa/image12.jpg',
  'https://shedrackolisa.github.io/tewa/image13.jpg',
  'https://shedrackolisa.github.io/tewa/image14.jpg'
];

var texts = ['WEDDING PHOTOGRAPHY', 'REAL ESTATE PHOTOGRAPHY', 'DRONE PHOTOGRAPHY', 'STUDIO PHOTOGRAPHY', 'FAMILY PHOTOGRAPHY', 'NEWBORN PHOTOGRAPHY', 'COMMERICIAL PHOTOGRAPHY', 'EVENTS PHOTOGRAPHY', 'KIDS PHOTOGRAPHY'];

var urls = [
  'https://ziphy.com.ng/',
  'https://example.com/2',
  'https://example.com/3',
  'https://example.com/4',
  'https://example.com/5',
  'https://example.com/6',
  'https://example.com/7',
  'https://example.com/8',
  'https://example.com/9'
];

// Load and display images with text and URLs
function loadImages() {
  images.forEach(function(image, index) {
    var canvas = document.createElement('canvas');
    canvas.width = 380; // Set canvas width
    canvas.height = 330; // Set canvas height
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.font = '25px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(texts[index], canvas.width / 2, canvas.height - 20);
    };
    img.src = image;
    var link = document.createElement('a');
    link.href = urls[index]; // Set the URL for each image
    link.appendChild(canvas);
    container.appendChild(link);
  });
}

// Display images
loadImages();
