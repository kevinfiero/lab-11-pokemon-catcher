import pokeRawArray from './data/pokemon.js';

export function initializeData(){

    let pokeArray = [];

    for (let i = 0; i < pokeRawArray.length; i++){

        var pokemon = {
            name: pokeRawArray[i].pokemon,
            imgURL: pokeRawArray[i].url_image,
            encounter: 0,
            caught: 0,
            usedLastRound: false
        };

        pokeArray.push(pokemon);
        setInLocalStorage('session1', pokeArray);
    }
}

export function getFromLocalStorage(key){
    return JSON.parse(localStorage.getItem(key));
}

export function setInLocalStorage(key, value){
    localStorage.setItem(key, JSON.stringify(value));
}

export function findByID(array, id){
    for (const element of array){
        if (element.id === id){
            return element;
        }
    }
    return null;
}

export function getThreeRandomPokemon(){

    let indexArray = [];
    let index;
  
    const localStorageArray = getFromLocalStorage('session1');
    const threePokemonArray = [];
    
    for (let i = 0; i < 3; i++){

        do {
            index = Math.floor(Math.random() * pokeRawArray.length);
        }
        while (indexArray.includes(index));

        indexArray.push(index);
        
        threePokemonArray[i] = localStorageArray[index];
   
    }
    setInLocalStorage('currentThree', threePokemonArray);
    return threePokemonArray;
}

export function incrementEncounter(thisPokemon){

    const localStorageArray = getFromLocalStorage('session1');

    for (let i = 0; i < localStorageArray.length; i++){

        if (localStorageArray[i].name === thisPokemon.name){
            localStorageArray[i].encounter++;
        }
    }

    setInLocalStorage('session1', localStorageArray);

}

export function incrementCaught(thisPokemon){

    const localStorageArray = getFromLocalStorage('session1');

    for (let i = 0; i < localStorageArray.length; i++){

        if (localStorageArray[i].name === thisPokemon.name){
            localStorageArray[i].caught++;
        }
    }

    setInLocalStorage('session1', localStorageArray);

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

    const localStorageArray = getFromLocalStorage('session1');

    for (let i = 0; i < localStorageArray.length; i++){

        if (localStorageArray[i].name === thisPokemon.name){
            return i;
        }
    }

}