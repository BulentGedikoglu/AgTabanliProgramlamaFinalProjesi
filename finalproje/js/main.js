
var i = 0;
var images = [
  { src: './img/german.jpg', link: 'almanca.html' },
  { src: './img/english.jpg', link: 'ingilizce.html' }
];

var duration = 2000;

function slideimg() {
  var sliderImage = document.getElementById('sliderImage');
  sliderImage.src = images[i].src;

  
  if (images[i].link) { // Bağlantıya yönlendirilen kısım.
    sliderImage.parentNode.href = images[i].link;
  }

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(slideimg, duration);
}

window.onload = slideimg;
