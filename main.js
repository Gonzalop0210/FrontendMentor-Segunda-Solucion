const itemsNumberOne = document.querySelector('.numbre__one');
const itemsNumbreTwo = document.querySelector('.numbre__two');
const itemNumberThree = document.querySelector('.numbre__three');
const itemNumberFour = document.querySelector('.numbre__four');
const itemNumberFive = document.querySelector('.numbre__five');
const oneContainer = document.querySelector('.container__content');

itemsNumberOne.classList.remove('item__click');
itemsNumberOne.addEventListener('click', cambiarColorOne);
function cambiarColorOne() {
    itemsNumberOne.classList.toggle('item__click');
}

itemsNumbreTwo.classList.remove('item__click');
itemsNumbreTwo.addEventListener('click', cambiarColorTwo);
function cambiarColorTwo() {
    itemsNumbreTwo.classList.toggle('item__click');
}
itemNumberThree.classList.remove('item__click');
itemNumberThree.addEventListener('click', cambiarColorThree);
function cambiarColorThree() {
    itemNumberThree.classList.toggle('item__click');
}

itemNumberFour.classList.remove('item__click');
itemNumberFour.addEventListener('click', cambiarColorFour);
function cambiarColorFour() {
    itemNumberFour.classList.toggle('item__click');
}

itemNumberFive.classList.remove('item__click');
itemNumberFive.addEventListener('click', cambiarColorFive);
function cambiarColorFive() {
    itemNumberFive.classList.toggle('item__click');
}

const buttonSubmit = document.querySelector('.button');
const numberCount = document.querySelector('#number__count');
const twoContainer = document.querySelector('.container__content__thanks');
buttonSubmit.addEventListener('click', pageReply);
function pageReply() {
    let c = 0;
    oneContainer.classList.add('noMostrar');
    twoContainer.classList.remove('noMostrar');
    if (itemsNumberOne.classList.contains('item__click')) {
        c ++;
    }

    if (itemsNumbreTwo.classList.contains('item__click')) {
        c ++;
    }

    if (itemNumberThree.classList.contains('item__click')) {
        c ++;
    }

    if (itemNumberFour.classList.contains('item__click')) {
        c ++;
    }

    if (itemNumberFive.classList.contains('item__click')) {
        c ++;
    }
    numberCount.innerText = c;
}