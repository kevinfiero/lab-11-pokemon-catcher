import { incrementCaught, findPokemonIndexInLocalStorage, renderThreePokemon, getThreeRandomPokemon, initializeData, getFromLocalStorage, setInLocalStorage, findByID, incrementEncounter } from './utils.js';

initializeData();
getThreeRandomPokemon();
const currentThreeArray = getFromLocalStorage('currentThree');
renderThreePokemon(currentThreeArray);


const img1Block = document.getElementById('img1');
const img2Block = document.getElementById('img2');
const img3Block = document.getElementById('img3');

img1Block.addEventListener('click', () => {

    let currentThreeArray = getFromLocalStorage('currentThree');

    incrementCaught(currentThreeArray[0]);
    incrementEncounter(currentThreeArray[0]);
    incrementEncounter(currentThreeArray[1]);
    incrementEncounter(currentThreeArray[2]);

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

    getThreeRandomPokemon();
    currentThreeArray = getFromLocalStorage('currentThree');
    renderThreePokemon(currentThreeArray);

});




