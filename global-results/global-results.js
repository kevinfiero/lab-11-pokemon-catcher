import { getFromLocalStorage, nextRound, reset, cap } from '../utils.js';
import { renderGlobalResultsTable, updateNumRounds } from './global-results-util.js';

renderGlobalResultsTable();

const resetButton = document.getElementById('reset');
const catchButton = document.getElementById('catch');

updateNumRounds();


resetButton.addEventListener('click', () => {
    reset();
    window.location.replace('../catch/catch.html');
});

catchButton.addEventListener('click', () => {
    nextRound();
});

const pokeArray = getFromLocalStorage('global');
const encounters = [];
const caught = [];
const label = [];
const labelColorsEncounter = [];
const labelColorsCaught = [];
const randomColorEncounter = randomColor();
const randomColorCaught = randomColor();

for (let i = 0; i < pokeArray.length; i++){

    encounters.push(pokeArray[i].encounter);
    caught.push(pokeArray[i].caught);
    label.push(cap(pokeArray[i].name));
    labelColorsEncounter[i] = randomColorEncounter;
    labelColorsCaught[i] = randomColorCaught;

}

const ctx = document.getElementById('chart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: label,
        datasets: [{
            label: '# of Captures',
            data: caught,
            backgroundColor: labelColorsCaught
        },
        {
            label: '# of Encounters',
            data: encounters,
            backgroundColor: labelColorsEncounter
        }]   
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    stepSize: 1,
                    beginAtZero:true
                }
            }]
        }
    }
});

myChart.canvas.parentNode.style.height = '500px';
myChart.canvas.parentNode.style.width = '1000px';

export function randomColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
}

