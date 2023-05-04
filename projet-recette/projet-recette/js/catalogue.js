import { recettesDB } from "../js/recettesDB.js";
let categories = document.getElementById('foods');
let input = document.querySelector('input')
let menu = document.getElementById('menu');
let menuPage = document.querySelector('.phoneMenu');



menu.addEventListener('click', () => {
    menuPage.classList.toggle('menu');
})

function set_recipes() {
    for (let index = 0; index < recettesDB.length; index++) {
        let moyenne = 0;
        let i = 0;
        let comment = recettesDB[index].comments
        comment.forEach(ele => {
            i++
            moyenne = moyenne + ele.rating
        })
        moyenne = moyenne / i;
        categories.innerHTML +=
            `  
            <div class="recette">
            <img src="../assets/recettes/${index + 1}/2.png" >
            <div>
            <h1>${recettesDB[index].name}</h1>
            <h2>Category : ${recettesDB[index].category}</h2>
            <h2>Origine : ${recettesDB[index].country}</h2>
            <h2>Duration : ${recettesDB[index].duration}</h2>
            <h3>${Math.floor(Math.random() * 10 + 1)}/10 </h3>
            </div>
            <button id="${index}"  >Voir les details</button>
    </div>
`
    }
    voirDetails();
}


function search() {
    input.addEventListener('input', () => {
        categories.innerHTML = ``
        for (let index = 0; index < recettesDB.length; index++) {
            if (recettesDB[index].name.toLowerCase().includes(input.value.toLowerCase())) {
                categories.innerHTML +=
                    `  
                    <div class="recette">
                    <img src="../assets/recettes/${index + 1}/2.png" >
                    <div>
                    <h1>${recettesDB[index].name}</h1>
                    <h2>Category : ${recettesDB[index].category}</h2>
                    <h2>Origine : ${recettesDB[index].country}</h2>
                    <h2>Duration : ${recettesDB[index].duration}</h2>
                    <h3>${Math.floor(Math.random() * 10 + 1)}/10 </h3>
                    </div>
                    <button id="${index}"  >Voir les details</button>
            </div>
`
            }

        }

        voirDetails();

    })

}

var catSelect = document.getElementById('cat-select')

function labelCategory() {
    catSelect.addEventListener('change', () => {
        console.log(catSelect.value.toLowerCase());
        if (catSelect.value.toLowerCase() === 'categories') {
            categories.innerHTML = ``
            set_recipes();
        } else {
            categories.innerHTML = ``
            for (let index = 0; index < recettesDB.length; index++) {
                if (recettesDB[index].category.toLowerCase() == catSelect.value.toLowerCase()) {
                    categories.innerHTML +=
                        `  
                        <div class="recette">
                        <img src="../assets/recettes/${index + 1}/2.png" >
                        <div>
                          <h1>${recettesDB[index].name}</h1>
                          <h2>Category : ${recettesDB[index].category}</h2>
                          <h2>Origine : ${recettesDB[index].country}</h2>
                          <h2>Duration : ${recettesDB[index].duration}</h2>
                          <h3>${Math.floor(Math.random() * 10 + 1)}/10 </h3>
                        </div>
                        <button id="${index}"  >Voir les details</button>
                </div>
`

                }

            }
        }
        voirDetails();
    })
}
set_recipes();
search();
labelCategory();

function voirDetails() {
    var button = categories.getElementsByTagName('button');
    for (let index = 0; index < button.length; index++) {
        button[index].addEventListener('click', () => {
            location = '../html/details.html?recette=' + button[index].id;
        })
    }
    console.log('ll');
    console.log(button.length);
}