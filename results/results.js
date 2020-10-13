import { reset } from '../utils.js';
import { renderResultsTable } from './results-util.js';

renderResultsTable();

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', () => {
    reset();
});