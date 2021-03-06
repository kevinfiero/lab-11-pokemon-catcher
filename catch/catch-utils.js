import pokeRawArray from '../data/pokemon.js';
import { setInLocalStorage, getFromLocalStorage } from '../utils.js';

export function getThreeRandomPokemon(){

    let index;
    let indexArray = [];
    const roundNum = getFromLocalStorage('round');
    const roundArray = getFromLocalStorage('pokeData');
    const pokeListArray = roundArray[roundNum];
    const localThreeArray = getFromLocalStorage('currentThree');

    for (let j = 0; j < 3; j++){
        indexArray.push(findPokemonIndexInLocalStorage(localThreeArray[j]));
    }
    console.log('before: ' + indexArray);
    for (let i = 0; i < 3; i++){
        do {
            index = Math.floor(Math.random() * pokeRawArray.length);
            console.log(index);
        }
        while (indexArray.includes(index));
        
        indexArray.push(index);
        localThreeArray[i] = pokeListArray[index];
        
    }
    console.log('after: ' + indexArray);
    setInLocalStorage('currentThree', localThreeArray);
}

export function incrementEncounter(thisPokemon){

    const roundNum = getFromLocalStorage('round');
    const roundArray = getFromLocalStorage('pokeData');
    const pokeListArray = roundArray[roundNum];

    const i = findPokemonIndexInLocalStorage(thisPokemon);
    pokeListArray[i].encounter++;

    roundArray[roundNum] = pokeListArray;

    setInLocalStorage('pokeData', roundArray);

}

export function incrementCaught(thisPokemon){

    const roundNum = getFromLocalStorage('round');
    const roundArray = getFromLocalStorage('pokeData');
    const pokeListArray = roundArray[roundNum];

    const i = findPokemonIndexInLocalStorage(thisPokemon);
    pokeListArray[i].caught++;

    roundArray[roundNum] = pokeListArray;
    setInLocalStorage('pokeData', roundArray);

    updateNumCaught();

}

export function renderThreePokemon(threePokemonArray){

    const img1Block = document.getElementById('img1');
    const currentEncounter1 = document.getElementById('encounter-current-1');
    const currentCaught1 = document.getElementById('caught-current-1');

    img1Block.src = threePokemonArray[0].imgURL;
    currentEncounter1.textContent = threePokemonArray[0].encounter;
    currentCaught1.textContent = threePokemonArray[0].caught;

    const img2Block = document.getElementById('img2');
    const currentEncounter2 = document.getElementById('encounter-current-2');
    const currentCaught2 = document.getElementById('caught-current-2');
    img2Block.src = threePokemonArray[1].imgURL;
    currentEncounter2.textContent = threePokemonArray[1].encounter;
    currentCaught2.textContent = threePokemonArray[1].caught;

    const img3Block = document.getElementById('img3');
    const currentEncounter3 = document.getElementById('encounter-current-3');
    const currentCaught3 = document.getElementById('caught-current-3');
    img3Block.src = threePokemonArray[2].imgURL;
    currentEncounter3.textContent = threePokemonArray[2].encounter;
    currentCaught3.textContent = threePokemonArray[2].caught;

}


export function findPokemonIndexInLocalStorage(thisPokemon){
    const roundNum = getFromLocalStorage('round');
    const roundArray = getFromLocalStorage('pokeData');
    const pokeListArray = roundArray[roundNum];
    
    for (let i = 0; i < pokeListArray.length; i++){

        if (pokeListArray[i].name === thisPokemon.name){
            return i;
        }
    }
}

export function updateNumCaught(){
    const numCaught = Number(getFromLocalStorage('caught')) + 1;
    const numCaughtDiv = document.getElementById('num-caught');
    numCaughtDiv.textContent = `Pokemon Caught: ${numCaught}`;
    setInLocalStorage('caught', numCaught);
}

