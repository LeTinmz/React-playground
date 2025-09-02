// Components/ResultList.js
import React from 'react';
import pokeTypeColor from '../utils/pokeTypeColor';
export const ResultList = ({ pokeList }) => {
    return (
        <ul className="results-list">
            {pokeList.map((pokemon) => (
                <li key={pokemon.name} className="pokemon-card">
                    <h3 className="pokemon-name">{pokemon.name}</h3>
                    <span
                        className="pokemon-type"
                        style={{ background: pokeTypeColor[pokemon.type.toLowerCase()] }}
                    >
                        {pokemon.type}
                    </span>
                </li>
            ))}
        </ul>
    );
};

export default ResultList;
