import pokeRawArray from './data/pokemon.js';

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

export function reset(){
    localStorage.clear();
    location.reload();
    setInLocalStorage('pokeData', []);
    initializeData();
    setInLocalStorage('currentThree', [-1, -1, -1]);
    setInLocalStorage('round', 0);
}

export function initializeData(){

    const roundArray = getFromLocalStorage('pokeData');
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
    }
    roundArray.push(pokeArray);
    console.log(roundArray.length);
    setInLocalStorage('pokeData', roundArray);
}

export function nextRound(){

    let roundNum = getFromLocalStorage('round');
    roundNum++;
    setInLocalStorage('round', roundNum);

    initializeData();

    setInLocalStorage('currentThree', [-1, -1, -1]);
    
}