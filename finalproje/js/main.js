var i = 0;
var images = [
  { src: './img/german.jpg', link: 'https://www.example.com/page1' },
  { src: './img/english.jpg', link: 'https://www.example.com/page2' }
];

var duration = 2000;

function slideimg() {
  var sliderImage = document.getElementById('sliderImage');
  sliderImage.src = images[i].src;

  
  if (images[i].link) { // Bağlantıya yönlerdirilen kısım.
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
