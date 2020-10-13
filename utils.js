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
    console.log(indexArray);
    return threePokemonArray;
}