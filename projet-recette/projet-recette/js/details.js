import { recettesDB } from "../js/recettesDB.js";


const parmas = new URLSearchParams(window.location.search)
let id = parmas.get('recette')
console.log(id);
let menu = document.getElementById('menu');
let menuPage = document.querySelector('.phoneMenu');
let nom = document.querySelector('h1');
let detail = document.getElementById('rec_details');
let ingredients = document.querySelector('.ingredients');
let instructions = document.querySelector('.instructions');
let comments = recettesDB[id].comments;
let allComments = document.querySelector('.note');
let moyenne = 0;
let i = 0;

menu.addEventListener('click', () => {
    menuPage.classList.toggle('menu');
})
comments.forEach(comment => {
    i++;
    console.log(comment.content);
    moyenne = moyenne + comment.rating;
    allComments.innerHTML += `
    <div class="note_com" id="note_com">
                    <div class="user">
                       <img src="../user.png" id="user" alt="">
                        <h1>${comment.user}</h1>
                    </div>
                    <h1>la note : ${comment.rating} /10</h1>
                    <p>${comment.content}</p>
                </div>
    `
})
moyenne = moyenne / i;
for (let index = 0; index < recettesDB[id].ingredients.length; index++) {
    ingredients.innerHTML += `- ${recettesDB[id].ingredients[index]} <br>`
}
for (let index = 0; index < recettesDB[id].instructions.length; index++) {
    instructions.innerHTML += `-${recettesDB[id].instructions[index]} <br>`
}

id++;

function details() {
    detail.innerHTML = `<h1>le nom de recette est :  ${recettesDB[id - 1].name}</h1>
    
        <div class="recette">
        <img src="../assets/recettes/${id}/${1}.png" alt="">
            <div class="info">
                <h2>category : <br>${recettesDB[id - 1].category}</h2>
                <h2>origine : <br>${recettesDB[id - 1].country}</h2>
                <h2>duration : <br>${recettesDB[id - 1].duration}</h2>
                <h2>Note : <br>${moyenne}/10</h2>
            </div>
        </div>
        <span>About recette</span>
        <div class="full_details">
            <div class="details">
                ${ingredients.outerHTML} 
                ${instructions.outerHTML} 
            </div>
            <div class="images">
            <img src="../assets/recettes/${id}/${2}.png" alt="">
            <img src="../assets/recettes/${id}/${3}.png" alt="">
            <img src="../assets/recettes/${id}/${4}.png" alt="">
            </div>
            <span>Note and comments</span>
            ${allComments.outerHTML};
        </div>
        `



    // `
}
details();