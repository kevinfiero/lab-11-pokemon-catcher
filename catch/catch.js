import { incrementCaught, renderThreePokemon, getThreeRandomPokemon, initializeData, getFromLocalStorage, setInLocalStorage, incrementEncounter } from './catch-utils.js';

initializeData();
const tempArray = [1, 1, 1];
setInLocalStorage('currentThree', tempArray);
getThreeRandomPokemon();
const currentThreeArray = getFromLocalStorage('currentThree');
renderThreePokemon(currentThreeArray);
setInLocalStorage('caught', 0);


const img1Block = document.getElementById('img1');
const img2Block = document.getElementById('img2');
const img3Block = document.getElementById('img3');

img1Block.addEventListener('click', () => {

    let currentThreeArray = getFromLocalStorage('currentThree');

    incrementCaught(currentThreeArray[0]);
    incrementEncounter(currentThreeArray[0]);
    incrementEncounter(currentThreeArray[1]);
    incrementEncounter(currentThreeArray[2]);

    if (Number(getFromLocalStorage('caught') === 10)) {
        window.location.href = './results.html';
    }
    
    getThreeRandomPokemon();
    currentThreeArray = getFromLocalStorage('currentThree');
    renderThreePokemon(currentThreeArray);

});

img2Block.addEventListener('click', () => {

    let currentThreeArray = getFromLocalStorage('currentThree');

    incrementCaught(currentThreeArray[1]);
    incrementEncounter(currentThreeArray[0]);
    incrementEncounter(currentThreeArray[1]);
    incrementEncounter(currentThreeArray[2]);

    if (Number(getFromLocalStorage('caught') === 10)) {
        window.location.href = './results.html';
    }

    getThreeRandomPokemon();
    currentThreeArray = getFromLocalStorage('currentThree');
    renderThreePokemon(currentThreeArray);

});

img3Block.addEventListener('click', () => {

    let currentThreeArray = getFromLocalStorage('currentThree');

    incrementCaught(currentThreeArray[2]);
    incrementEncounter(currentThreeArray[0]);
    incrementEncounter(currentThreeArray[1]);
    incrementEncounter(currentThreeArray[2]);

    if (Number(getFromLocalStorage('caught') === 10)) {
        window.location.href = './results.html';
    }

    getThreeRandomPokemon();
    currentThreeArray = getFromLocalStorage('currentThree');
    renderThreePokemon(currentThreeArray);



});




