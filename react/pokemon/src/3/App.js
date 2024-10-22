import React, {useState} from 'react';

const PokemonSearch = () => {
    const [search, setSearch] = useState('');
    const [result, setResult] = useState('');

    const pokemonDatabase = {
        pikachu: 'Electric type',
        charizard: 'Fire/Flying type',
        bulbasaur: 'Grass/Poison type',
    };

    const handleSearch = () => {
        const pokemon = search.toLowerCase();
        setResult(pokemonDatabase[pokemon] || 'Pokemon not found');
    };

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Enter Pokemon name"
            />
            <button onClick={handleSearch}>Search</button>
            <p>{result}</p>
        </div>
    );
};

export default PokemonSearch;