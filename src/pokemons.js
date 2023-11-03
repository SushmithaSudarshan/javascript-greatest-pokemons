// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
    const firePokemons = pokemons.filter( pokemon => pokemon.type.includes('Fire'));
    return [...new Set(firePokemons)];
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
    if(pokemons.length === 0) 
        return 0;

    const shortest = pokemons.reduce((currentSortest, pokemon) => (pokemon.height < currentSortest.height ? pokemon : currentSortest), pokemons[0]);
    return shortest.name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
    if(pokemons.length === 0)
        return 0;

    const totalCount = pokemons.reduce((sum, pokemon) => (pokemon.candy_count ? sum + pokemon.candy_count : sum), 0);
    const average = totalCount / pokemons.length;
    return parseFloat(average.toFixed(2));
}
// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
    if(pokemons.length === 0)
        return 0;

    const groundPokemons = pokemons.filter(pokemon => pokemon.type.includes('Ground'));
    const groundPokemonImages = groundPokemons.slice(0, 10).map(pokemon => pokemon.img);
    return groundPokemonImages;
}

// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
    if(pokemons.length === 0)
        return 0;

    const pikachu = pokemons.find(pokemon => pokemon.name === "Pikachu");
    
    if(!pikachu) return "Pikachu not found!";

    const pikachuWeight = parseFloat(pikachu.weight);
    
    if(isNaN(pikachuWeight)) return "Pikachu weight is not a valid number";

    const heavyPokemons = pokemons.filter(pokemon => {
        const pokemonWeight = parseFloat(pokemon.weight);
        return !isNaN(pokemonWeight) && pokemonWeight > pikachuWeight;
    }).map(pokemon => (pokemon.name));
    
    return heavyPokemons;
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
    const sortedpokemons = [...pokemons];

    sortedpokemons.sort((a, b) => a.name.localeCompare(b.name));

    return sortedpokemons.slice(0, 20).map(pokemon => pokemon.name);
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemons) {
    const singleWeaknessPokemons = pokemons.filter(pokemon => pokemon.weaknesses.length === 1).slice(0, 15).map(pokemon => pokemon.name);
    return singleWeaknessPokemons;
}