"use strict";

var slide = document.getElementById('slide-images');
var catBut = document.getElementById('cata');
var menu = document.getElementById('menu');
var menuPage = document.querySelector('.phoneMenu');
var inMenu = true;
menu.addEventListener('click', function () {
  menuPage.classList.toggle('menu');
});
catBut.addEventListener('click', function () {
  location.href = '../html/catalogue.html';
});

function getRandomNonRepeatingIntegers(min, max) {
  // Create an array of integers between min and max
  var integers = [];

  for (var i = min; i <= max; i++) {
    integers.push(i);
  } // Shuffle the array


  for (var _i = integers.length - 1; _i > 0; _i--) {
    var j = Math.floor(Math.random() * (_i + 1));
    var _ref = [integers[j], integers[_i]];
    integers[_i] = _ref[0];
    integers[j] = _ref[1];
  } // Return the first 3 elements of the shuffled array


  return integers.slice(0, 3);
} // Example usage:


var imgs_tab = getRandomNonRepeatingIntegers(1, 10);

function changing() {
  slide.innerHTML += "<div class=\"img-container\">\n    <a href=\"../html/details.html?recette=".concat(imgs_tab[0] - 1, "\"> <img src=\"../assets/recettes/").concat(imgs_tab[0], "/1.png\"></a>\n</div>\n<div class=\"img-container\">\n<a href=\"../html/details.html?recette=").concat(imgs_tab[1] - 1, "\"><img src=\"../assets/recettes/").concat(imgs_tab[1], "/1.png\"></a>\n</div>\n<div class=\"img-container\">\n<a href=\"../html/details.html?recette=").concat(imgs_tab[2] - 1, "\"> <img src=\"../assets/recettes/").concat(imgs_tab[2], "/1.png\"></a>\n</div>");
}

;
changing();