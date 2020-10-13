import { getFromLocalStorage } from '../utils.js';

export function renderResultsTable(){

    const pokeArray = getFromLocalStorage('session1');

    if (pokeArray !== null){
        const tbody = document.getElementById('table-body');
    

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