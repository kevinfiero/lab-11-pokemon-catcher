import { initializeData, setInLocalStorage } from './utils.js';



const startButton = document.querySelector('button');

startButton.addEventListener('click', () => {


    initializeData();
    setInLocalStorage('currentThree', [1, 1, 1]);

    window.location.replace('./catch/catch.html');

});