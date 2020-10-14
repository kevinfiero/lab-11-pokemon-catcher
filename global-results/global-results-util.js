import { getFromLocalStorage, setInLocalStorage } from '../utils.js';

export function renderResultsTable(){

    const roundNum = getFromLocalStorage('round');
    const roundArray = getFromLocalStorage('pokeData');
    const pokeArray = roundArray[roundNum];

    sumAllRounds();
    updateNumRounds();

    if (pokeArray !== null){
        const tbody = document.getElementById('table-current-body');
    
        let name;
        let encounter;
        let caught;
    
        for (let i = 0; i < pokeArray.length; i++){
            const tr = document.createElement('tr');
            name = pokeArray[i].name;
            encounter = pokeArray[i].encounter;
            caught = pokeArray[i].caught;
            tr.innerHTML = `<tr><td>${name}</td><td>${encounter}</td><td>${caught}</td></tr>`;
            tbody.appendChild(tr); 
        }
    }
}

export function sumAllRounds(){
    
    const roundArray = getFromLocalStorage('pokeData');
    const globalResults = roundArray[0];

    for (let i = 1; i < roundArray.length; i++){
        for (let j = 0; j < roundArray[i].length; j++){
            globalResults[j].encounter = globalResults[j].encounter + roundArray[i][j].encounter;
            globalResults[j].caught = globalResults[j].caught + roundArray[i][j].caught;
        }
    }

    setInLocalStorage('global', globalResults);

}

export function renderGlobalResultsTable(){

    const pokeArray = getFromLocalStorage('global');

    sumAllRounds();

    if (pokeArray !== null){
        const tbody = document.getElementById('table-global-body');
    
        let name;
        let encounter;
        let caught;
    
        for (let i = 0; i < pokeArray.length; i++){
            const tr = document.createElement('tr');
            name = pokeArray[i].name;
            encounter = pokeArray[i].encounter;
            caught = pokeArray[i].caught;
            tr.innerHTML = `<tr><td>${name}</td><td>${encounter}</td><td>${caught}</td></tr>`;
            tbody.appendChild(tr); 
        }
    }
}

export function updateNumRounds(){
    const numRounds = Number(getFromLocalStorage('round')) + 1;
    const numRoundsDiv = document.getElementById('num-rounds');
    numRoundsDiv.textContent = `Rounds Played: ${numRounds}`;
}

