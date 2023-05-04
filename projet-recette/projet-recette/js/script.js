let slide = document.getElementById('slide-images');
let catBut = document.getElementById('cata');
let menu = document.getElementById('menu');
let menuPage = document.querySelector('.phoneMenu');
var inMenu = true;



menu.addEventListener('click', () => {
    menuPage.classList.toggle('menu');

})

catBut.addEventListener('click', () => {
    location.href = '../html/catalogue.html';
})


function getRandomNonRepeatingIntegers(min, max) {
    // Create an array of integers between min and max
    let integers = [];

    for (let i = min; i <= max; i++) {
        integers.push(i);

    }

    // Shuffle the array
    for (let i = integers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [integers[i], integers[j]] = [integers[j], integers[i]];
    }

    // Return the first 3 elements of the shuffled array
    return integers.slice(0, 3);
}

// Example usage:

let imgs_tab = getRandomNonRepeatingIntegers(1, 10);


function changing() {
    slide.innerHTML += `<div class="img-container">
    <a href="../html/details.html?recette=${imgs_tab[0]-1}"> <img src="../assets/recettes/${imgs_tab[0]}/1.png"></a>
</div>
<div class="img-container">
<a href="../html/details.html?recette=${imgs_tab[1]-1}"><img src="../assets/recettes/${imgs_tab[1]}/1.png"></a>
</div>
<div class="img-container">
<a href="../html/details.html?recette=${imgs_tab[2]-1}"> <img src="../assets/recettes/${imgs_tab[2]}/1.png"></a>
</div>`
};

changing();