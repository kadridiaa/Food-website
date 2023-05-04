"use strict";

var _recettesDB = require("../js/recettesDB.js");

var parmas = new URLSearchParams(window.location.search);
var id = parmas.get('recette');
console.log(id);
var menu = document.getElementById('menu');
var menuPage = document.querySelector('.phoneMenu');
var nom = document.querySelector('h1');
var detail = document.getElementById('rec_details');
var ingredients = document.querySelector('.ingredients');
var instructions = document.querySelector('.instructions');
var comments = _recettesDB.recettesDB[id].comments;
var allComments = document.querySelector('.note');
var moyenne = 0;
var i = 0;
menu.addEventListener('click', function () {
  menuPage.classList.toggle('menu');
});
comments.forEach(function (comment) {
  i++;
  console.log(comment.content);
  moyenne = moyenne + comment.rating;
  allComments.innerHTML += "\n    <div class=\"note_com\" id=\"note_com\">\n                    <div class=\"user\">\n                       <img src=\"../user.png\" id=\"user\" alt=\"\">\n                        <h1>".concat(comment.user, "</h1>\n                    </div>\n                    <h1>la note : ").concat(comment.rating, " /10</h1>\n                    <p>").concat(comment.content, "</p>\n                </div>\n    ");
});
moyenne = moyenne / i;

for (var index = 0; index < _recettesDB.recettesDB[id].ingredients.length; index++) {
  ingredients.innerHTML += "- ".concat(_recettesDB.recettesDB[id].ingredients[index], " <br>");
}

for (var _index = 0; _index < _recettesDB.recettesDB[id].instructions.length; _index++) {
  instructions.innerHTML += "-".concat(_recettesDB.recettesDB[id].instructions[_index], " <br>");
}

id++;

function details() {
  detail.innerHTML = "<h1>le nom de recette est :  ".concat(_recettesDB.recettesDB[id - 1].name, "</h1>\n    \n        <div class=\"recette\">\n        <img src=\"../assets/recettes/").concat(id, "/", 1, ".png\" alt=\"\">\n            <div class=\"info\">\n                <h2>category : <br>").concat(_recettesDB.recettesDB[id - 1].category, "</h2>\n                <h2>origine : <br>").concat(_recettesDB.recettesDB[id - 1].country, "</h2>\n                <h2>duration : <br>").concat(_recettesDB.recettesDB[id - 1].duration, "</h2>\n                <h2>Note : <br>").concat(moyenne, "/10</h2>\n            </div>\n        </div>\n        <span>About recette</span>\n        <div class=\"full_details\">\n            <div class=\"details\">\n                ").concat(ingredients.outerHTML, " \n                ").concat(instructions.outerHTML, " \n            </div>\n            <div class=\"images\">\n            <img src=\"../assets/recettes/").concat(id, "/", 2, ".png\" alt=\"\">\n            <img src=\"../assets/recettes/").concat(id, "/", 3, ".png\" alt=\"\">\n            <img src=\"../assets/recettes/").concat(id, "/", 4, ".png\" alt=\"\">\n            </div>\n            <span>Note and comments</span>\n            ").concat(allComments.outerHTML, ";\n        </div>\n        "); // `
}

details();