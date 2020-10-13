import { reset } from './utils.js';

const startButton = document.querySelector('button');

startButton.addEventListener('click', () => {
    reset();
    window.location.replace('./catch/catch.html');
});