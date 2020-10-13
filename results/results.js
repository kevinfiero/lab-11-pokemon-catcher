import { nextRound, reset } from '../utils.js';
import { renderResultsTable, renderGlobalResultsTable } from './results-util.js';

renderResultsTable();
renderGlobalResultsTable();

const resetButton = document.getElementById('reset');
const catchButton = document.getElementById('catch');

resetButton.addEventListener('click', () => {
    reset();
    window.location.replace('../catch/catch.html');
});

catchButton.addEventListener('click', () => {
    nextRound();
});