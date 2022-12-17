const itemsNumberOne = document.querySelector('.numbre__one');
const itemsNumbreTwo = document.querySelector('.numbre__two');
const itemNumberThree = document.querySelector('.numbre__three');
const itemNumberFour = document.querySelector('.numbre__four');
const itemNumberFive = document.querySelector('.numbre__five');

itemsNumberOne.classList.remove('item__click');
itemsNumberOne.addEventListener('click', cambiarColor);

function cambiarColor() {
    itemsNumberOne.classList.toggle('item__click');
}