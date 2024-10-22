import React from 'react';

const PokemonCard = ({name, type, image}) => {
    return (
        <div className="pokemon-card">
            <img className="card-image" src={image} alt={name}/>
            <h2>{name}</h2>
            <p>Type: {type}</p>
        </div>
    );
};

export default PokemonCard;