import React, {useState} from 'react';

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([
        {id: 1, name: 'Bulbasaur'},
        {id: 2, name: 'Charmander'},
        {id: 3, name: 'Squirtle'},
    ]);

    const addPokemon = () => {
        const newPokemon = {id: pokemons.length + 1, name: 'Pikachu'};
        setPokemons([...pokemons, newPokemon]);
    };

    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {pokemons.map(pokemon => (
                    <li key={pokemon.id}>{pokemon.name}</li>
                ))}
            </ul>
            <button onClick={addPokemon}>Add Pikachu</button>
        </div>
    );
};

export default PokemonList;