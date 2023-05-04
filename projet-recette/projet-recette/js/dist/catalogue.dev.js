"use strict";

var _recettesDB = require("../js/recettesDB.js");

var categories = document.getElementById('foods');
var input = document.querySelector('input');
var menu = document.getElementById('menu');
var menuPage = document.querySelector('.phoneMenu');
menu.addEventListener('click', function () {
  menuPage.classList.toggle('menu');
});

function set_recipes() {
  var _loop = function _loop(index) {
    var moyenne = 0;
    var i = 0;
    var comment = _recettesDB.recettesDB[index].comments;
    comment.forEach(function (ele) {
      i++;
      moyenne = moyenne + ele.rating;
    });
    moyenne = moyenne / i;
    categories.innerHTML += "  \n            <div class=\"recette\">\n            <img src=\"../assets/recettes/".concat(index + 1, "/2.png\" >\n            <div>\n            <h1>").concat(_recettesDB.recettesDB[index].name, "</h1>\n            <h2>Category : ").concat(_recettesDB.recettesDB[index].category, "</h2>\n            <h2>Origine : ").concat(_recettesDB.recettesDB[index].country, "</h2>\n            <h2>Duration : ").concat(_recettesDB.recettesDB[index].duration, "</h2>\n            <h3>").concat(Math.floor(Math.random() * 10 + 1), "/10 </h3>\n            </div>\n            <button id=\"").concat(index, "\"  >Voir les details</button>\n    </div>\n");
  };

  for (var index = 0; index < _recettesDB.recettesDB.length; index++) {
    _loop(index);
  }

  voirDetails();
}

function search() {
  input.addEventListener('input', function () {
    categories.innerHTML = "";

    for (var index = 0; index < _recettesDB.recettesDB.length; index++) {
      if (_recettesDB.recettesDB[index].name.toLowerCase().includes(input.value.toLowerCase())) {
        categories.innerHTML += "  \n                    <div class=\"recette\">\n                    <img src=\"../assets/recettes/".concat(index + 1, "/2.png\" >\n                    <div>\n                    <h1>").concat(_recettesDB.recettesDB[index].name, "</h1>\n                    <h2>Category : ").concat(_recettesDB.recettesDB[index].category, "</h2>\n                    <h2>Origine : ").concat(_recettesDB.recettesDB[index].country, "</h2>\n                    <h2>Duration : ").concat(_recettesDB.recettesDB[index].duration, "</h2>\n                    <h3>").concat(Math.floor(Math.random() * 10 + 1), "/10 </h3>\n                    </div>\n                    <button id=\"").concat(index, "\"  >Voir les details</button>\n            </div>\n");
      }
    }

    voirDetails();
  });
}

var catSelect = document.getElementById('cat-select');

function labelCategory() {
  catSelect.addEventListener('change', function () {
    console.log(catSelect.value.toLowerCase());

    if (catSelect.value.toLowerCase() === 'categories') {
      categories.innerHTML = "";
      set_recipes();
    } else {
      categories.innerHTML = "";

      for (var index = 0; index < _recettesDB.recettesDB.length; index++) {
        if (_recettesDB.recettesDB[index].category.toLowerCase() == catSelect.value.toLowerCase()) {
          categories.innerHTML += "  \n                        <div class=\"recette\">\n                        <img src=\"../assets/recettes/".concat(index + 1, "/2.png\" >\n                        <div>\n                          <h1>").concat(_recettesDB.recettesDB[index].name, "</h1>\n                          <h2>Category : ").concat(_recettesDB.recettesDB[index].category, "</h2>\n                          <h2>Origine : ").concat(_recettesDB.recettesDB[index].country, "</h2>\n                          <h2>Duration : ").concat(_recettesDB.recettesDB[index].duration, "</h2>\n                          <h3>").concat(Math.floor(Math.random() * 10 + 1), "/10 </h3>\n                        </div>\n                        <button id=\"").concat(index, "\"  >Voir les details</button>\n                </div>\n");
        }
      }
    }

    voirDetails();
  });
}

set_recipes();
search();
labelCategory();

function voirDetails() {
  var button = categories.getElementsByTagName('button');

  var _loop2 = function _loop2(index) {
    button[index].addEventListener('click', function () {
      location = '../html/details.html?recette=' + button[index].id;
    });
  };

  for (var index = 0; index < button.length; index++) {
    _loop2(index);
  }

  console.log('ll');
  console.log(button.length);
}