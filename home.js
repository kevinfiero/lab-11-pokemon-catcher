import { initializeData, setInLocalStorage, getFromLocalStorage } from './utils.js';
import { renderThreePokemon, getThreeRandomPokemon } from './catch/catch-utils.js';



const startButton = document.querySelector('button');

startButton.addEventListener('click', () => {

    initializeData();
    setInLocalStorage('currentThree', [1, 1, 1]);

    window.location.replace('./catch/catch.html');


});