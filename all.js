//toggle header menu
let openHeaderMenu = document.querySelector('.hamburger__header');
let headerMenu = document.querySelector('.nav__header');
let closeHeaderMenu = document.querySelector('.hamburger-close__header');

function toggleHeaderMenu(){
    openHeaderMenu.classList.toggle('active');
    headerMenu.classList.toggle('active');
    closeHeaderMenu.classList.toggle('active')
}

openHeaderMenu.addEventListener('click', toggleHeaderMenu);
closeHeaderMenu.addEventListener('click', toggleHeaderMenu);


//toggle portfolio categories

let openCat = document.querySelector('.hamburger__portfolio');
let portfolioCat = document.querySelector('.nav__portfolio');
let closeCat = document.querySelector('.hamburger-close__portfolio');

function toggleCats(){
    openCat.classList.toggle('active');
    portfolioCat.classList.toggle('active');
    closeCat.classList.toggle('active')
}

openCat.addEventListener('click', toggleCats);
closeCat.addEventListener('click', toggleCats);